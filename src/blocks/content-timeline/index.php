<?php
/**
 * Server-side rendering for the content-timeline block.
 *
 * @since   1.0.0
 * @package Responsive Blocks
 */

/**
 * content-timeline frontend assets funciton.
 *
 * @return void
 */
function responsive_block_editor_addons_content_timeline_add_frontend_assets() {
	$widget_blocks = get_option('widget_block');
	if ( has_block( 'responsive-block-editor-addons/content-timeline' ) ) {
		wp_enqueue_script(
			'responsive_block_editor_addons-content-timeline-front-script',
			plugins_url( 'content-timeline.js', __FILE__ ),
			array(),
			RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
			true
		);
	}
	else if (!empty($widget_blocks)) {
		foreach ($widget_blocks as $widget) {
			if (!empty($widget['content'])) {
				wp_enqueue_script(
					'responsive_block_editor_addons-content-timeline-front-script',
					plugins_url( 'content-timeline.js', __FILE__ ),
					array(),
					RESPONSIVE_BLOCK_EDITOR_ADDONS_VER,
					true
				);
			}
		}
	}
}

add_action( 'enqueue_block_assets', 'responsive_block_editor_addons_content_timeline_add_frontend_assets' );
