const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const postcssConfig = require( './postcss.config' );

const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const RtlCssPlugin = require( 'rtlcss-webpack-plugin' );
const FixStyleOnlyEntriesPlugin = require( "webpack-fix-style-only-entries" );
const nodeSassGlobImporter = require( 'node-sass-glob-importer' );

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
	...defaultConfig,

	entry: {
		'responsive-block-editor-addons': path.resolve( process.cwd(), 'src/blocks.js' ),
		'responsive-block-editor-addons-editor': path.resolve( process.cwd(), 'src/styles/editor.scss' ),
		'responsive-block-editor-addons-style': path.resolve( process.cwd(), 'src/styles/style.scss' ),
		'responsive-block-editor-addons-masonry': path.resolve( process.cwd(), 'src/blocks/gallery-masonry/responsive-block-editor-addons-masonry.js' ),
		'responsive-block-editor-addons-lightbox': path.resolve( process.cwd(), 'src/blocks/gallery-masonry/responsive-block-editor-addons-lightbox.js' ),

		'frontend_blocks': path.resolve( process.cwd(), 'src/block-frontend.js' ),
	},

	output: {
		filename: '[name].js',
		path: path.resolve( process.cwd(), 'dist/' ),
	},

	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,

			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							...postcssConfig,
							sourceMap: ! isProduction,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: ! isProduction,
							sassOptions: {
								importer: nodeSassGlobImporter(),
							}
						}
					}
				],
			},
		],
	},

	stats: {
		...defaultConfig.stats,
		modules: false,
		warnings: false,
	},

	plugins: [
		...defaultConfig.plugins,

		new FixStyleOnlyEntriesPlugin(),
		new MiniCssExtractPlugin( {
			filename: '[name].css',
		} ),
		new RtlCssPlugin( {
			filename: '[name]-rtl.css'
		} ),
	],
};
