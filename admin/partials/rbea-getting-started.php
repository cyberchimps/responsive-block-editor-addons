<?php
/**
 * Getting Started Page
 *
 * @package     Responsive_Block_Editor_Addons
 * @author      CyberChimps
 * @copyright   Copyright (c) 2020, CyberChimps
 * @link        https://www.cyberchimps.com
 * @since       1.6.9
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>

<div class="rbea-getting-started-page">
	<div class="rbea-header">
		<div class="rbea-brand">
			<img class="rbea-logo" src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/responsive-thumbnail.jpg'; ?>" alt="responsive-thumbnail">
			<h1 class="rbea-brand-name">Responsive Blocks</h1>
			<div class="rbea-version"><?php echo esc_html( RESPONSIVE_BLOCK_EDITOR_ADDONS_VER ); ?></div>
		</div>
		<p class="rbea-brand-desc"><?php esc_html_e( 'Thank you for choosing Responsive Gutenberg Blocks Library - A Powerful WordPress Editor Plugin', 'responsive-block-editor-addons' ); ?></p>
	</div>
	<div class="rbea-tabs-section">
		<div class="rbea-tabs">
			<div class="rbea-tab rbea-help-tab" data-tab="help">
				<p class="rbea-tab-name">Help</p>
			</div>
			<div class="rbea-tab rbea-templates-tab" data-tab="templates">
				<p class="rbea-tab-name">Starter&nbsp;Templates</p>
			</div>
		</div>
	</div>
	<div class="rbea-tabs-content">
		<div class="rbea-tabs-inner-content">
			<div class="rbea-home-content rbea-tab-content" id="rbea_help">
				<?php require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'admin/partials/rbea-getting-started-help.php'; ?>
			</div>
			<div class="rbea-templates-content rbea-tab-content" id="rbea_templates">
				<?php require_once RESPONSIVE_BLOCK_EDITOR_ADDONS_DIR . 'admin/partials/rbea-getting-started-rst.php'; ?>
			</div>
		</div>
	</div>
	<div class="rbea-footer">
		<div class="rbea-footer-details">
			<div class="rbea-footer-text">
				<p class="rbea-footer-text-line"><?php esc_html_e( 'If you like', 'responsive' ); ?>
					<span class="rbea-footer-brand-name">Responsive Blocks</span>, <br class="rbea-mobile-line-break"><?php esc_html_e( 'please leave us a', 'responsive' ); ?> 
					<a href="<?php echo esc_url( 'https://wordpress.org/support/plugin/responsive-block-editor-addons/reviews/#new-post' ); ?>" target="_blank" class="rbea-star-rating">
						<img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/ph_star-fill.svg'; ?>"><img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/ph_star-fill.svg'; ?>"><img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/ph_star-fill.svg'; ?>"><img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/ph_star-fill.svg'; ?>"><img src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/ph_star-fill.svg'; ?>">
					</a> <?php esc_html_e( 'rating. Thank you!', 'responsive' ); ?>
				</p>
			</div>
			<div class="rbea-hr"></div>
		</div>
		<img class="rbea-cyberchimps-logo" src="<?php echo esc_url( RESPONSIVE_BLOCK_EDITOR_ADDONS_URL ) . 'admin/images/cyberchimps-logo.png'; ?>">
	</div>
</div>
