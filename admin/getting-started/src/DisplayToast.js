const displayToast = (msg, status) => {
    let background = status === "error" ? "#FF5151" : "#00CF21";
    Toastify({
        text: msg,
        duration: 3000,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        offset: {
            x: 0,
            y: 30,
        },
        style: {
            background,
        },
    }).showToast();
};

export { displayToast };