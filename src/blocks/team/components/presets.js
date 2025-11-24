const presets = [
    {
        id: 'team-preset1',
        label: 'Preset1',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect width="24" height="24" transform="translate(42 11)" fill="#B2B2B2" fill-opacity="0.3"/><path d="M59.5 27.2778V18.7222C59.5 18.05 58.95 17.5 58.2778 17.5H49.7222C49.05 17.5 48.5 18.05 48.5 18.7222V27.2778C48.5 27.95 49.05 28.5 49.7222 28.5H58.2778C58.95 28.5 59.5 27.95 59.5 27.2778ZM51.8611 23.9167L53.3889 25.7561L55.5278 23L58.2778 26.6667H49.7222L51.8611 23.9167Z" fill="#B2B2B2"/><rect x="37" y="39" width="34" height="3" fill="#BFBFBF"/><rect x="43" y="44" width="22" height="2" fill="#BFBFBF"/><rect x="22" y="54" width="64" height="2" fill="#CDCDCD"/><rect x="35" y="58" width="38" height="2" fill="#CDCDCD"/><rect x="38" y="65" width="4" height="4" fill="#CDCDCD"/><rect x="45" y="65" width="4" height="4" fill="#CDCDCD"/><rect x="52" y="65" width="4" height="4" fill="#CDCDCD"/><rect x="59" y="65" width="4" height="4" fill="#CDCDCD"/><rect x="66" y="65" width="4" height="4" fill="#CDCDCD"/></svg>',
        attributes: {
            showName: true,
            showDesignation: true,
            showDescription: true,
            showSocialIcons: true,
            borderWidth: 0,
        },
    },
    {
        id: 'team-preset2',
        label: 'Preset2',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect width="24" height="24" transform="translate(41 17)" fill="#B2B2B2" fill-opacity="0.3"/><path d="M58.5 33.2778V24.7222C58.5 24.05 57.95 23.5 57.2778 23.5H48.7222C48.05 23.5 47.5 24.05 47.5 24.7222V33.2778C47.5 33.95 48.05 34.5 48.7222 34.5H57.2778C57.95 34.5 58.5 33.95 58.5 33.2778ZM50.8611 29.9167L52.3889 31.7561L54.5278 29L57.2778 32.6667H48.7222L50.8611 29.9167Z" fill="#B2B2B2"/><rect x="36" y="45" width="34" height="3" fill="#BFBFBF"/><rect x="42" y="50" width="22" height="2" fill="#BFBFBF"/><rect x="38" y="60" width="4" height="4" fill="#CDCDCD"/><rect x="45" y="60" width="4" height="4" fill="#CDCDCD"/><rect x="52" y="60" width="4" height="4" fill="#CDCDCD"/><rect x="59" y="60" width="4" height="4" fill="#CDCDCD"/><rect x="66" y="60" width="4" height="4" fill="#CDCDCD"/></svg>',
        attributes: {
            showName: true,
            showDesignation: true,
            showDescription: false,
            showSocialIcons: true,
            borderWidth: 0,
        },
    },
    {
        id: 'team-preset3',
        label: 'Preset3',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect width="24" height="24" transform="translate(42 15)" fill="#B2B2B2" fill-opacity="0.3"/><path d="M59.5 31.2778V22.7222C59.5 22.05 58.95 21.5 58.2778 21.5H49.7222C49.05 21.5 48.5 22.05 48.5 22.7222V31.2778C48.5 31.95 49.05 32.5 49.7222 32.5H58.2778C58.95 32.5 59.5 31.95 59.5 31.2778ZM51.8611 27.9167L53.3889 29.7561L55.5278 27L58.2778 30.6667H49.7222L51.8611 27.9167Z" fill="#B2B2B2"/><rect x="37" y="43" width="34" height="3" fill="#BFBFBF"/><rect x="43" y="48" width="22" height="2" fill="#BFBFBF"/><rect x="22" y="58" width="64" height="2" fill="#CDCDCD"/><rect x="35" y="62" width="38" height="2" fill="#CDCDCD"/></svg>',
        attributes: {
            showName: true,
            showDesignation: true,
            showDescription: true,
            showSocialIcons: false,
            borderWidth: 0,
        },
    },
    {
        id: 'team-preset4',
        label: 'Preset4',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect width="24" height="24" transform="translate(41 22)" fill="#B2B2B2" fill-opacity="0.3"/><path d="M58.5 38.2778V29.7222C58.5 29.05 57.95 28.5 57.2778 28.5H48.7222C48.05 28.5 47.5 29.05 47.5 29.7222V38.2778C47.5 38.95 48.05 39.5 48.7222 39.5H57.2778C57.95 39.5 58.5 38.95 58.5 38.2778ZM50.8611 34.9167L52.3889 36.7561L54.5278 34L57.2778 37.6667H48.7222L50.8611 34.9167Z" fill="#B2B2B2"/><rect x="36" y="50" width="34" height="3" fill="#BFBFBF"/><rect x="42" y="55" width="22" height="2" fill="#BFBFBF"/></svg>',
        attributes: {
            showName: true,
            showDesignation: true,
            showDescription: false,
            showSocialIcons: false,
            borderWidth: 0,
        },
    },
    {
        id: 'team-preset5',
        label: 'Preset5',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect x="28.5" y="8.5" width="51" height="62" fill="white" stroke="#BFBFBF"/><rect width="24" height="24" transform="translate(42 16)" fill="#BFBFBF" fill-opacity="0.3"/><path d="M59.5 32.2778V23.7222C59.5 23.05 58.95 22.5 58.2778 22.5H49.7222C49.05 22.5 48.5 23.05 48.5 23.7222V32.2778C48.5 32.95 49.05 33.5 49.7222 33.5H58.2778C58.95 33.5 59.5 32.95 59.5 32.2778ZM51.8611 28.9167L53.3889 30.7561L55.5278 28L58.2778 31.6667H49.7222L51.8611 28.9167Z" fill="#BFBFBF"/><rect x="37" y="44" width="34" height="3" fill="#BFBFBF"/><rect x="43" y="49" width="22" height="2" fill="#BFBFBF"/><rect x="38" y="59" width="4" height="4" fill="#CDCDCD"/><rect x="45" y="59" width="4" height="4" fill="#CDCDCD"/><rect x="52" y="59" width="4" height="4" fill="#CDCDCD"/><rect x="59" y="59" width="4" height="4" fill="#CDCDCD"/><rect x="66" y="59" width="4" height="4" fill="#CDCDCD"/></svg>',
        attributes: {
            showName: true,
            showDesignation: true,
            showDescription: false,
            showSocialIcons: true,
            borderWidth: 2,
        },
    },
    {
        id: 'team-preset6',
        label: 'Preset6',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect x="28.5" y="14.5" width="51" height="51" fill="white" stroke="#BFBFBF"/><rect width="24" height="24" transform="translate(42 22)" fill="#BFBFBF" fill-opacity="0.3"/><path d="M59.5 38.2778V29.7222C59.5 29.05 58.95 28.5 58.2778 28.5H49.7222C49.05 28.5 48.5 29.05 48.5 29.7222V38.2778C48.5 38.95 49.05 39.5 49.7222 39.5H58.2778C58.95 39.5 59.5 38.95 59.5 38.2778ZM51.8611 34.9167L53.3889 36.7561L55.5278 34L58.2778 37.6667H49.7222L51.8611 34.9167Z" fill="#BFBFBF"/><rect x="38" y="54" width="4" height="4" fill="#CDCDCD"/><rect x="45" y="54" width="4" height="4" fill="#CDCDCD"/><rect x="52" y="54" width="4" height="4" fill="#CDCDCD"/><rect x="59" y="54" width="4" height="4" fill="#CDCDCD"/><rect x="66" y="54" width="4" height="4" fill="#CDCDCD"/></svg>',
        attributes: {
            showName: false,
            showDesignation: false,
            showDescription: false,
            showSocialIcons: true,
            borderWidth: 2,
        },
    },
];

const resetPreset = {
    showName: true,
    showDesignation: true,
    showDescription: true,
    showSocialIcons: true,
    borderWidth: 2,
};

export { presets, resetPreset };