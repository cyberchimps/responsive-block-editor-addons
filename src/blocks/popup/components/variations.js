const BLOCKS_TEMPLATE_PRESET1 = [
    ['responsive-block-editor-addons/section', {},
        [
            ['responsive-block-editor-addons/advanced-heading', { headingTitle: 'Illustration Skills', showSeparator: false, showSubHeading: false, headingAlignment: 'center' }],
            ['core/paragraph', { placeholder: 'Enter your content...', content: 'Through the years I have created downloadable resources that you can download and improve your skills.', align: 'center' }],
            ['responsive-block-editor-addons/responsive-block-editor-addons-cta', { buttonText: 'Learn More', ctaTitle: '', ctaText: '', backgroundColor: '#FFFFFF' }],
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
                            ['responsive-block-editor-addons/advanced-heading', { headingTitle: 'Illustration Skills', showSeparator: false, showSubHeading: false, headingAlignment: 'left' }],
                            ['core/paragraph', { placeholder: 'Enter your content...', content: 'Through the years I have created downloadable resources that you can download and improve your skills.' }],
                            ['responsive-block-editor-addons/responsive-block-editor-addons-cta', { buttonText: 'Learn More', ctaTitle: '', ctaText: '', backgroundColor: '#FFFFFF' }],
                        ]
                    ],
                    ['responsive-block-editor-addons/column', {},
                        [
                            ['core/image', { url: 'https://images.pexels.com/photos/2534523/pexels-photo-2534523.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&dpr=1' }],
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