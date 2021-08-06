document.addEventListener("DOMContentLoaded", function() {
    const svgIcon = document.querySelector(".responsive-block-editor-addons-block-inline-notice-svg");
    const titleArea = document.querySelector(".responsive-block-editor-addons-block-inline-notice-title-area");
    
    if(titleArea !== null) {
        let parentBlock = titleArea.parentElement;

        svgIcon.addEventListener("click", () => {
            if(!parentBlock.classList.contains("dismissBlock")) {
                parentBlock.classList.add("dismissBlock")
            }
        })
    }
})