<?php
/**
 * Core plugin class.
 *
 * @link       https://www.cyberchimps.com
 * @since      1.0.0
 *
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 */

/**
 * The core plugin class Responsive_Block_Editor_Addons.
 *
 * @since      1.0.0
 * @package    Responsive_Block_Editor_Addons
 * @subpackage Responsive_Block_Editor_Addons/includes
 * @author     CyberChimps <support@cyberchimps.com>
 */
class Responsive_Block_Editor_Addons {

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'RESPONSIVE_BLOCK_EDITOR_ADDONS_VER' ) ) {
			$this->version = RESPONSIVE_BLOCK_EDITOR_ADDONS_VER;
		} else {
			$this->version = '1.3.0';
		}
		$this->plugin_name = 'responsive-block-editor-addons';

		add_action( 'plugins_loaded', array( $this, 'responsive_block_editor_addons_loader' ) );

		add_action( 'init', array( $this, 'responsive_block_editor_addons_block_assets' ) );

		add_filter( 'block_categories_all', array( $this, 'responsive_block_editor_addons_add_custom_block_category' ) );

		add_action( 'enqueue_block_editor_assets', array( $this, 'responsive_block_editor_addons_editor_assets' ) );

		add_action( 'enqueue_block_assets', array( $this, 'responsive_block_editor_addons_frontend_assets' ) );

		add_action( 'admin_enqueue_scripts', array( &$this, 'responsive_block_editor_addons_admin_enqueue_styles' ) );

		// Responsive Addons Menu.
		add_action( 'admin_menu', array( $this, 'responsive_block_editor_addons_admin_menu' ) );

		// Remove all admin notices from specific pages.
		add_action( 'admin_init', array( $this, 'responsive_block_editor_addons_admin_init' ) );

		// Redirect to Getting Started Page on Plugin Activation.
		add_action( 'admin_init', array( $this, 'responsive_block_editor_addons_maybe_redirect_to_getting_started' ) );

		add_action( 'wp_ajax_responsive_block_editor_post_pagination', array( $this, 'post_pagination' ) );
        add_action( 'wp_enqueue_scripts', array( $this, 'load_dashicons_front_end' ) );

	}

	/**
	 * Sends the Post pagination markup to edit.js
	 *
	 * @since 1.0.3
	 */
	public function post_pagination() {
		check_ajax_referer( 'responsive_block_editor_ajax_nonce', 'nonce' );

		if ( isset( $_POST['attributes'] ) ) {

			$query = $this->get_query( $_POST['attributes'], 'grid' );

			$pagination_markup = $this->render_pagination( $query, $_POST['attributes'] );

			wp_send_json_success( $pagination_markup );
		}

		wp_send_json_error( ' No attributes recieved' );
	}

	/**
	 * Renders the post post pagination on server.
	 *
	 * @param object $query WP_Query object.
	 * @param array  $attributes Array of block attributes.
	 * @since 1.0.3
	 */
	public function render_pagination( $query, $attributes ) {

		$permalink_structure = get_option( 'permalink_structure' );
		$base                = untrailingslashit( wp_specialchars_decode( get_pagenum_link() ) );
		$base                = $this->build_base_url( $permalink_structure, $base );
		$format              = $this->paged_format( $permalink_structure, $base );
		$paged               = $this->get_paged( $query );
		$page_limit          = min( $attributes['pageLimit'], $query->max_num_pages );
		$page_limit          = isset( $page_limit ) ? $page_limit : $attributes['postsToShow'];
		$attributes['postsToShow'];

		$links = paginate_links(
			array(
				'base'      => $base . '%_%',
				'format'    => $format,
				'current'   => ( ! $paged ) ? 1 : $paged,
				'total'     => $page_limit,
				'type'      => 'array',
				'mid_size'  => 4,
				'end_size'  => 4,
				'prev_text' => $attributes['previousButtonText'],
				'next_text' => $attributes['nextButtonText'],
			)
		);

		if ( isset( $links ) ) {
			return wp_kses_post( implode( PHP_EOL, $links ) );
		}

		return '';
	}

	/**
	 * Gives the paged Query var.
	 *
	 * @param Object $query Query.
	 * @return int $paged Paged Query var.
	 * @since 1.0.3
	 */
	public static function get_paged( $query ) {

		global $paged;

		// Check the 'paged' query var.
		$paged_qv = $query->get( 'paged' );

		if ( is_numeric( $paged_qv ) ) {
			return $paged_qv;
		}

		// Check the 'page' query var.
		$page_qv = $query->get( 'page' );

		if ( is_numeric( $page_qv ) ) {
			return $page_qv;
		}

		// Check the $paged global?
		if ( is_numeric( $paged ) ) {
			return $paged;
		}

		return 0;
	}


	/**
	 * Returns the Paged Format.
	 *
	 * @param string $permalink_structure Premalink Structure.
	 * @param string $base Base.
	 * @since 1.0.3
	 */
	public static function paged_format( $permalink_structure, $base ) {

		$page_prefix = empty( $permalink_structure ) ? 'paged' : 'page';

		if ( ! empty( $permalink_structure ) ) {
			$format  = substr( $base, -1 ) !== '/' ? '/' : '';
			$format .= $page_prefix . '/';
			$format .= '%#%';
			$format .= substr( $permalink_structure, -1 ) === '/' ? '/' : '';
		} elseif ( empty( $permalink_structure ) || is_search() ) {
			$parse_url = wp_parse_url( $base, PHP_URL_QUERY );
			$format    = empty( $parse_url ) ? '?' : '&';
			$format   .= $page_prefix . '=%#%';
		}

		return $format;
	}

	/**
	 * Builds the base url.
	 *
	 * @param string $permalink_structure Premalink Structure.
	 * @param string $base Base.
	 * @since 1.0.3
	 */
	public static function build_base_url( $permalink_structure, $base ) {
		// Check to see if we are using pretty permalinks.
		if ( ! empty( $permalink_structure ) ) {

			if ( strrpos( $base, 'paged-' ) ) {
				$base = substr_replace( $base, '', strrpos( $base, 'paged-' ), strlen( $base ) );
			}

			// Remove query string from base URL since paginate_links() adds it automatically.
			// This should also fix the WPML pagination issue that was added since 1.0.3.
			if ( count( $_GET ) > 0 ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
				$base = strtok( $base, '?' );
			}

			// Add trailing slash when necessary.
			if ( '/' === substr( $permalink_structure, -1 ) ) {
				$base = trailingslashit( $base );
			} else {
				$base = untrailingslashit( $base );
			}
		} else {
			$url_params = wp_parse_url( $base, PHP_URL_QUERY );

			if ( empty( $url_params ) ) {
				$base = trailingslashit( $base );
			}
		}

		return $base;
	}

	/**
	 * Returns Query.
	 *
	 * @param array  $attributes The block attributes.
	 * @param string $block_type The Block Type.
	 * @since 1.0.3
	 */
	public static function get_query( $attributes, $block_type ) {

		// Block type is grid/masonry/carousel/timeline.
		$query_args = array(
			'posts_per_page'      => ( isset( $attributes['postsToShow'] ) ) ? $attributes['postsToShow'] : 6,
			'post_status'         => 'publish',
			'post_type'           => ( isset( $attributes['postType'] ) ) ? $attributes['postType'] : 'post',
			'order'               => ( isset( $attributes['order'] ) ) ? $attributes['order'] : 'desc',
			'orderby'             => ( isset( $attributes['orderBy'] ) ) ? $attributes['orderBy'] : 'date',
			'ignore_sticky_posts' => 1,
			'paged'               => 1,
		);

		if ( $attributes['excludeCurrentPost'] ) {
			$query_args['post__not_in'] = array( get_the_ID() );
		}

		if ( isset( $attributes['categories'] ) && '' !== $attributes['categories'] ) {
			$query_args['tax_query'][] = array(
				'taxonomy' => ( isset( $attributes['taxonomyType'] ) ) ? $attributes['taxonomyType'] : 'category',
				'field'    => 'id',
				'terms'    => $attributes['categories'],
				'operator' => 'IN',
			);
		}

		if ( 'grid' === $block_type && isset( $attributes['postPagination'] ) && true === $attributes['postPagination'] ) {

			if ( get_query_var( 'paged' ) ) {

				$paged = get_query_var( 'paged' );

			} elseif ( get_query_var( 'page' ) ) {

				$paged = get_query_var( 'page' );

			} else {

				$paged = 1;

			}
			$query_args['posts_per_page'] = $attributes['postsToShow'];
			$query_args['paged']          = $paged;

		}

		if ( 'masonry' === $block_type && isset( $attributes['paginationType'] ) && 'none' !== $attributes['paginationType'] && isset( $attributes['paged'] ) ) {

			$query_args['paged'] = $attributes['paged'];

		}

		$query_args = apply_filters( "responsive_block_editor_post_query_args_{$block_type}", $query_args, $attributes );

		return new WP_Query( $query_args );
	}

	/**
	 * Register the menu for the plugin.
	 *
	 * @return void [description]
	 */
	public function responsive_block_editor_addons_admin_menu() {
		// Create Sub Menu with parent slug null .
		add_submenu_page(
			'',
			__( 'Getting Started', 'responsive-addons' ),
			__( 'Getting Started', 'responsive-addons' ),
			'manage_options',
			'responsive_block_editor_addons',
			array( $this, 'responsive_block_editor_addons_getting_started' ),
			10
		);

	}

	/**
	 * Display Getting Started Page.
	 *
	 * Output the content for the getting started page.
	 *
	 * @access public
	 */
	public function responsive_block_editor_addons_getting_started() {

		?>
		<div class="responsive-block-editor-addons-admin-page responsive-block-editor-addons-welcome">
			<div class="responsive-block-editor-addons-welcome-container">
				<div class="responsive-block-editor-addons-welcome-block responsive-block-editor-addons-welcome-block-first">
					<div class="responsive-block-editor-addons-welcome-logo-container">
						<div class="responsive-block-editor-addons-welcome-logo responsive-block-editor-addons-bg-img">
						</div>
					</div>
					<div class="responsive-block-editor-addons-welcome-block-inner">
						<h3><?php echo esc_html__( 'Welcome to Responsive Block Editor Addons', 'responsive-block-editor-addons' ); ?></h3>
						<p class="responsive-block-editor-addons-subtitle">
							<?php
								/* translators: %s: search term */
								$name_and_current_version = sprintf( __( 'Responsive Block Editor Addons %s', 'responsive-block-editor-addons' ), RESPONSIVE_BLOCK_EDITOR_ADDONS_VER );
								echo esc_html( $name_and_current_version );
							?>
							<a href="https://cyberchimps.com/blocks/"><?php echo esc_html__( 'View Demo', 'responsive-block-editor-addons' ); ?></a>
						</p>
						<p class="responsive-block-editor-addons-subtitle">
							<?php echo esc_html__( 'Thank you for choosing Responsive Gutenberg Block Editor - The Most Powerful WordPress Editor Plugin', 'responsive-block-editor-addons' ); ?>
						</p>
					</div>
					<div class="responsive-block-editor-addons-welcome-video">
						<div class="responsive-block-editor-addons-welcome-video-image responsive-block-editor-addons-bg-img">
						<!---->
						</div>
					<div class="responsive-block-editor-addons-welcome-block-inner full">
						<p class="responsive-block-editor-addons-subtitle full ">
							<?php echo esc_html__( 'Unleash your creativity with the Responsive editor blocks library. Within minutes create modern responsive designs for all devices. Use reusable block page templates to kickstart your website in no time.', 'responsive-block-editor-addons' ); ?>
						</p>
						<div class="responsive-block-editor-addons-button-wrap">
							<div class="responsive-block-editor-addons-welcome-left">
								<a href="https://cyberchimps.com/blocks/" class="responsive-block-editor-addons-button responsive-block-editor-addons-button-large"><?php echo esc_html__( 'View Demos', 'responsive-block-editor-addons' ); ?>
								</a>
							</div>
							<div class="responsive-block-editor-addons-welcome-right">
								<a href="https://docs.cyberchimps.com/responsive-gutenberg-addons/" target="_blank" rel="noopener noreferrer" class="responsive-block-editor-addons-button responsive-block-editor-addons-button-alt responsive-block-editor-addons-button-large">
									<?php echo esc_html__( 'Documentation', 'responsive-block-editor-addons' ); ?>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="responsive-block-editor-addons-welcome-block">
					<div class="responsive-block-editor-addons-welcome-block-inner">
						<h3><?php echo esc_html__( 'Responsive Features &amp; Addons', 'responsive-block-editor-addons' ); ?></h3>
						<p class="responsive-block-editor-addons-subtitle features-block"><?php echo esc_html__( 'Here are the features that make Responsive the most powerful and user-friendly WordPress Editor Block plugin in the market.', 'responsive-block-editor-addons' ); ?></p>
					</div>
					<div class="responsive-block-editor-addons-welcome-block-inner responsive-block-editor-addons-welcome-features">
						<?php
						$feature_list_array = array(
							array( 'Advanced Column', 'Build custom, full-page layouts for your posts and pages with the Advanced Columns Block', 'res-icon1.png' ),
							array( 'Post Timeline', 'Display the timeline for blog posts in an ordered list according to the dates they are published on', 'res-icon2.png' ),
							array( 'Advanced Heading', 'Add catchy and attractive headings with elegant designs and typography using the Gutenberg Advanced Heading block', 'res-icon3.png' ),
							array( 'Section', 'Build a page with different content areas using the section block that allows you to manage layouts, backgrounds, spacing, and more', 'res-icon1.png' ),
							array( 'Flipbox', 'Create beautiful animated content that flips on hover with the Gutenberg Flipbox block', 'res-icon4.png' ),
							array( 'Testimonial', 'Showcase your customer reviews with neatly displayed testimonial blocks on your website in just a few clicks', 'res-icon5.png' ),
							array( 'Info Box', 'Add a block of information that includes colorful icons, images, headings, text, and more with beautifully designed boxes', 'res-icon6.png' ),
							array( 'Button Group', 'Design strikingly attractive buttons and group them together within a container', 'res-icon6.png' ),
							array( 'Image Boxes', 'Create beautiful gallery of images to showcase your portfolio, photos, and more with the Gutenberg Image Boxes block', 'res-icon7.png' ),
							array( 'Count Up', 'Display facts and figures with animated counters using the Gutenberg Count Up block', 'res-icon8.png' ),
							array( 'Post Carousel', 'Display the content of your blog posts automatically in a carousel slideshow using Gutenberg Post Carousel block', 'res-icon9.png' ),
							array( 'Shape Divider', 'Easily create a division or barrier between your sections using this Gutenberg block divider that includes a large number of styling options', 'res-icon10.png' ),
							array( 'Call To Action', 'Add an eye-catching, full-width section with a big title, paragraph text, and a customizable button with the Gutenberg Call to Action block', 'res-icon11.png' ),
							array( 'Accordion', 'Add content that can expand and collapse (for e.g. FAQs) with tons of display options using the Gutenberg Accordion block', 'res-icon11.png' ),
							array( 'Image Slider', 'Showcase a selection of images using a slider\ with the Gutenberg Image Slider block', 'res-icon7.png' ),
							array( 'Team', 'Beautifully display details about your team members like role, department, etc. with Gutenberg Team block', 'res-icon7.png' ),
							array( 'Card', 'Display information, photos, and more in a compact, easy-to-understand layout with the Gutenberg Card block', 'res-icon9.png' ),
							array( 'Icon List', 'Display a bulleted list with icons and images as for checklists, feature lists, or any other list with the Gutenberg Icon List Block', 'res-icon12.png' ),
							array( 'Masonry', 'Display a collage of images and showcase your portfolio, product images, and more with the Gutenberg Masonry Blocks', 'res-icon11.png' ),
							array( 'Content Timeline', 'Create visual flowcharts, vertical timelines and event layouts using the Gutenberg Content Timeline Block', 'res-icon2.png' ),
							array( 'Pricing Table', 'Create responsive and dynamic pricing tables to showcase your product catalog and prices with the Gutenberg Pricing Table block', 'res-icon13.png' ),
						);

						foreach ( $feature_list_array as $single_feature ) {

							?>
							<div class="responsive-block-editor-addons-welcome-feature">
								<div class="responsive-block-editor-addons-welcome-feature-img">
									<img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/images/' . $single_feature[2] ); ?>">
								</div>
								<div class="responsive-block-editor-addons-welcome-feature-text">
									<h4>
										<?php
											/* translators: %s: search term */
											$title = sprintf( __( '%s', 'responsive-block-editor-addons' ), $single_feature[0] );
											echo esc_html( $title );
										?>
									</h4>
									<p>
										<?php
											/* translators: %s: search term */
											$short_desc = sprintf( __( '%s.', 'responsive-block-editor-addons' ), $single_feature[1] );
											echo esc_html( $short_desc );
										?>
									</p>
								</div>
							</div>
						<?php } ?>
					</div>
					<div class="responsive-block-editor-addons-welcome-block-inner responsive-block-editor-addons-welcome-block-footer">
						<a href="<?php echo esc_url( 'https://cyberchimps.com/blocks/' ); ?>" target="_blank" class="responsive-block-editor-addons-button"><?php echo esc_html__( 'See All Blocks', 'responsive-block-editor-addons' ); ?></a>
					</div>
				</div>
			</div>
		</div>
		<div class="responsive-block-editor-addons-quick-links responsive-block-editor-addons-quick-links-close">
			<button class="responsive-block-editor-addons-quick-links-label">
				<span class="responsive-block-editor-addons-bg-img responsive-block-editor-addons-quick-links-mascot">
				</span>
				<span class="responsive-block-editor-addons-quick-link-title"><?php echo esc_html__( 'See Quick Links ', 'responsive-block-editor-addons' ); ?></span>
			</button>
			<div class="responsive-block-editor-addons-quick-links-menu">
				<a href="<?php echo esc_url( 'https://cyberchimps.com/contact/' ); ?>" data-index="0" target="_blank" class="responsive-block-editor-addons-quick-links-menu-item responsive-block-editor-addons-quick-links-item-suggest responsive-block-editor-addons-show responsive-block-editor-addons-staggered-fade-enter-to">
					<span class="lightbulb">
						<img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/images/mascot-1.png' ); ?> ">
					</span>
					<span class="responsive-block-editor-addons-quick-link-title"><?php echo esc_html__( 'Suggest a Feature', 'responsive-block-editor-addons' ); ?>
					</span>
				</a>
				<a href="<?php echo esc_url( 'https://www.facebook.com/groups/responsive.theme' ); ?>" data-index="1" target="_blank" class="responsive-block-editor-addons-quick-links-menu-item responsive-block-editor-addons-quick-links-item-community responsive-block-editor-addons-show">
					<span class="wpbeginner">
						<img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/images/mascot-2.png' ); ?> ">
					</span>
					<span class="responsive-block-editor-addons-quick-link-title"><?php echo esc_html__( 'Join Our Community', 'responsive-block-editor-addons' ); ?>
					</span>
				</a>
				<a href="<?php echo esc_url( 'https://cyberchimps.com/my-account/' ); ?>" data-index="2" target="_blank" class="responsive-block-editor-addons-quick-links-menu-item responsive-block-editor-addons-quick-links-item-support responsive-block-editor-addons-show">
					<span class="life-ring">
						<img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/images/mascot-3.png' ); ?> ">
					</span>
					<span class="responsive-block-editor-addons-quick-link-title"><?php echo esc_html__( 'Support &amp; Docs', 'responsive-block-editor-addons' ); ?>
					</span>
				</a>
				<a href="<?php echo esc_url( 'https://cyberchimps.com/responsive-go-pro/' ); ?>" data-index="3" target="_blank" class="responsive-block-editor-addons-quick-links-menu-item responsive-block-editor-addons-quick-links-item-upgrade responsive-block-editor-addons-show">
					<span class="star">
						<img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/images/mascot-4.png' ); ?> ">
					</span>
					<span class="responsive-block-editor-addons-quick-link-title"><?php echo esc_html__( 'Upgrade to Pro »', 'responsive-block-editor-addons' ); ?>
					</span>
				</a>
			</div>
		</div>

		<?php
	}

	/**
	 * Responsive_block_editor_addons_maybe_redirect_to_getting_started description
	 *
	 * @return [type] [description]
	 */
	public function responsive_block_editor_addons_maybe_redirect_to_getting_started() {
		if ( ! get_transient( 'responsive_block_editor_addons_activation_redirect' ) ) {
			return;
		}

		if ( wp_doing_ajax() ) {
			return;
		}

		delete_transient( 'responsive_block_editor_addons_activation_redirect' );

		if ( is_network_admin() || isset( $_GET['activate-multi'] ) ) {
			return;
		}

		wp_safe_redirect( admin_url( 'admin.php?page=responsive_block_editor_addons' ) );

		exit;
	}


	/**
	 * Initialize the blocks
	 *
	 * @since    1.0.0
	 */
	public function responsive_block_editor_addons_loader() {
		/**
		* Load Post Grid PHP
		*/
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-grid/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-carousel/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/gallery-masonry/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/accordion/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/post-timeline/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/image-slider/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/testimonial-slider/index.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/utils/fonts.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'classes/class-responsive-block-editor-addons-frontend-styles-helper.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'classes/class-responsive-block-editor-addons-frontend-styles.php';
		require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'src/blocks/taxonomy-list/index.php';
	}

	/** Adds the Responsive Blocks block category.
	 *
	 * @param array $categories Existing block categories.
	 *
	 * @return array Updated block categories.
	 */
	public function responsive_block_editor_addons_add_custom_block_category( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'responsive_block_editor_addons',
					'title' => __( 'Responsive Gutenberg Blocks', 'responsive-block-editor-addons' ),
				),
			)
		);
	}


	/**
	 * Get Post Types.
	 *
	 * @since 1.0.3
	 * @access public
	 */
	public static function get_post_types() {

		$post_types = get_post_types(
			array(
				'public'       => true,
				'show_in_rest' => true,
			),
			'objects'
		);

		$options = array();

		foreach ( $post_types as $post_type ) {
			if ( 'product' === $post_type->name ) {
				continue;
			}

			if ( 'attachment' === $post_type->name ) {
				continue;
			}

			$options[] = array(
				'value' => $post_type->name,
				'label' => $post_type->label,
			);
		}

		return $options;
	}


	/**
	 * Enqueue assets for backend editor
	 *
	 * @since 1.0.0
	 */
	public function responsive_block_editor_addons_editor_assets() {
		$responsive_block_editor_ajax_nonce = wp_create_nonce( 'responsive_block_editor_ajax_nonce' );

		// Load the compiled blocks into the editor.
		wp_enqueue_script(
			'responsive_block_editor_addons-block-js',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . '/dist/responsive-block-editor-addons.js',
			array( 'lodash', 'react', 'react-dom', 'wp-api-fetch', 'wp-blob', 'wp-block-editor', 'wp-blocks', 'wp-components', 'wp-compose', 'wp-data', 'wp-date', 'wp-dom-ready', 'wp-edit-post', 'wp-editor', 'wp-element', 'wp-hooks', 'wp-i18n', 'wp-keycodes', 'wp-plugins', 'wp-polyfill', 'wp-rich-text', 'wp-token-list', 'wp-url', 'jquery' ),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/responsive-block-editor-addons.js' ),
			true
		);

		$user_data = wp_get_current_user();
		unset( $user_data->user_pass, $user_data->user_email );

		// Pass in REST URL.
		wp_localize_script(
			'responsive_block_editor_addons-block-js',
			'responsive_globals',
			array(
				'rest_url'                           => esc_url( rest_url() ),
				'ajax_url'                           => admin_url( 'admin-ajax.php' ),
				'user_data'                          => $user_data,
				'pro_activated'                      => false,
				'is_wpe'                             => function_exists( 'is_wpe' ),
				'post_types'                         => $this->get_post_types(),
				'all_taxonomy'                       => $this->get_related_taxonomy(),
				'responsive_block_editor_ajax_nonce' => $responsive_block_editor_ajax_nonce,
				'taxonomy_list'         			 => $this->get_taxonomy_list(),
				'home_url'                           => home_url(),
			)
		);

		// Load the compiled styles into the editor.
		wp_enqueue_style(
			'responsive_block_editor_addons-block-editor-css',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-editor.css',
			array( 'wp-edit-blocks' ),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/responsive-block-editor-addons-editor.css' )
		);
	}

	/**
		 * Get all taxonomies list.
		 *
		 * @since 1.0.0
		 * @access public
		 */
		public static function get_taxonomy_list() {

			$post_types = self::get_post_types();

			$return_array = array();

			foreach ( $post_types as $key => $value ) {
				$post_type = $value['value'];

				$taxonomies = get_object_taxonomies( $post_type, 'objects' );
				$data       = array();

				$get_singular_name = get_post_type_object( $post_type );
				foreach ( $taxonomies as $tax_slug => $tax ) {
					if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
						continue;
					}

					$data[ $tax_slug ] = $tax;

					$terms = get_terms( $tax_slug );

					$related_tax_terms = array();

					if ( ! empty( $terms ) ) {
						foreach ( $terms as $t_index => $t_obj ) {
							$related_tax_terms[] = array(
								'id'            => $t_obj->term_id,
								'name'          => $t_obj->name,
								'count'         => $t_obj->count,
								'link'          => get_term_link( $t_obj->term_id ),
								'singular_name' => $get_singular_name->labels->singular_name,
							);
						}

						$return_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax_terms;
					}

					$newcategoriesList = get_terms(
						$tax_slug,
						array(
							'hide_empty' => true,
							'parent'     => 0,
						)
					);

					$related_tax = array();

					if ( ! empty( $newcategoriesList ) ) {
						foreach ( $newcategoriesList as $t_index => $t_obj ) {
							$child_arg     = array(
								'hide_empty' => true,
								'parent'     => $t_obj->term_id,
							);
							$child_cat     = get_terms( $tax_slug, $child_arg );
							$child_cat_arr = $child_cat ? $child_cat : null;
							$related_tax[] = array(
								'id'            => $t_obj->term_id,
								'name'          => $t_obj->name,
								'count'         => $t_obj->count,
								'link'          => get_term_link( $t_obj->term_id ),
								'singular_name' => $get_singular_name->labels->singular_name,
								'children'      => $child_cat_arr,
							);

						}

						$return_array[ $post_type ]['without_empty_taxonomy'][ $tax_slug ] = $related_tax;

					}

					$newcategoriesList_empty_tax = get_terms(
						$tax_slug,
						array(
							'hide_empty' => false,
							'parent'     => 0,
						)
					);

					$related_tax_empty_tax = array();

					if ( ! empty( $newcategoriesList_empty_tax ) ) {
						foreach ( $newcategoriesList_empty_tax as $t_index => $t_obj ) {
							$child_arg_empty_tax     = array(
								'hide_empty' => false,
								'parent'     => $t_obj->term_id,
							);
							$child_cat_empty_tax     = get_terms( $tax_slug, $child_arg_empty_tax );
							$child_cat_empty_tax_arr = $child_cat_empty_tax ? $child_cat_empty_tax : null;
							$related_tax_empty_tax[] = array(
								'id'            => $t_obj->term_id,
								'name'          => $t_obj->name,
								'count'         => $t_obj->count,
								'link'          => get_term_link( $t_obj->term_id ),
								'singular_name' => $get_singular_name->labels->singular_name,
								'children'      => $child_cat_empty_tax_arr,
							);
						}

						$return_array[ $post_type ]['with_empty_taxonomy'][ $tax_slug ] = $related_tax_empty_tax;

					}
				}
				$return_array[ $post_type ]['taxonomy'] = $data;

			}

			return $return_array;
		}

	/**
	 * Get all taxonomies.
	 *
	 * @since 1.0.3
	 * @access public
	 */
	public static function get_related_taxonomy() {

		$post_types = self::get_post_types();

		$return_array = array();

		foreach ( $post_types as $key => $value ) {
			$post_type = $value['value'];

			$taxonomies = get_object_taxonomies( $post_type, 'objects' );
			$data       = array();

			foreach ( $taxonomies as $tax_slug => $tax ) {
				if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
					continue;
				}

				$data[ $tax_slug ] = $tax;

				$terms = get_terms( $tax_slug );

				$related_tax = array();

				if ( ! empty( $terms ) ) {
					foreach ( $terms as $t_index => $t_obj ) {
						$related_tax[] = array(
							'id'   => $t_obj->term_id,
							'name' => $t_obj->name,
						);
					}

					$return_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax;
				}
			}

			$return_array[ $post_type ]['taxonomy'] = $data;
		}

		return $return_array;
	}
	/**
	 * Enqueue assets for frontend
	 *
	 * @since 1.0.0
	 */
	public function responsive_block_editor_addons_frontend_assets() {

		// Load the compiled blocks into the editor.
		wp_enqueue_script(
			'responsive_blocks-frontend-js',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . '/dist/frontend_blocks.js',
			array('jquery'),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/frontend_blocks.js' ),
			true
		);

	}


	/**
	 * Enqueue assets for frontend and backend
	 *
	 * @since 1.0.0
	 */
	public function responsive_block_editor_addons_block_assets() {

		// Load the compiled styles.
		wp_enqueue_style(
			'responsive_block_editor_addons-style-css',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/responsive-block-editor-addons-style.css',
			array(),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/responsive-block-editor-addons-style.css' )
		);
		wp_enqueue_style(
			'animation.css',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'dist/css/animation.css',
			array(),
			filemtime( RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'dist/css/animation.css' )
		);
	}

	/**
	 * Include Admin css
	 *
	 * @return void [description]
	 */
	public function responsive_block_editor_addons_admin_enqueue_styles() {
		// Responsive Ready Sites admin styles.
		wp_register_style( 'responsive-block-editor-addons-admin', RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/css/responsive-block-editor-addons-admin.css', false, '1.0.0' );
		wp_enqueue_style( 'responsive-block-editor-addons-admin' );
		wp_enqueue_script(
			'responsive-block-editor-addons-admin-jsfile',
			RESPONSIVE_BLOCK_EDITOR_ADDONS_URL . 'admin/js/responsive-block-editor-addons-admin.js',
			array( 'jquery' ),
			'1.0.0',
			true
		);
	}

	/**
	 * On admin init.
	 *
	 * Preform actions on WordPress admin initialization.
	 *
	 * Fired by `admin_init` action.
	 *
	 * @access public
	 */
	public function responsive_block_editor_addons_admin_init() {

		$this->responsive_block_editor_addons_remove_all_admin_notices();
	}

	/**
	 * [responsive_block_editor_addons_remove_all_admin_notices description]
	 */
	private function responsive_block_editor_addons_remove_all_admin_notices() {
		$responsive_block_editor_addons_pages = array(
			'responsive_block_editor_addons',
			'responsive-block-editor-addons',
		);

		if ( empty( $_GET['page'] ) || ! in_array( $_GET['page'], $responsive_block_editor_addons_pages, true ) ) {
			return;
		}

		remove_all_actions( 'admin_notices' );
	}

    /**
    * Adding Dashicons in WordPress Front-end
    */
    public function load_dashicons_front_end() {
        wp_enqueue_style( 'dashicons' );
    }

}
