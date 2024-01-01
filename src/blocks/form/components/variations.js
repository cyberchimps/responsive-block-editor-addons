const { __ } = wp.i18n;
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons"

// [
//     [
//         'responsive-block-editor-addons/form-input',
//         {
//             label: __( 'Name', 'otter-blocks' ),
//             type: 'text',
//             isRequired: true
//         }
//     ],
//     [
//         'responsive-block-editor-addons/form-input',
//         {
//             label: __( 'Email', 'otter-blocks' ),
//             type: 'email',
//             isRequired: true
//         }
//     ],
//     [
//         'responsive-block-editor-addons/form-textarea',
//         {
//             label: __( 'Message', 'otter-blocks' )
//         }
//     ],
//     [
//         'core/paragraph',
//         {
//             content: __( 'You agree to receive email communication from us by submitting this form and understand that your contact information will be stored with us.', 'otter-blocks' ),
//             fontSize: 'extra-small'
//         }
//     ]
// ]

const variations = [
    {
        key: 'contact',
        name: __("Contact Form", "responsive-block-editor-addons"),
        description: __("Contact Form", "responsive-block-editor-addons"),
        title: __("Contact Form", "responsive-block-editor-addons"),
        icon: ResponsiveBlockEditorAddonsIcons.form,
        innerBlocks: [
            ['responsive-block-editor-addons/advanced-heading', {}],
            ['responsive-block-editor-addons/advanced-heading', {}],
            ['responsive-block-editor-addons/advanced-heading', {}],
            ['core/paragraph', { content: __( 'You agree to receive email communication from us by submitting this form and understand that your contact information will be stored with us.', 'otter-blocks' ),
            fontSize: 'extra-small' }]],
        scope: [ 'block' ]
    },
    {
        key: 'subscribe',
        name: __("Subscribe Form", "responsive-block-editor-addons"),
        description: __("Subscribe Form", "responsive-block-editor-addons"),
        title: __("Subscribe Form", "responsive-block-editor-addons"),
        icon: ResponsiveBlockEditorAddonsIcons.form,
        innerBlocks: [
            [
                'responsive-block-editor-addons/form-input',
                {
                    label: __( 'Name', 'otter-blocks' ),
                    type: 'text',
                    isRequired: true
                }
            ],
            [
                'responsive-block-editor-addons/form-input',
                {
                    label: __( 'Email', 'otter-blocks' ),
                    type: 'email',
                    isRequired: true
                }
            ],
            [
                'core/paragraph',
                {
                    content: __( 'You agree to receive email communication from us by submitting this form and understand that your contact information will be stored with us.', 'otter-blocks' ),
                    fontSize: 'extra-small'
                }
            ]
        ],
        scope: [ 'block' ]
    },
];

export default variations;