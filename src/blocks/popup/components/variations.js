const image_url = responsive_globals.home_url + '/wp-content/plugins/responsive-block-editor-addons/admin/images/preset-image.jpg';

const BLOCKS_TEMPLATE_PRESET1 = [
    ['responsive-block-editor-addons/section', { topPadding: 0, bottomPadding: 0, leftPadding: 0, rightPadding: 0 },
        [
            ['responsive-block-editor-addons/image', { imageUrl: image_url, imageWidth: 560, imageHeight: 300, imagebottommargin: 10 }],
            ['responsive-block-editor-addons/advanced-heading', { headingTitle: 'Its a Beautiful Day', showSeparator: false, showSubHeading: false, headingAlignment: 'center' }],
            ['core/paragraph', { placeholder: 'Enter your content...', content: 'Sun is shining and flowers are blooming. Get your pot of indoor flowers at 25% OFF! Limited Time offer.', align: 'center' }],
            ['responsive-block-editor-addons/buttons', {},
                [
                    ['responsive-block-editor-addons/buttons-child', { backgroundType: 'color', background: '#0066CC', color: '#fff', hColor: '#fff', label: 'Save 25% Off', borderStyle: 'none' }],
                ]
            ],
        ]
    ]
];

const BLOCKS_TEMPLATE_PRESET2 = [
    ['responsive-block-editor-addons/section', {},
        [
            ['responsive-block-editor-addons/advance-columns', {},
                [
                    ['responsive-block-editor-addons/column', {},
                        [
                            ['responsive-block-editor-addons/advanced-heading', { headingTitle: 'Its a Beautiful Day', showSeparator: false, showSubHeading: false, headingAlignment: 'left' }],
                            ['core/paragraph', { placeholder: 'Enter your content...', content: 'Sun is shining and flowers are blooming. Get your pot of indoor flowers at 25% OFF! Limited Time offer.' }],
                            ['responsive-block-editor-addons/buttons', {},
                                [
                                    ['responsive-block-editor-addons/buttons-child', { backgroundType: 'color', background: '#0066CC', color: '#fff', hColor: '#fff', label: 'Save 25% Off', borderStyle: 'none' }],
                                ]
                            ],
                        ]
                    ],
                    ['responsive-block-editor-addons/column', {},
                        [
                            ['core/image', { url: image_url, width: '250', scale: 'cover', aspectRatio: '9/16' }],
                        ]
                    ],
                ]
            ],
        ]
    ]
];

const BLOCKS_TEMPLATE_CUSTOM = [
    ['responsive-block-editor-addons/section', {},
        [
            ['core/paragraph', { placeholder: 'Enter your content...' }]
        ]
    ]
];

export { BLOCKS_TEMPLATE_PRESET1, BLOCKS_TEMPLATE_PRESET2, BLOCKS_TEMPLATE_CUSTOM };