const presets = [
    {
        id: 'team-preset1',
        label: 'Preset1',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#B2B2B2" fillOpacity="0.3" d="M42 11h24v24H42z"></path> <path fill="#B2B2B2" d="M59.5 27.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L55.528 23l2.75 3.667h-8.556z" ></path> <path fill="#BFBFBF" d="M37 39h34v3H37zM43 44h22v2H43z"></path> <path fill="#CDCDCD" d="M22 54h64v2H22zM35 58h38v2H35zM38 65h4v4h-4zM45 65h4v4h-4zM52 65h4v4h-4zM59 65h4v4h-4zM66 65h4v4h-4z" ></path> </svg>',
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
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#B2B2B2" fillOpacity="0.3" d="M41 17h24v24H41z"></path> <path fill="#B2B2B2" d="M58.5 33.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L54.528 29l2.75 3.667h-8.556z" ></path> <path fill="#BFBFBF" d="M36 45h34v3H36zM42 50h22v2H42z"></path> <path fill="#CDCDCD" d="M38 60h4v4h-4zM45 60h4v4h-4zM52 60h4v4h-4zM59 60h4v4h-4zM66 60h4v4h-4z" ></path> </svg>',
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
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#B2B2B2" fillOpacity="0.3" d="M42 15h24v24H42z"></path> <path fill="#B2B2B2" d="M59.5 31.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L55.528 27l2.75 3.667h-8.556z" ></path> <path fill="#BFBFBF" d="M37 43h34v3H37zM43 48h22v2H43z"></path> <path fill="#CDCDCD" d="M22 58h64v2H22zM35 62h38v2H35z"></path> </svg>',
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
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#B2B2B2" fillOpacity="0.3" d="M41 22h24v24H41z"></path> <path fill="#B2B2B2" d="M58.5 38.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L54.528 34l2.75 3.667h-8.556z" ></path> <path fill="#BFBFBF" d="M36 50h34v3H36zM42 55h22v2H42z"></path> </svg>',
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
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#fff" stroke="#BFBFBF" d="M28.5 8.5h51v62h-51z"></path> <path fill="#BFBFBF" fillOpacity="0.3" d="M42 16h24v24H42z"></path> <path fill="#BFBFBF" d="M59.5 32.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L55.528 28l2.75 3.667h-8.556zM37 44h34v3H37zM43 49h22v2H43z" ></path> <path fill="#CDCDCD" d="M38 59h4v4h-4zM45 59h4v4h-4zM52 59h4v4h-4zM59 59h4v4h-4zM66 59h4v4h-4z" ></path> </svg>',
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
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#fff" stroke="#BFBFBF" d="M28.5 14.5h51v51h-51z"></path> <path fill="#BFBFBF" fillOpacity="0.3" d="M42 22h24v24H42z"></path> <path fill="#BFBFBF" d="M59.5 38.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L55.528 34l2.75 3.667h-8.556z" ></path> <path fill="#CDCDCD" d="M38 54h4v4h-4zM45 54h4v4h-4zM52 54h4v4h-4zM59 54h4v4h-4zM66 54h4v4h-4z" ></path> </svg>',
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