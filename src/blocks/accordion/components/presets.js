const presets = [
    {
        id: 'accordion-preset-vertical-outlined',
        label: 'Vertical Outlined',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#fff" stroke="#BFBFBF" strokeWidth="0.5" d="M17.25 23.25h73.5v8.5h-73.5z" ></path> <path fill="#F4F4F4" d="M17 32h74v14H17z"></path> <path fill="#D9D9D9" d="M21 26h44v3H21z"></path> <path fill="#CDCDCD" d="M21 36h67v2H21zM21 40h35v2H21z"></path> <path stroke="#BFBFBF" strokeLinecap="round" strokeWidth="0.5" d="M86.5 27.5h-3" ></path> <path fill="#fff" stroke="#BFBFBF" strokeWidth="0.5" d="M17.25 48.25h73.5v8.5h-73.5z" ></path> <path fill="#D9D9D9" d="M21 51h44v3H21z"></path> <path stroke="#BFBFBF" strokeLinecap="round" strokeWidth="0.5" d="M85 51v3M86.5 52.5h-3" ></path> </svg>',
        attributes: {
            layout: 'accordion',
            expandFirstItem: true,
            titleBackgroundColor: '',
            titleTypographyColor: '#000000',
        },
    },
    {
        id: 'accordion-preset-vertical-filled',
        label: 'Horizontal Filled',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#A2A2A2" stroke="#A2A2A2" strokeWidth="0.5" d="M17.25 23.25h73.5v8.5h-73.5z" ></path> <path fill="#F4F4F4" d="M17 32h74v14H17z"></path> <path fill="#D9D9D9" d="M21 26h44v3H21z"></path> <path fill="#CDCDCD" d="M21 36h67v2H21zM21 40h35v2H21z"></path> <path stroke="#BFBFBF" strokeLinecap="round" strokeWidth="0.5" d="M86.5 27.5h-3" ></path> <path fill="#A2A2A2" stroke="#A2A2A2" strokeWidth="0.5" d="M17.25 48.25h73.5v8.5h-73.5z" ></path> <path fill="#D9D9D9" d="M21 51h44v3H21z"></path> <path stroke="#BFBFBF" strokeLinecap="round" strokeWidth="0.5" d="M85 51v3M86.5 52.5h-3" ></path> </svg>',
        attributes: {
            layout: 'accordion',
            expandFirstItem: true,
            titleBackgroundColor: '#000000',
            titleTypographyColor: '#ffffff',
        },
    },
    {
        id: 'accordion-preset-horizontal-outlined',
        label: 'Horizontal Outlined',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#fff" stroke="#BFBFBF" strokeWidth="0.5" d="M17.25 24.25h34.5v8.5h-34.5z" ></path> <path fill="#F4F4F4" d="M17 33h35v23H17z"></path> <path fill="#D9D9D9" d="M20 27h14v3H20z"></path> <path fill="#CDCDCD" d="M20 36h29v2H20zM20 41h29v2H20zM20 46h29v2H20zM20 51h16v2H20z" ></path> <path fill="#fff" stroke="#BFBFBF" strokeWidth="0.5" d="M56.25 24.25h34.5v8.5h-34.5z" ></path> <path fill="#F4F4F4" d="M56 33h35v23H56z"></path> <path fill="#D9D9D9" d="M60 27h14v3H60z"></path> <path fill="#CDCDCD" d="M59 36h29v2H59zM59 41h29v2H59zM59 46h29v2H59zM59 51h16v2H59z" ></path> </svg>',
        attributes: {
            layout: 'grid',
            expandFirstItem: false,
            titleBackgroundColor: '',
            titleTypographyColor: '#000000',
        },
    },
    {
        id: 'accordion-preset-horizontal-filled',
        label: 'Horizontal Filled',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="108" height="80" fill="none" viewBox="0 0 108 80" > <rect width="107" height="79" x="0.5" y="0.5" fill="#fff" stroke="#D9D9D9" rx="3.5" ></rect> <path fill="#A2A2A2" stroke="#A2A2A2" strokeWidth="0.5" d="M17.25 24.25h34.5v8.5h-34.5z" ></path> <path fill="#F4F4F4" d="M17 33h35v23H17z"></path> <path fill="#D9D9D9" d="M20 27h14v3H20z"></path> <path fill="#CDCDCD" d="M20 36h29v2H20zM20 41h29v2H20zM20 46h29v2H20zM20 51h16v2H20z" ></path> <path fill="#A2A2A2" stroke="#A2A2A2" strokeWidth="0.5" d="M56.25 24.25h34.5v8.5h-34.5z" ></path> <path fill="#F4F4F4" d="M56 33h35v23H56z"></path> <path fill="#D9D9D9" d="M60 27h14v3H60z"></path> <path fill="#CDCDCD" d="M59 36h29v2H59zM59 41h29v2H59zM59 46h29v2H59zM59 51h16v2H59z" ></path> </svg>',
        attributes: {
            layout: 'grid',
            expandFirstItem: false,
            titleBackgroundColor: "#000000",
            titleTypographyColor: '#ffffff',
        },
    },
];

const resetPreset = {
    layout: 'accordion',
    expandFirstItem: false,
    titleBackgroundColor: '',
    titleTypographyColor: '#000000',
};

export { presets, resetPreset };