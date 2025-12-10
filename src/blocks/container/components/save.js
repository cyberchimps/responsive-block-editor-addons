/**
 * BLOCK: Container - Save Block
 */

import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import shapes from '../shapes'

export default function save( props ) {
	const {
		block_id,
		htmlTag,
		htmlTagLink,
		contentWidth,
		innerContentWidth,
		isBlockRootParent,
		backgroundType,
		backgroundVideo,
		linkTarget,
		topType,
		topFlip,
		topInvert,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomInvert,
		bottomContentAboveShape,
	} = props.attributes;

	const topDividerHtml = 'none' !== topType && (
		<div
			className={ classnames(
				'responsive-block-editor-addons-container__shape',
				'responsive-block-editor-addons-container__shape-top',
				{ 'responsive-block-editor-addons-container__shape-flip': topFlip === true },
				{
					'responsive-block-editor-addons-container__shape-above-content': topContentAboveShape === true,
				},
				{ 'responsive-block-editor-addons-container__invert': topInvert === true }
			) }
		>
			{ shapes[ topType ] }
		</div>
	);

	const bottomDividerHtml = 'none' !== bottomType && (
		<div
			className={ classnames(
				'responsive-block-editor-addons-container__shape',
				'responsive-block-editor-addons-container__shape-bottom',
				{ 'responsive-block-editor-addons-container__shape-flip': bottomFlip === true },
				{
					'responsive-block-editor-addons-container__shape-above-content': bottomContentAboveShape === true,
				},
				{ 'responsive-block-editor-addons-container__invert': bottomInvert === true }
			) }
			data-negative="false"
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const CustomTag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;
	const customTagLinkAttributes = {};
	if ( htmlTag === 'a' ) {
		customTagLinkAttributes.rel = 'noopener';
		if ( htmlTagLink?.url ) {
			customTagLinkAttributes.href = htmlTagLink?.url;
		}
		if ( linkTarget ) {
			customTagLinkAttributes.target = '_blank';
		}
		if ( htmlTagLink?.noFollow ) {
			customTagLinkAttributes.rel = 'nofollow noopener';
		}
	}

	const blockProps = useBlockProps.save();

	return (
		<>
			<CustomTag
				id={ blockProps.id }
				className={ classnames(
					blockProps.className,
					`responsive-block-editor-addons-block-${ block_id }`,
					`block-${ block_id }`,
					isBlockRootParent ? `${ contentWidth } responsive-block-editor-addons-is-root-container` : ''
				) }
			>
				{/* Video Background is positioned absolutely. The place in the DOM is to render it underneath the shape dividers and content. */}
				{ 'video' === backgroundType && (
					<div className="responsive-block-editor-addons-container__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source src={ backgroundVideo.url } type="video/mp4" />
							</video>
						) }
					</div>
				) }
				{/* Both the dividers are positioned absolutely. Their place in the DOM is just to determine their default Z-index. */}
				{ topDividerHtml }
				{ bottomDividerHtml }
				{/* Render the content above the Video Background if any and above the Shape Dividers. */}
				{ isBlockRootParent && 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ? (
					<div className="responsive-block-editor-addons-container-inner-blocks-wrap">
						<InnerBlocks.Content />
					</div>
				) : (
					<InnerBlocks.Content />
					) }
				{ 
					htmlTag === 'a' && 'undefined' !== typeof customTagLinkAttributes.href && (
						<a className='responsive-block-editor-addons-container-link-overlay' { ...customTagLinkAttributes } > </a>
					)
				}
			</CustomTag>
		</>
	);
}
