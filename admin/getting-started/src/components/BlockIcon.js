import ResponsiveBlockEditorAddonsIcons from '../../../../src/block-icons';

const BlockIcon = ({ block }) => {

    let icon = block.replace(/-/g, '_');

    if ( icon === 'responsive_block_editor_addons_cta' ) {
        icon = 'call_to_action';
    }
    if ( icon === 'responsive_block_editor_addons_post_grid' ) {
        icon = 'post_grid';
    }
    if ( icon === 'image_boxes_block' ) {
        icon = 'image_boxes';
    }
    
    return (
        <span>{ResponsiveBlockEditorAddonsIcons[icon]}</span>
    )
}

export default BlockIcon;