const presets = [
    {
        id: 'post-carousel-center',
        label: 'Center',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect x="16" y="49" width="76" height="2" fill="#CDCDCD"/><rect x="35" y="53" width="38" height="2" fill="#CDCDCD"/><rect width="60" height="24" transform="translate(24 10)" fill="#B2B2B2" fill-opacity="0.3"/><path d="M59.5 26.2778V17.7222C59.5 17.05 58.95 16.5 58.2778 16.5H49.7222C49.05 16.5 48.5 17.05 48.5 17.7222V26.2778C48.5 26.95 49.05 27.5 49.7222 27.5H58.2778C58.95 27.5 59.5 26.95 59.5 26.2778ZM51.8611 22.9167L53.3889 24.7561L55.5278 22L58.2778 25.6667H49.7222L51.8611 22.9167Z" fill="#B2B2B2"/><rect x="30" y="39" width="47" height="3" fill="#BFBFBF"/><rect x="41" y="63" width="25" height="7" fill="#BFBFBF"/></svg>',
        attributes: {
            displayPostImage: true,
            blockAlign: 'center',
            imagePosition: 'top',
        },
    },
    {
        id: 'post-carousel-left',
        label: 'Left',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect x="16" y="49" width="76" height="2" fill="#CDCDCD"/><rect x="16" y="53" width="38" height="2" fill="#CDCDCD"/><rect width="60" height="24" transform="translate(16 10)" fill="#B2B2B2" fill-opacity="0.3"/><path d="M51.5 26.2778V17.7222C51.5 17.05 50.95 16.5 50.2778 16.5H41.7222C41.05 16.5 40.5 17.05 40.5 17.7222V26.2778C40.5 26.95 41.05 27.5 41.7222 27.5H50.2778C50.95 27.5 51.5 26.95 51.5 26.2778ZM43.8611 22.9167L45.3889 24.7561L47.5278 22L50.2778 25.6667H41.7222L43.8611 22.9167Z" fill="#B2B2B2"/><rect x="16" y="39" width="47" height="3" fill="#BFBFBF"/><rect x="16" y="63" width="25" height="7" fill="#BFBFBF"/></svg>',
        attributes: {
            displayPostImage: true,
            blockAlign: 'left',
            imagePosition: 'top',
        },
    },
    {
        id: 'post-carousel-left-image-bg',
        label: 'Left with Image Background',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect width="76" height="60" transform="translate(16 10)" fill="#B2B2B2" fill-opacity="0.2"/><path d="M59.5 44.2778V35.7222C59.5 35.05 58.95 34.5 58.2778 34.5H49.7222C49.05 34.5 48.5 35.05 48.5 35.7222V44.2778C48.5 44.95 49.05 45.5 49.7222 45.5H58.2778C58.95 45.5 59.5 44.95 59.5 44.2778ZM51.8611 40.9167L53.3889 42.7561L55.5278 40L58.2778 43.6667H49.7222L51.8611 40.9167Z" fill="#B2B2B2" fill-opacity="0.4"/><rect x="21" y="35" width="66" height="2" fill="#CDCDCD"/><rect x="21" y="39" width="33" height="2" fill="#CDCDCD"/><rect x="21" y="25" width="41" height="3" fill="#BFBFBF"/><rect x="21" y="49" width="22" height="7" fill="#BFBFBF"/></svg>',
        attributes: {
            displayPostImage: true,
            blockAlign: 'left',
            imagePosition: 'background',
        },
    },
    {
        id: 'post-carousel-left-no-image',
        label: 'Left with no image',
        icon: '<svg width="108" height="80" viewBox="0 0 108 80" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="107" height="79" rx="3.5" fill="white" stroke="#D9D9D9"/><rect x="21" y="35" width="66" height="2" fill="#CDCDCD"/><rect x="21" y="39" width="33" height="2" fill="#CDCDCD"/><rect x="21" y="25" width="41" height="3" fill="#BFBFBF"/><rect x="21" y="49" width="22" height="7" fill="#BFBFBF"/></svg>',
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