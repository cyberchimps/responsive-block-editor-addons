const presets = [
    {
        id: 'countdown-preset-vertical',
        label: 'Vertical',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#BFBFBF" d="M20 30h20v20H20z"></path> <path fill="#fff" d="M24 33h5v10h-5zM24 45h12v2H24zM31 33h5v10h-5z"></path> <path fill="#BFBFBF" d="M44 30h20v20H44z"></path> <path fill="#fff" d="M48 33h5v10h-5zM48 45h12v2H48zM55 33h5v10h-5z"></path> <path fill="#BFBFBF" d="M68 30h20v20H68z"></path> <path fill="#fff" d="M72 33h5v10h-5zM72 45h12v2H72zM79 33h5v10h-5z"></path> </svg>',
        attributes: {
            displayInline: false,
        },
    },
    {
        id: 'countdown-preset-horizontal',
        label: 'Horizontal',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#BFBFBF" d="M15 30h24v16H15z"></path> <path fill="#fff" d="M17 33h4v10h-4zM29 37h8v2h-8zM23 33h4v10h-4z"></path> <path fill="#BFBFBF" d="M42 30h24v16H42z"></path> <path fill="#fff" d="M44 33h4v10h-4zM56 37h8v2h-8zM50 33h4v10h-4z"></path> <path fill="#BFBFBF" d="M69 30h24v16H69z"></path> <path fill="#fff" d="M71 33h4v10h-4zM83 37h8v2h-8zM77 33h4v10h-4z"></path> </svg>',
        attributes: {
            displayInline: true,
        },
    },
];

const resetPreset = {
    displayInline: false
};

export { presets, resetPreset };