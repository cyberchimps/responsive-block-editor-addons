/**
 * Block Previews.
 */

const BlockPreview = ( {image} ) => {
	let pluginUrl = responsive_globals.plugin_url;
	let previewUrl = `${pluginUrl}admin/images/previews/${image}.svg`;
	return <img width="100%" src={ previewUrl } alt="" />;
};

export default BlockPreview;