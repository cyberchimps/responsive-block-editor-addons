import classnames from 'classnames';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { memo } from '@wordpress/element';
import { select, useSelect } from '@wordpress/data';

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
	} = attributes;

	const direction = attributes[ 'direction' + deviceType ];

	const moverDirection = 'row' === direction ? 'horizontal' : 'vertical';

	const { getBlockOrder } = select( 'core/block-editor' );

	const hasChildBlocks = getBlockOrder( clientId ).length > 0;

	const CustomTag = 'a' === htmlTag ? 'div' : `${ htmlTag }`;	

	const hasChildren = 0 !== select( 'core/block-editor' ).getBlocks( clientId ).length;
	const hasChildrenClass = hasChildren ? 'rba-container-has-children' : '';
	const isRootContainerClass = isBlockRootParent ? `${ contentWidth } rba-is-root-container` : '';
	const blockProps = useBlockProps( {
		className: `rba-block-${ block_id } ${ hasChildrenClass } rba-editor-preview-mode-${ deviceType.toLowerCase() } ${ isRootContainerClass }`,
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
					<div className="rba-container__video-wrap">
						{ backgroundVideo && (
							<video autoPlay loop muted playsinline>
								<source src={ backgroundVideo.url } type="video/mp4" />
							</video>
						) }
					</div>
				) }

				{/* Render the content above the Video Background if any and above the Shape Dividers. */}
				{ isBlockRootParent && 'alignfull' === contentWidth && 'alignwide' === innerContentWidth ? (
					<div className="rba-container-inner-blocks-wrap">
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
