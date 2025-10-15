const presets = [
    {
        id: 'cta-preset-center',
        label: 'Center',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#BFBFBF" d="M30 13h47v8H30zM42 62h23v6H42zM14 36h80v3H14zM30 43h48v3H30z" ></path> </svg>',
        attributes: {
            buttonAlignment: 'center',
        },
    },
    {
        id: 'cta-preset-left',
        label: 'Left',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#BFBFBF" d="M14 13h47v8H14zM14 62h23v6H14z"></path> <path fill="#D3D3D3" d="M14 36h80v3H14zM14 43h48v3H14z"></path> </svg>',
        attributes: {
            buttonAlignment: 'left',
        },
    },
    {
        id: 'cta-preset-right',
        label: 'Right',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#BFBFBF" d="M47 13h47v8H47zM71 62h23v6H71z"></path> <path fill="#D3D3D3" d="M14 36h80v3H14zM46 43h48v3H46z"></path> </svg>',
        attributes: {
            buttonAlignment: 'right',
        },
    },
]

const resetPreset = {
    buttonAlignment: 'center',
}

export {presets, resetPreset};