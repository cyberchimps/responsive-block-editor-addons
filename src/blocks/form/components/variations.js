const { __ } = wp.i18n;
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons"

const variations = [
    {
        key: 'contact',
        name: __("Contact Form", "responsive-block-editor-addons"),
        description: __("Contact Form", "responsive-block-editor-addons"),
        title: __("Contact Form", "responsive-block-editor-addons"),
        icon: ResponsiveBlockEditorAddonsIcons.form,
        innerBlocks: [
            ['responsive-block-editor-addons/form-input', {}],
            ['responsive-block-editor-addons/form-input', { formInputFieldType: 'email', formInputFieldLabel: 'Email' }],
            ['responsive-block-editor-addons/form-input', { formInputFieldType: 'textarea', formInputFieldLabel: 'Message' }],
            ['core/paragraph', { content: __( 'You agree to receive email communication from us by submitting this form and understand that your contact information will be stored with us.', 'responsive-block-editor-addons' ),
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
            ['responsive-block-editor-addons/form-input', {}],
            ['responsive-block-editor-addons/form-input', { formInputFieldType: 'email', formInputFieldLabel: 'Email' }],
            ['core/paragraph', { content: __( 'You agree to receive email communication from us by submitting this form and understand that your contact information will be stored with us.', 'responsive-block-editor-addons' ),
            fontSize: 'extra-small' }]
        ],
        scope: [ 'block' ]
    },
];

export default variations;