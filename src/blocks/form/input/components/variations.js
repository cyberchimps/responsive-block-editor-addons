const { __ } = wp.i18n;
import ResponsiveBlockEditorAddonsIcons from "../../../../block-icons"
import { createBlock } from '@wordpress/blocks';
import { omit } from 'lodash';

const variations = [
    {
        name: 'responsive-block-editor-addons/form-input-email',
        description: __( 'Insert an email field', 'otter-blocks' ),
        icon: ResponsiveBlockEditorAddonsIcons.form,
        title: __( 'Email Field', 'otter-blocks' ),
        attributes: {
            type: 'email'
        }
    },
    {
        name: 'responsive-block-editor-addons/form-input-date',
        description: __( 'Insert a date field', 'otter-blocks' ),
        icon: ResponsiveBlockEditorAddonsIcons.form,
        title: __( 'Date Field', 'otter-blocks' ),
        attributes: {
            type: 'date'
        }
    },
    {
        name: 'responsive-block-editor-addons/form-input-number',
        description: __( 'Insert a number field', 'otter-blocks' ),
        icon: ResponsiveBlockEditorAddonsIcons.form,
        title: __( 'Number Field', 'otter-blocks' ),
        attributes: {
            type: 'number'
        }
    },
    {
        name: 'responsive-block-editor-addons/form-input-url',
        description: __( 'Insert an URL field', 'otter-blocks' ),
        icon: ResponsiveBlockEditorAddonsIcons.form,
        title: __( 'URL Field', 'otter-blocks' ),
        attributes: {
            type: 'url',
            placeholder: 'https://'
        }
    }
]

const transforms = [
    {
        type: 'block',
        blocks: [ 'responsive-block-editor-addons/form-textarea' ],
        transform: ( attributes ) => {
            const attrs = omit( attributes, [ 'type' ]);
            return createBlock( 'responsive-block-editor-addons/form-textarea', {
                ...attrs
            });
        }
    },
    {
        type: 'block',
        blocks: [ 'responsive-block-editor-addons/form-multiple-choice' ],
        transform: ( attributes ) => {
            const attrs = omit( attributes, [ 'type' ]);
            return createBlock( 'responsive-block-editor-addons/form-multiple-choice', {
                ...attrs
            });
        }
    },
]

export { variations, transforms };