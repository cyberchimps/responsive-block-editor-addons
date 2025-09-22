import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';
import { select, useSelect } from '@wordpress/data';
import shapes from '../shapes'

const Render = ( props ) => {

	const { attributes, clientId } = props;

    const deviceType = useSelect((select) => {
		const { __experimentalGetPreviewDeviceType } = select('core/edit-post');
		return __experimentalGetPreviewDeviceType?.() || 'Desktop';
	}, []);

	const {
		block_id,
		htmlTag,
		backgroundType,
		backgroundVideo,
		isBlockRootParent,
		contentWidth,
		innerContentWidth,
		topType,
		topFlip,
		topInvert,
		topContentAboveShape,
		bottomType,
		bottomFlip,
		bottomInvert,
		bottomContentAboveShape,
	} = attributes;

	const direction = attributes[ 'direction' + deviceType ];

	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';

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
		>
			{ shapes[ bottomType ] }
		</div>
	);

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const CustomTag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;	

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'responsive-block-editor-addons-container-has-children' : '';
	const isRootContainerClass = isBlockRootParent ? `${ contentWidth } responsive-block-editor-addons-is-root-container` : '';
	const blockProps = useBlockProps( {
		className: `responsive-block-editor-addons-block-container block-${block_id} responsive-block-editor-addons-block-${ block_id } ${ hasChildrenClass } responsive-block-editor-addons-editor-preview-mode-${ deviceType.toLowerCase() } ${ isRootContainerClass }`,
	} );

	const innerBlocksParams = {
		__experimentalMoverDirection: { moverDirection },
		renderAppender: hasChildBlocks ? undefined : InnerBlocks.ButtonBlockAppender,
	};

	const { getBlockParentsAll, getBlockSingle } = useSelect( ( selectStore ) => {
		const { getBlockParents, getBlock } = selectStore( 'core/block-editor' );
		return { getBlockParentsAll: getBlockParents, getBlockSingle: getBlock };
	}, [] );

	const parentBlockIds = getBlockParentsAll( clientId );
	const parentBlockNames = parentBlockIds.map( ( id ) => getBlockSingle( id ).name );

	return (
		<>
			<CustomTag { ...blockProps } key={ block_id }>
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
						<InnerBlocks { ...innerBlocksParams } />
					</div>
				) : (
					<InnerBlocks { ...innerBlocksParams } />
				) }
			</CustomTag>
		</>
	);
};
export default memo( Render );
