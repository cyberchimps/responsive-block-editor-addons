const { __ } = wp.i18n;

const HelpContents = [
    {
        'title': __( 'Documentation & Changelog', 'responsive-block-editor-addons' ),
        'desc': __( 'Browse through the detailed documentation to know how to use the plugin.', 'responsive-block-editor-addons' ),
        'icon': 'dashicons-media-document.svg',
        'links': [
            {
                'title': __( 'Docs', 'responsive-block-editor-addons' ),
                'url': 'https://cyberchimps.com/blocks/docs/',
            },  
            {
                'title': __( 'Changelog', 'responsive-block-editor-addons' ),
                'url': 'https://cyberchimps.com/changelog/responsive-block-editor-addons/',
            }
        ]
    },
    {
        'title': __( 'Blocks Demo', 'responsive-block-editor-addons' ),
        'desc' : __( 'View demos of the Gutenberg blocks to understand their usability.', 'responsive-block-editor-addons' ),
        'icon' : 'dashicons-welcome-view-site.svg',
        'links': [
            {
                'title': __( 'View Now', 'responsive-block-editor-addons' ),
                'url'  : 'https://cyberchimps.com/blocks/',
            }
        ]
    },
    {
        'title': __( 'Video Resources', 'responsive-block-editor-addons' ),
        'desc' : __( 'Check out the video resources to learn how to use the powerful plugin features.', 'responsive-block-editor-addons' ),
        'icon' : 'dashicons-youtube.svg',
        'links': [
            {
                'title': __( 'Watch Now', 'responsive-block-editor-addons' ),
                'url'  : 'https://www.youtube.com/playlist?list=PLXTwxw3ZJwPSCqW__jo6fkUlEh2uXAsuF',
            }
        ]
    },
    {
        'title': __( 'Support', 'responsive-block-editor-addons' ),
        'desc' : __( 'Got any questions, we are happy to help! Get in touch with our dedicated support team.', 'responsive-block-editor-addons' ),
        'icon' : 'dashicons-sos.svg',
        'links': [
            {
                'title': __( 'Request Support', 'responsive-block-editor-addons' ),
                'url'  : 'https://wordpress.org/support/plugin/responsive-block-editor-addons/',
            }
        ]
    },
    {
        'title': __( 'Join Our Community', 'responsive-block-editor-addons' ),
        'desc' : __( 'Join our community of Responsive users to create  websites! Say Hi, ask questions, and grow together.', 'responsive-block-editor-addons' ),
        'icon' : 'dashicons-groups.svg',
        'links': [
            {
                'title': __( 'Join Facebook Group', 'responsive-block-editor-addons' ),
                'url'  : 'https://www.facebook.com/groups/responsive.theme',
            }
        ]
    },
    {
        'title': __( 'Rate Us', 'responsive-block-editor-addons' ),
        'desc' : __( 'Your feedback is invaluable to us, and we greatly appreciate each and every review you provide.', 'responsive-block-editor-addons' ),
        'icon' : 'dashicons-thumbs-up.svg',
        'links': [
            {
                'title': __( 'Submit Review', 'responsive-block-editor-addons' ),
                'url'  : 'https://wordpress.org/support/plugin/responsive-block-editor-addons/reviews/#new-post',
            },
        ]
    },
]

const Categories = [
    {
        key: 'all',
        title: 'All'
    },
    {
        key: 'content',
        title: 'Content'
    },
    {
        key: 'timelines',
        title: 'Timelines'
    },
    {
        key: 'cro',
        title: 'CRO'
    }
]

export {HelpContents, Categories}