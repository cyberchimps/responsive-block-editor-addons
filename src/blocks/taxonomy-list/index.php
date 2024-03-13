<?php
/**
 * Server-side rendering for the taxnomy list
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * Registers the taxonomy list block on server
 */
function responsive_block_editor_addons_register_taxonomy_list() {

	/* Check if the register function exists */
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	/* Block attributes */
	register_block_type(
		'responsive-block-editor-addons/taxonomy-list',
		array(
			'attributes'      => array(

				'block_id'               => array(
					'type' => 'string',
				),
				// General Attributes.
				'columns'                => array(
					'type'    => 'number',
					'default' => 3,
				),
				'columnsMobile'          => array(
					'type'    => 'number',
					'default' => 1,
				),
				'columnsTablet'          => array(
					'type'    => 'number',
					'default' => 2,
				),
				'layout'                 => array(
					'type'    => 'string',
					'default' => 'grid',
				),
				'postType'               => array(
					'type'    => 'string',
					'default' => 'post',
				),
				'showEmptyTaxonomy'      => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'showPostCount'          => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'taxonomyType'           => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'categories'             => array(
					'type' => 'string',
				),
				'order'                  => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'                => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'postsToShow'            => array(
					'type'    => 'number',
					'default' => '8',
				),
				'noTaxDisplaytext'       => array(
					'type'    => 'string',
					'default' => __( 'Taxonomy Not Available.', 'responsive-block-editor-addons' ),
				),
				'showEmptyTaxonomy'      => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'titleTag'               => array(
					'type'    => 'string',
					'default' => 'div',
				),
				// Grid Alignment Attributes.
				'alignment'              => array(
					'type'    => 'string',
					'default' => 'center',
				),
				// List Style Attributes.
				'listStyle'              => array(
					'type'    => 'string',
					'default' => 'disc',
				),
				// Grid Color Attributes.
				'bgColor'                => array(
					'type'    => 'string',
					'default' => '#f5f5f5',
				),
				'titleColor'             => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'countColor'             => array(
					'type'    => 'string',
					'default' => '#777777',
				),
				// List Color Attributes.
				'listTextColor'          => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'listStyleColor'         => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'listTextColorHover'     => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'listStyleColorHover'    => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				// Grid Spacing Attributes.
				'rowGap'                 => array(
					'type'    => 'number',
					'default' => 20,
				),
				'columnGap'              => array(
					'type'    => 'number',
					'default' => 20,
				),
				'rowGapMobile'           => array(
					'type'    => 'number',
					'default' => 20,
				),
				'columnGapMobile'        => array(
					'type'    => 'number',
					'default' => 20,
				),
				'rowGapTablet'           => array(
					'type'    => 'number',
					'default' => 20,
				),
				'columnGapTablet'        => array(
					'type'    => 'number',
					'default' => 20,
				),
				'titleBottomSpace'       => array(
					'type'    => 'number',
					'default' => 15,
				),
				'titleBottomSpaceMobile' => array(
					'type'    => 'number',
					'default' => 15,
				),
				'titleBottomSpaceTablet' => array(
					'type'    => 'number',
					'default' => 15,
				),
				'contentPadding'         => array(
					'type'    => 'number',
					'default' => 15,
				),
				'contentPaddingMobile'   => array(
					'type'    => 'number',
					'default' => 15,
				),
				'contentPaddingTablet'   => array(
					'type'    => 'number',
					'default' => 15,
				),
				// List Spacing Attributes.
				'listBottomMargin'       => array(
					'type'    => 'number',
					'default' => 5,
				),
				'listBottomMarginMobile' => array(
					'type'    => 'number',
					'default' => 5,
				),
				'listBottomMarginTablet' => array(
					'type'    => 'number',
					'default' => 5,
				),
				'listTopMargin'          => array(
					'type'    => 'number',
					'default' => 5,
				),
				'listTopMarginMobile'    => array(
					'type'    => 'number',
					'default' => 5,
				),
				'listTopMarginTablet'    => array(
					'type'    => 'number',
					'default' => 5,
				),
				// Grid Styling Attributes - Typography.
				'titleFontFamily'        => array(
					'type' => 'string',
				),
				'titleFontSize'          => array(
					'type'    => 'number',
					'default' => 16,
				),
				'titleFontSizeMobile'    => array(
					'type'    => 'number',
					'default' => 14,
				),
				'titleFontSizeTablet'    => array(
					'type'    => 'number',
					'default' => 16,
				),
				'titleFontWeight'        => array(
					'type' => 'string',
				),
				'titleLineHeight'        => array(
					'type' => 'number',
				),
				'titleLineHeightMobile'  => array(
					'type' => 'number',
				),
				'titleLineHeightTablet'  => array(
					'type' => 'number',
				),
				'countFontFamily'        => array(
					'type' => 'string',
				),
				'countFontSize'          => array(
					'type'    => 'number',
					'default' => 16,
				),
				'countFontSizeMobile'    => array(
					'type'    => 'number',
					'default' => 14,
				),
				'countFontSizeTablet'    => array(
					'type'    => 'number',
					'default' => 16,
				),
				'countFontWeight'        => array(
					'type' => 'string',
				),
				'countLineHeight'        => array(
					'type' => 'number',
				),
				'countLineHeightMobile'  => array(
					'type' => 'number',
				),
				'countLineHeightTablet'  => array(
					'type' => 'number',
				),
				// Grid Styling Attributes - Border.
				'gridBorderStyle'        => array(
					'type'    => 'string',
					'default' => 'solid',
				),
				'gridBorderWidth'        => array(
					'type'    => 'number',
					'default' => 1,
				),
				'gridBorderRadius'       => array(
					'type'    => 'number',
					'default' => 0,
				),
				'gridBorderColor'        => array(
					'type'    => 'string',
					'default' => '#e0e0e0',
				),
				// Grid Styling Attribute -  Box Shadow.
				'boxShadow'              => array(
					'type'    => 'string',
					'default' => 'none',
				),
				'boxShadowColor'         => array(
					'type' => 'string',
				),
				'boxShadowHOffset'       => array(
					'type' => 'number',
				),
				'boxShadowVOffset'       => array(
					'type' => 'number',
				),
				'boxShadowBlur'          => array(
					'type' => 'number',
				),
				'boxShadowSpread'        => array(
					'type' => 'number',
				),
				'boxShadowPosition'      => array(
					'type'    => 'string',
					'default' => 'outset',
				),
				// List Styling Attributes - Typography.
				'listFontFamily'         => array(
					'type' => 'string',
				),
				'listFontSize'           => array(
					'type'    => 'number',
					'default' => 16,
				),
				'listFontSizeMobile'     => array(
					'type'    => 'number',
					'default' => 14,
				),
				'listFontSizeTablet'     => array(
					'type'    => 'number',
					'default' => 16,
				),
				'listFontWeight'         => array(
					'type' => 'string',
				),
				'listLineHeight'         => array(
					'type' => 'number',
				),
				'listLineHeightMobile'   => array(
					'type' => 'number',
				),
				'listLineHeightTablet'   => array(
					'type' => 'number',
				),
				// List Styling Attributes - Separator.
				'separatorStyle'         => array(
					'type'    => 'string',
					'default' => 'solid',
				),
				'separatorColor'         => array(
					'type'    => 'string',
					'default' => '#b2b4b5',
				),
				'separatorWidth'         => array(
					'type'    => 'number',
					'default' => 1,
				),
				'taxonomyAvailable'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'hideWidget'                 => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'hideWidgetMobile'                 => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'hideWidgetTablet'                 => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'z_index'         => array(
					'type'    => 'number',
					'default' => 1,
				),
				'z_indexMobile'    => array(
					'type'    => 'number',
					'default' => 1,
				),
				'z_indexTablet'   => array(
					'type'    => 'number',
					'default' => 1,
				),
			),
			'render_callback' => 'responsive_block_editor_addons_render_taxonomy_list',
		)
	);
}
add_action( 'init', 'responsive_block_editor_addons_register_taxonomy_list' );

/**
 * Function to render taxonomy list.
 *
 * @param [type] $attributes The attributes.
 * @return [type]
 */
function responsive_block_editor_addons_render_taxonomy_list( $attributes ) {
	$layout     = $attributes['layout'];
	$block_id   = $attributes['block_id'];
	$main_class = 'responsive-block-editor-addons-block-taxonomy-list block-' . $block_id;
	if ( isset( $attributes['className'] ) ) {
		$main_class .= ' ' . $attributes['className'];
	}
	ob_start();
	?>
	<?php
	if ( $attributes['taxonomyAvailable'] ) {
		?>
			<div class="<?php echo esc_html( $main_class ); ?>">
		<?php
		if ( 'grid' === $layout ) {
			responsive_block_editor_addons_render_grid_layout( $attributes );
		} else {
			responsive_block_editor_addons_render_list_layout( $attributes );
		}
		?>
	</div>
			<?php
	} else {
		?>
			<div class="reponsive-block-editor-addons-taxonomy-list-no-taxonomy-available">
				<?php echo esc_attr( $attributes['noTaxDisplaytext'] ); ?>
				</div>
			<?php
	}
	?>
	<?php
	return ob_get_clean();
}

/**
 * Function to render grid layout.
 *
 * @param [type] $attributes The attributes.
 * @return void
 */
function responsive_block_editor_addons_render_grid_layout( $attributes ) {
	$post_type     = $attributes['postType'];
	$taxonomy_type = $attributes['taxonomyType'];
	$show_count    = $attributes['showPostCount'];
	$title_tag     = $attributes['titleTag'];

	$pt            = get_post_type_object( $post_type );
	$singular_name = $pt->labels->singular_name;
	$args          = array(
		'hide_empty' => ! $attributes['showEmptyTaxonomy'],
		'parent'     => 0,
	);

	$new_categories_list = get_terms( $attributes['taxonomyType'], $args );

	?>
	<?php
	if ( $attributes['taxonomyAvailable'] ) {
		?>
				<div class="responsive-block-editor-addons-block-grid">
		<?php
		foreach ( $new_categories_list as $category ) {
			?>
					<div class="responsive-block-editor-addons-block-box">
						<a class="responsive-block-editor-addons-block-link" href="<?php echo esc_html( get_term_link( $category->slug, $taxonomy_type ) ); ?>">
							<<?php echo esc_html( $title_tag ); ?> class="responsive-block-editor-addons-block-title">
							<?php echo esc_attr( $category->name ); ?>
							</<?php echo esc_html( $title_tag ); ?>>
						<?php
						if ( $show_count ) {
							?>
									<div class="responsive-block-editor-addons-block-count">
									<?php echo esc_attr( $category->count ); ?>
									<?php $count_name = ( $category->count > 1 ) ? esc_attr( $singular_name ) . 's' : esc_attr( $singular_name ); ?>
									<?php echo esc_attr( apply_filters( 'responsive_block_editor_addons_taxonomy_count_text', $count_name, $category->count ) ); ?>
									</div>
							<?php
						}
						?>
						</a>
					</div>
				<?php
		}
		?>
		</div>
		<?php
	} else {
		?>
				<div class="reponsive-block-editor-addons-taxonomy-list-no-taxonomy-available">
				<?php echo esc_attr( $attributes['noTaxDisplaytext'] ); ?>
				</div>
			<?php
	}
	?>
	<?php
}

/**
 * Function to render list layout.
 *
 * @param [type] $attributes The attributes.
 * @return void
 */
function responsive_block_editor_addons_render_list_layout( $attributes ) {
	$post_type       = $attributes['postType'];
	$taxonomy_type   = $attributes['taxonomyType'];
	$show_count      = $attributes['showPostCount'];
	$title_tag       = $attributes['titleTag'];
	$separator_style = $attributes['separatorStyle'];

	$pt            = get_post_type_object( $post_type );
	$singular_name = $pt->labels->singular_name;
	$args          = array(
		'hide_empty' => ! $attributes['showEmptyTaxonomy'],
		'parent'     => 0,
	);

	$new_categories_list = get_terms( $attributes['taxonomyType'], $args );

	?>
	<?php
	if ( $attributes['taxonomyAvailable'] ) {
		?>
				<div class="responsive-block-editor-addons-block-list">
					<ul class="responsive-block-editor-addons-block-list-wrap">
					<?php
					foreach ( $new_categories_list as $category ) {
						?>
									<li class="responsive-block-editor-addons-block-list-item">
									<<?php echo esc_html( $title_tag ); ?> class="responsive-block-editor-addons-block-link-wrap">
										<a class="responsive-block-editor-addons-block-link" href="<?php echo esc_url( get_term_link( $category->slug, $taxonomy_type ) ); ?>">
											<div class="responsive-block-editor-addons-block-link-name">
										<?php echo esc_attr( $category->name ); ?>
											</div>
										</a>
								<?php
								if ( $show_count ) {
									?>
													<span class="responsive-block-editor-addons-block-list-count">
											<?php echo '(' . esc_attr( $category->count ) . ')'; ?>
													</span>
										<?php
								}
								?>
									</<?php echo esc_html( $title_tag ); ?>>
									<?php
									if ( 'none' !== $separator_style ) {
										?>
											<div class="responsive-block-editor-addons-block-separator-wrap">
												<div class="responsive-block-editor-addons-block-separator"></div>
											</div>
										<?php
									}
									?>
									</li>
								<?php
					}
					?>
					</ul>
				</div>
			<?php
	} else {
		?>
				<div class="reponsive-block-editor-addons-taxonomy-list-no-taxonomy-available">
					<?php echo esc_attr( $attributes['noTaxDisplaytext'] ); ?>
				</div>
			<?php
	}
	?>
		<?php
}
