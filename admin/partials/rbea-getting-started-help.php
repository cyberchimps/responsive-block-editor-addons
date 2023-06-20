<?php
/**
 * Provide a admin area view for the plugin
 *
 * Getting Started Help Tab
 *
 * @link       https://cyberchimps.com/
 * @since      1.6.9
 *
 * @package responsive-block-editor-addons
 */

?>
<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<?php
$help_contents = array(
	array(
		'title' => __( 'Documentation & Changelog', 'responsive-block-editor-addons' ),
		'desc'  => __( 'Browse through the detailed documentation to know how to use the plugin.', 'responsive-block-editor-addons' ),
		'icon'  => 'dashicons-media-document.svg',
		'links' => array(
			array(
				'title' => __( 'Docs', 'responsive-block-editor-addons' ),
				'url'   => 'https://docs.cyberchimps.com/responsive-gutenberg-addons/',
			),
			array(
				'title' => __( 'Changelog', 'responsive-block-editor-addons' ),
				'url'   => 'https://cyberchimps.com/changelog/responsive-block-editor-addons/',
			),
		),
	),
	array(
		'title' => __( 'Blocks Demo', 'responsive-block-editor-addons' ),
		'desc'  => __( 'View demos of the Gutenberg blocks to understand their usability.', 'responsive-block-editor-addons' ),
		'icon'  => 'dashicons-welcome-view-site.svg',
		'links' => array(
			array(
				'title' => __( 'View Now', 'responsive-block-editor-addons' ),
				'url'   => 'https://cyberchimps.com/blocks/',
			),
		),
	),
	array(
		'title' => __( 'Video Resources', 'responsive-block-editor-addons' ),
		'desc'  => __( 'Check out the video resources to learn how to use the powerful plugin features.', 'responsive-block-editor-addons' ),
		'icon'  => 'dashicons-youtube.svg',
		'links' => array(
			array(
				'title' => __( 'Watch Now', 'responsive-block-editor-addons' ),
				'url'   => 'https://www.youtube.com/playlist?list=PLXTwxw3ZJwPSCqW__jo6fkUlEh2uXAsuF',
			),
		),
	),
	array(
		'title' => __( 'Support', 'responsive-block-editor-addons' ),
		'desc'  => __( 'Got any questions, we are happy to help! Get in touch with our dedicated support team.', 'responsive-block-editor-addons' ),
		'icon'  => 'dashicons-sos.svg',
		'links' => array(
			array(
				'title' => __( 'Request Support', 'responsive-block-editor-addons' ),
				'url'   => 'https://wordpress.org/support/plugin/responsive-block-editor-addons/',
			),
		),
	),
	array(
		'title' => __( 'Join Our Community', 'responsive-block-editor-addons' ),
		'desc'  => __( 'Join our community of Responsive users to create  websites! Say Hi, ask questions, and grow together.', 'responsive-block-editor-addons' ),
		'icon'  => 'dashicons-groups.svg',
		'links' => array(
			array(
				'title' => __( 'Join Facebook Group', 'responsive-block-editor-addons' ),
				'url'   => 'https://www.facebook.com/groups/responsive.theme',
			),
		),
	),
	array(
		'title' => __( 'Rate Us', 'responsive-block-editor-addons' ),
		'desc'  => __( 'Your feedback is invaluable to us, and we greatly appreciate each and every review you provide.', 'responsive-block-editor-addons' ),
		'icon'  => 'dashicons-thumbs-up.svg',
		'links' => array(
			array(
				'title' => __( 'Submit Review', 'responsive-block-editor-addons' ),
				'url'   => 'https://wordpress.org/support/plugin/responsive-block-editor-addons/reviews/#new-post',
			),
		),
	),

);
?>


<div class="container">
	<div class="row gy-4">
		<?php
		foreach ( $help_contents as $help_content ) {
			?>
		<div class="col-xl-4 col-lg-6 col-md-6">
			<div class="rbea-help-feature-cards h-100">
				<div class="row">
					<div class="col-md-2">
						<img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . '/admin/images/' . esc_attr( $help_content['icon'] ); ?>">
					</div>
					<div class="col-md-10">
						<p class="rbea-help-title"><?php echo esc_html( $help_content['title'] ); ?></p>
						<p class="rbea-help-desc"><?php echo esc_html( $help_content['desc'] ); ?></p>
						<?php
						$links_count = count( $help_content['links'] );
						foreach ( $help_content['links'] as $index => $help_link ) {
							?>
						<a class="rbea-help-links" href="<?php echo esc_url( $help_link['url'] ); ?>"><?php echo esc_html( $help_link['title'] ); ?></a>
							<?php
							if ( $index < $links_count - 1 ) {
								echo '<span class="rbea-help-links-divider">|</span>';
							}
						}
						?>
					</div>
				</div>
			</div>
		</div>
			<?php
		}
		?>
	</div>
</div>
