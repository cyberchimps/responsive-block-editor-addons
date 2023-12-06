const BLOCKS_TEMPLATE_PRESET1 = [
    ['responsive-block-editor-addons/section', {},
        [
            ['responsive-block-editor-addons/advanced-heading', { headingTitle: 'Hello World!!!', showSeparator: false, showSubHeading: false }],
            ['core/paragraph', { placeholder: 'Enter side content...' }],
            ['responsive-block-editor-addons/responsive-block-editor-addons-cta', {}],
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
                            ['responsive-block-editor-addons/advanced-heading', { headingTitle: 'Hello World!!!', showSeparator: false, showSubHeading: false }],
                            ['core/paragraph', { placeholder: 'Enter side content...' }],
                            ['responsive-block-editor-addons/responsive-block-editor-addons-cta', {}],
                        ]
                    ],
                    ['responsive-block-editor-addons/column', {},
                        [
                            ['core/image'],
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
            ['core/paragraph', { placeholder: 'Enter side content...' }]
        ]
    ]
];

export { BLOCKS_TEMPLATE_PRESET1, BLOCKS_TEMPLATE_PRESET2, BLOCKS_TEMPLATE_CUSTOM };