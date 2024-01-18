const { __ } = wp.i18n;
import ResponsiveBlockEditorAddonsIcons from "../../../block-icons"

const subscribeForm = <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="12" y="7" width="23" height="33" rx="1" stroke="#FE6E5A" fill="white"/>
<rect x="15" y="12" width="17" height="4" rx="1" stroke="#FE6E5A" fill="white"/>
<rect x="15" y="22" width="17" height="4" rx="1" stroke="#FE6E5A" fill="white"/>
<rect x="23" y="33" width="9" height="4" rx="1" stroke="#FE6E5A" fill="white"/>
<path d="M15 10H20" stroke="#FE6E5A" stroke-linecap="round"/>
<path d="M15 20H20" stroke="#FE6E5A" stroke-linecap="round"/>
</svg>


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
        icon: subscribeForm,
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