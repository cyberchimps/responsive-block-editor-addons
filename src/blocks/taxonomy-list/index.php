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

				'block_id'              => array(
					'type' => 'string',
				),
				//General Attributes
				'columns' => array(
					'type' => 'number',
					'default' => 3
				),
				'columnsMobile' => array(
					'type' => 'number',
					'default' => 1
				),
				'columnsTablet' => array(
					'type' => 'number',
					'default' => 2
				),
				'layout' => array(
					'type' => 'string',
					'default' => 'grid'
				),
				'postType' => array (
					'type' => 'string',
					'default' => 'post'
				),
				'showEmptyTaxonomy' => array (
					'type' => 'boolean',
					'default' => false
				),
				'showPostCount' => array(
					'type' => 'boolean',
					'default' => true
				),
				'taxonomyType' => array (
					'type' => 'string',
					'default' => 'category'
				),
				'categories'            => array(
					'type' => 'string',
				),
				'order'                 => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'               => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'postsToShow'           => array(
					'type'    => 'number',
					'default' => '8',
				),
				'noTaxDisplaytext'      => array(
					'type'    => 'string',
					'default' => __( 'Taxonomy Not Available.', "responsive-block-editor-addons" ),
				),
				'showEmptyTaxonomy'     => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'titleTag' => array(
					'type' => 'string',
					'default' => 'div'
				),
				//Grid Alignment Attributes
				'alignment' => array(
					'type' => 'string',
					'default' => 'center'
				),
				//List Style Attributes
				'listStyle' => array (
					'type' => 'string',
					'default' => 'disc'
				),
				//Grid Color Attributes 
				'bgColor' => array (
					'type' => 'string',
					'default' => '#f5f5f5'
				),
				'titleColor' => array(
					'type' => 'string',
					'default' => '#3b3b3b'
				),
				'countColor' => array (
					'type' => 'string',
					'default' => '#777777'
				),
				//List Color Attributes
				'listTextColor' => array (
					'type' => 'string',
					'default' => '#3b3b3b'
				),
				'listStyleColor' => array (
					'type' => 'string',
					'default' => '#3b3b3b'
				),
				'listTextColorHover' => array(
					'type' => 'string',
					'default' => '#3b3b3b'
				),
				//Grid Spacing Attributes
				"rowGap" => array(
					'type' => 'number',
					'default' => 20
				),
				"columnGap" => array(
					'type' => 'number',
					'default' => 20
				),
				"rowGapMobile" => array(
					'type' => 'number',
					'default' => 20
				),
				"columnGapMobile" => array(
					'type' => 'number',
					'default' => 20
				),
				"rowGapTablet" => array(
					'type' => 'number',
					'default' => 20
				),
				"columnGapTablet" => array(
					'type' => 'number',
					'default' => 20
				),
				"titleBottomSpace" => array(
					'type' => 'number',
					'default' => 15
				),
				"titleBottomSpaceMobile" => array(
					'type' => 'number',
					'default' => 15
				),
				"titleBottomSpaceTablet" => array(
					'type' => 'number',
					'default' => 15
				),
				"contentPadding" => array(
					'type' => 'number',
					'default' => 15
				),
				"contentPaddingMobile" => array(
					'type' => 'number',
					'default' => 15
				),
				"contentPaddingTablet" => array(
					'type' => 'number',
					'default' => 15
				),
				//List Spacing Attributes
				'listBottomMargin' => array(
					'type' => 'number',
					'default' => 5
				),
				'listBottomMarginMobile' => array(
					'type' => 'number',
					'default' => 5
				),
				'listBottomMarginTablet' => array(
					'type' => 'number',
					'default' => 5
				),
				//Grid Styling Attributes - Typography
				'titleFontFamily' => array (
					'type' => 'string'
				),
				'titleFontSize' => array(
					'type' => 'number'
				),
				'titleFontSizeMobile' => array(
					'type' => 'number'
				),
				'titleFontSizeTablet' => array(
					'type' => 'number'
				),
				'titleFontWeight' => array(
					'type' => 'string'
				), 
				'titleLineHeight' => array(
					'type' => 'number'
				),
				'titleLineHeightMobile' => array(
					'type' => 'number'
				),
				'titleLineHeightTablet' => array(
					'type' => 'number'
				),
				'countFontFamily' => array (
					'type' => 'string'
				),
				'countFontSize' => array(
					'type' => 'number'
				),
				'countFontSizeMobile' => array(
					'type' => 'number'
				),
				'countFontSizeTablet' => array(
					'type' => 'number'
				),
				'countFontWeight' => array(
					'type' => 'string'
				), 
				'countLineHeight' => array(
					'type' => 'number'
				),
				'countLineHeightMobile' => array(
					'type' => 'number'
				),
				'countLineHeightTablet' => array(
					'type' => 'number'
				),
				//Grid Styling Attributes - Border
				'gridBorderStyle' => array(
					'type' => 'string',
					'default' => 'solid'
				),
				'gridBorderWidth' => array(
					'type' => 'number',
					'default' => 1
				),
				'gridBorderRadius' => array(
					'type' => 'number',
					'default' => 0
				),
				'gridBorderColor' => array(
					'type' => 'string',
					'default' => '#e0e0e0'
				),
				//Grid Styling Attribute -  Box Shadow
				'boxShadow' => array(
					'type' => 'string',
					'default' => 'none'
				),
				'boxShadowColor' => array(
					'type' => 'string'
				),
				'boxShadowHOffset' => array(
					'type' => 'number'
				),
				'boxShadowVOffset' => array(
					'type' => 'number'
				),
				'boxShadowBlur' => array(
					'type' => 'number'
				),
				'boxShadowSpread' => array(
					'type' => 'number'
				),
				'boxShadowPosition' => array(
					'type' => 'string',
					'default' => 'outset'
				),
				//List Styling Attributes - Typography
				'listFontFamily' => array (
					'type' => 'string'
				),
				'listFontSize' => array(
					'type' => 'number'
				),
				'listFontSizeMobile' => array(
					'type' => 'number'
				),
				'listFontSizeTablet' => array(
					'type' => 'number'
				),
				'listFontWeight' => array(
					'type' => 'string'
				), 
				'listLineHeight' => array(
					'type' => 'number'
				),
				'listLineHeightMobile' => array(
					'type' => 'number'
				),
				'listLineHeightTablet' => array(
					'type' => 'number'
				),
				//List Styling Attributes - Separator
				'separatorStyle' => array(
					'type' => 'string',
					'default' => 'solid'
				),
				'separatorColor' => array(
					'type' => 'string',
					'default' => '#b2b4b5'
				),
				'separatorWidth' => array(
					'type' => 'number',
					'default' => 1
				),

			),
			'render_callback' => 'responsive_block_editor_addons_render_taxonomy_list',
		)
	);
}
add_action( 'init', 'responsive_block_editor_addons_register_taxonomy_list' );

function responsive_block_editor_addons_render_taxonomy_list($attributes) {
	$layout = $attributes['layout'];
	$block_id = $attributes['block_id'];
	$main_class = "responsive-block-editor-addons-block-taxonomy-list". " block-".$block_id;
	ob_start();
	?>
	<div class="<?php echo esc_html($main_class)?>">
		<?php 
			if("grid" === $layout) {
				responsive_block_editor_addons_render_grid_layout($attributes);
			}
			else {
				responsive_block_editor_addons_render_list_layout($attributes);
			}
		?>
	</div>
	<?php
	return ob_get_clean();
}

function responsive_block_editor_addons_render_grid_layout($attributes) {
	$postType = $attributes['postType'];
	$taxonomyType = $attributes['taxonomyType'];
	$showCount = $attributes['showPostCount'];
	$titleTag = $attributes['titleTag'];
	
	$pt = get_post_type_object( $postType );
	$singular_name = $pt->labels->singular_name;
	$args = array(
		'hide_empty' => ! $attributes['showEmptyTaxonomy'],
		'parent'     => 0,
	);

	$newcategoriesList = get_terms( $attributes['taxonomyType'], $args );

	?>
		<div class="responsive-block-editor-addons-block-grid">
		<?php
			foreach($newcategoriesList as $category) {
				?>
					<div class="responsive-block-editor-addons-block-box">
						<a class="responsive-block-editor-addons-block-link" href="<?php echo esc_html(get_term_link($category->slug, $taxonomyType)); ?>">
							<<?php echo esc_html($titleTag); ?> class="responsive-block-editor-addons-block-title">
								<?php echo esc_attr($category->name); ?>
							</<?php echo esc_html($titleTag); ?>>
							<?php if($showCount) {
								?>
									<div class="responsive-block-editor-addons-block-count">
										<?php echo esc_attr($category->count); ?>
										<?php $countName = ( $category->count > 1 ) ? esc_attr( $singular_name ) . 's' : esc_attr( $singular_name ); ?>
										<?php echo esc_attr( apply_filters( 'responsive_block_editor_addons_taxonomy_count_text', $countName, $category->count ) ); ?>
									</div>
								<?php
							} ?>
						</a>
					</div>
				<?php
			}
		?>
		</div>
	<?php
}

function responsive_block_editor_addons_render_list_layout($attributes) {
	$postType = $attributes['postType'];
	$taxonomyType = $attributes['taxonomyType'];
	$showCount = $attributes['showPostCount'];
	$titleTag = $attributes['titleTag'];
	$separatorStyle   = $attributes['separatorStyle'];
	
	$pt = get_post_type_object( $postType );
	$singular_name = $pt->labels->singular_name;
	$args = array(
		'hide_empty' => ! $attributes['showEmptyTaxonomy'],
		'parent'     => 0,
	);

	$newcategoriesList = get_terms( $attributes['taxonomyType'], $args );
		
		?>
			<div class="responsive-block-editor-addons-block-list">
				<ul class="responsive-block-editor-addons-block-list-wrap">
					<?php
						foreach($newcategoriesList as $category) {
							?>
								<li class="responsive-block-editor-addons-block-list-item">
								<<?php echo esc_html($titleTag); ?> class="responsive-block-editor-addons-block-link-wrap">
									<a class="responsive-block-editor-addons-block-link" href="<?php  echo esc_url( get_term_link( $category->slug, $taxonomyType ) );?>">
										<div class="responsive-block-editor-addons-block-link-name">
											<?php echo esc_attr( $category->name ); ?>
										</div>
									</a>
									<?php 
										if($showCount) {
											?>
												<span class="responsive-block-editor-addons-block-list-count">
													<?php echo '('. esc_attr($category->count) .')'; ?>
												</span>
											<?php
										}
									?>
								</<?php echo esc_html($titleTag); ?>>
								<?php
									if("none" !== $separatorStyle) {
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
}