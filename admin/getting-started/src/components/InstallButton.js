const InstallButton = ({ type, status, nonce, redirect, buttonText, setButtonText, slug }) => {
    const handleInstall = (e) => {
        e.preventDefault();
        setButtonText(rbealocalize.installing + '...');

        const installFunction = type === 'theme' ? wp.updates.installTheme : wp.updates.installPlugin;

        installFunction({
            slug: slug,
            success: function () {
                setButtonText(rbealocalize.activating + '...');
                activatePlugin(nonce, redirect, setButtonText);
            },
            error: function (error) {
                console.error(`${type} installation failed:`, error);
                setButtonText(rbealocalize.install_failed || 'Install Failed');
            }
        });
    };

    const handleActivate = () => {
        activatePlugin(nonce, redirect, setButtonText);
    };

    switch (status) {
        case 'install':
            return (
                <button
                    onClick={handleInstall}
                    className="mt-1.125 py-0.625 px-5 bg-white hover:bg-sky-100 border border-blue-600 text-blue-600 rounded-md text-sm leading-5 font-medium capitalize"
                >
                    {buttonText}
                </button>
            );
        case 'activate':
            return (
                <button
                    onClick={handleActivate}
                    className="mt-1.125 py-0.625 px-5 bg-white hover:bg-sky-100 border border-blue-600 text-blue-600 rounded-md text-sm leading-5 font-medium capitalize"
                >
                    {buttonText}
                </button>
            );
        case 'activated':
            return (
                <button className="mt-1.125 py-0.625 px-5 border border-slate-500 hover:bg-slate-300 text-slate-500 bg-white rounded-md text-sm leading-5 font-medium capitalize">
                    Activated
                </button>
            );
        default:
            return (
                <button className="mt-1.125 py-0.625 px-5 border border-slate-500 hover:bg-slate-300 text-slate-500 bg-white rounded-md text-sm leading-5 font-medium capitalize">
                    {buttonText}
                </button>
            );
    }
};

const activatePlugin = (url, redirect, setButtonText) => {
    if (typeof url === 'undefined' || !url) {
        return;
    }
    setButtonText(rbealocalize.activating + '...');
    fetch(url, { method: 'GET' })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then((data) => {
            if (typeof redirect !== 'undefined' && redirect !== '') {
                window.location.replace(redirect);
            } else {
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

export default InstallButton;
export { activatePlugin };