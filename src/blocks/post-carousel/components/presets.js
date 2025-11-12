const presets = [
    {
        id: 'post-carousel-center',
        label: 'Center',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#CDCDCD" d="M16 49h76v2H16zM35 53h38v2H35z"></path> <path fill="#B2B2B2" fillOpacity="0.3" d="M24 10h60v24H24z"></path> <path fill="#B2B2B2" d="M59.5 26.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L55.528 22l2.75 3.667h-8.556z" ></path> <path fill="#BFBFBF" d="M30 39h47v3H30zM41 63h25v7H41z"></path> </svg>',
        attributes: {
            displayPostImage: true,
            blockAlign: 'center',
            imagePosition: 'top',
        },
    },
    {
        id: 'post-carousel-left',
        label: 'Left',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#CDCDCD" d="M16 49h76v2H16zM16 53h38v2H16z"></path> <path fill="#B2B2B2" fillOpacity="0.3" d="M16 10h60v24H16z"></path> <path fill="#B2B2B2" d="M51.5 26.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L47.528 22l2.75 3.667h-8.556z" ></path> <path fill="#BFBFBF" d="M16 39h47v3H16zM16 63h25v7H16z"></path> </svg>',
        attributes: {
            displayPostImage: true,
            blockAlign: 'left',
            imagePosition: 'top',
        },
    },
    {
        id: 'post-carousel-left-image-bg',
        label: 'Left with Image Background',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#B2B2B2" fillOpacity="0.2" d="M16 10h76v60H16z"></path> <path fill="#B2B2B2" fillOpacity="0.4" d="M59.5 44.278v-8.556c0-.672-.55-1.222-1.222-1.222h-8.556c-.672 0-1.222.55-1.222 1.222v8.556c0 .672.55 1.222 1.222 1.222h8.556c.672 0 1.222-.55 1.222-1.222m-7.639-3.361 1.528 1.84L55.528 40l2.75 3.667h-8.556z" ></path> <path fill="#CDCDCD" d="M21 35h66v2H21zM21 39h33v2H21z"></path> <path fill="#BFBFBF" d="M21 25h41v3H21zM21 49h22v7H21z"></path> </svg>',
        attributes: {
            displayPostImage: true,
            blockAlign: 'left',
            imagePosition: 'background',
        },
    },
    {
        id: 'post-carousel-left-no-image',
        label: 'Left with no image',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#CDCDCD" d="M21 35h66v2H21zM21 39h33v2H21z"></path> <path fill="#BFBFBF" d="M21 25h41v3H21zM21 49h22v7H21z"></path> </svg>',
        attributes: {
            displayPostImage: false,
            blockAlign: 'left',
            imagePosition: 'top',
        },
    },
];

const resetPreset = {
    displayPostImage: true,
    blockAlign: 'left',
    imagePosition: 'top',
};

export { presets, resetPreset };