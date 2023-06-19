<?php
/**
 * Provide a admin area view for the plugin
 *
 * Getting Started Starter Templates Tab
 *
 * @link       https://cyberchimps.com/
 * @since      1.6.9
 *
 * @package responsive-block-editor-addons
 */

?>
<!-- This file should primarily consist of HTML with a little bit of PHP. -->
<?php
require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'admin/rbea-rst-installer.php';
?>
<div class="container">
	<div class="row">
		<div class="col-md-8 offset-md-2 col-12">
			<div class="rbea-rst-content">
				<div class="rbea-text-content text-center">
					<img class="rbea-responsive-logo" src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/responsive-thumbnail.jpg'; ?>" class="rounded mx-auto d-block" alt="">
					<div class="rbea-brand-text mt-4">
						<p class="rbea-rst-brand-name"><?php esc_html( 'Responsive Starter Templates' ); ?></p>
						<p class="rbea-rst-brand-desc"><?php esc_html_e( 'Browse 150+ fully-functional ready site templates by installing the free Responsive Starter Templates plugin. Click the button below to get started.', 'responsive-block-editor-addons' ); ?></p>
					</div>
					<div class="rbea-rst-button-section">
						<?php echo RBEA_Plugin_Install_Helper::instance()->responsive_install_plugin_button( 'responsive-add-ons', 'rst', 'responsive-add-ons', 'Install & Activate' ); //phpcs:ignore ?>
						<div class="rbea-rst-learn-more">
							<a href="<?php echo esc_url( 'https://wordpress.org/plugins/responsive-add-ons/' ); ?>" target="_blank"><?php esc_html_e( 'Learn More', 'responsive-block-editor-addons' ); ?></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
