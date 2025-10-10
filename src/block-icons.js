/**
 * Block icons
 */

import { createElement as svgIcon } from '@wordpress/element';

const accordionIcon = <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <rect x="2.5" y="9" width="20" height="7" rx="2" stroke="url(#paint0_linear_2282_1404)" strokeWidth="1.5" />
    <rect x="2.5" y="2" width="20" height="4" rx="1" stroke="url(#paint1_linear_2282_1404)" strokeWidth="1.5" />
    <rect x="2.5" y="19" width="20" height="4" rx="1" stroke="url(#paint2_linear_2282_1404)" strokeWidth="1.5" /> <defs>
        <linearGradient id="paint0_linear_2282_1404" x1="12.5" y1="9" x2="12.5" y2="16" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
        <linearGradient id="paint1_linear_2282_1404" x1="12.5" y1="2" x2="12.5" y2="6" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
        <linearGradient id="paint2_linear_2282_1404" x1="12.5" y1="19" x2="12.5" y2="23" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
    </defs>
    </svg>;

const advancedColumnsIcon = <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <g clipPath="url(#clip0_2262_1527)">
        <rect x="18.75" y="3.125" width="4.16667" height="18.75" rx="1" stroke="url(#paint0_linear_2262_1527)" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="10.4166" y="3.125" width="4.16667" height="10.4167" rx="1" stroke="url(#paint1_linear_2262_1527)" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="2.08337" y="3.125" width="4.16667" height="15.625" rx="1" stroke="url(#paint2_linear_2262_1527)" strokeWidth="1.5" strokeLinejoin="round" />
    </g>
    <defs>
        <linearGradient id="paint0_linear_2262_1527" x1="20.8333" y1="3.125" x2="20.8333" y2="21.875" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /> </linearGradient>
        <linearGradient id="paint1_linear_2262_1527" x1="12.5" y1="3.125" x2="12.5" y2="13.5417" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /> </linearGradient>
        <linearGradient id="paint2_linear_2262_1527" x1="4.16671" y1="3.125" x2="4.16671" y2="18.75" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /> </linearGradient>
        <clipPath id="clip0_2262_1527"> <rect width="25" height="25" fill="white" /></clipPath>
    </defs>
    </svg>;

const buttonIcon = <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <g clipPath="url(#clip0_2270_1392)">
        <rect x="4.16663" y="5.20834" width="16.6667" height="5.20833" rx="1" stroke="url(#paint0_linear_2270_1392)" strokeWidth="1.5" strokeLinejoin="round" />
        <rect x="4.16663" y="14.5833" width="16.6667" height="5.20833" rx="1" stroke="url(#paint1_linear_2270_1392)" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="7" y1="7.79999" x2="18" y2="7.79999" stroke="url(#paint2_linear_2270_1392)" strokeLinecap="round" />
        <line x1="7" y1="17.2" x2="18" y2="17.2" stroke="url(#paint3_linear_2270_1392)" strokeLinecap="round" />
    </g>
    <defs>
        <linearGradient id="paint0_linear_2270_1392" x1="12.5" y1="5.20834" x2="12.5" y2="10.4167" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
        <linearGradient id="paint1_linear_2270_1392" x1="12.5" y1="14.5833" x2="12.5" y2="19.7917" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
        <linearGradient id="paint2_linear_2270_1392" x1="12.5" y1="8.29999" x2="12.5" y2="9.29999" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
        <linearGradient id="paint3_linear_2270_1392" x1="12.5" y1="17.7" x2="12.5" y2="18.7" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
        <clipPath id="clip0_2270_1392">
            <rect width="25" height="25" fill="white" />
        </clipPath>
    </defs>
    </svg>;

const ResponsiveBlockEditorAddonsIcons = {
    accordion: accordionIcon,
    accordion_item: accordionIcon,
    advance_columns: advancedColumnsIcon,
    column: advancedColumnsIcon,
    advance_text: <svg className="rbea-editor-icons" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <rect x="0.75" y="0.75" width="21.5" height="21.5" rx="3.25" stroke="url(#paint0_linear_2297_1597)" strokeWidth="1.5" />
        <path d="M6.2229 14.5636L7.9029 10.7101M7.9029 10.7101H13.9492M7.9029 10.7101L10.4754 4.80649C10.511 4.71612 10.573 4.63856 10.6533 4.5839C10.7336 4.52923 10.8285 4.5 10.9256 4.5C11.0227 4.5 11.1176 4.52923 11.1979 4.5839C11.2782 4.63856 11.3402 4.71612 11.3758 4.80649L13.9492 10.7101M13.9492 10.7101L15.0788 13.0709" stroke="url(#paint1_linear_2297_1597)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 17.571L4.997 17.7757C5.55525 18.0059 6.1905 17.9289 6.7085 17.6182C7.31225 17.2586 8.15138 16.8176 8.88113 16.6557C9.39125 16.542 9.96875 16.8299 9.83575 17.3347C9.687 17.8965 9.232 18.5562 9.66775 18.8616C10.324 19.321 14.0699 18.1459 14.0699 18.1459" stroke="url(#paint2_linear_2297_1597)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path className="rbea-editor-icon-selected-fill" d="M15.1617 18.4819C15.4429 18.4183 15.7003 18.2762 15.9039 18.0721L19.2245 14.7537C19.3724 14.6121 19.4905 14.4424 19.5719 14.2546C19.6533 14.0668 19.6964 13.8646 19.6987 13.6598C19.7009 13.4551 19.6623 13.252 19.585 13.0624C19.5078 12.8729 19.3935 12.7006 19.2488 12.5558C19.1041 12.411 18.9319 12.2965 18.7424 12.2191C18.5529 12.1417 18.3498 12.1029 18.1451 12.1049C17.9404 12.107 17.7382 12.15 17.5503 12.2312C17.3624 12.3125 17.1926 12.4304 17.0509 12.5782L13.7309 15.8978C13.5269 16.1024 13.3844 16.3605 13.3205 16.6418L12.9942 18.0751C12.9711 18.1763 12.974 18.2817 13.0027 18.3814C13.0314 18.4811 13.085 18.5719 13.1583 18.6453C13.2317 18.7186 13.3225 18.7722 13.4222 18.8009C13.5219 18.8296 13.6273 18.8326 13.7284 18.8095L15.1617 18.4819Z" fill="url(#paint3_linear_2297_1597)" />
        <defs>
            <linearGradient id="paint0_linear_2297_1597" x1="11.5" y1="0" x2="11.5" y2="23" gradientUnits="userSpaceOnUse" ><stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint1_linear_2297_1597" x1="10.6508" y1="4.5" x2="10.6508" y2="14.5636" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint2_linear_2297_1597" x1="9.28494" y1="16.631" x2="9.28494" y2="18.9681" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint3_linear_2297_1597" x1="16.3388" y1="12.1049" x2="16.3388" y2="18.8249" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /> </linearGradient>
        </defs>
        </svg>,
    advanced_heading: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.75" y="1.75" width="21.5" height="21.5" rx="3.25" stroke="url(#paint0_linear_2297_1586)" strokeWidth="1.5" />
        <path className="rbea-editor-icon-selected-fill rbea-editor-icon-selected-no-stroke" d="M10.063 12.941C9.927 12.941 9.859 13.0033 9.859 13.128V18.16C9.859 18.3867 9.72867 18.5 9.468 18.5H7.666C7.54133 18.5 7.45633 18.4773 7.411 18.432C7.36567 18.3753 7.343 18.296 7.343 18.194V6.175C7.343 5.98233 7.428 5.886 7.598 5.886H9.621C9.77967 5.886 9.859 5.97667 9.859 6.158V10.731C9.859 10.9123 9.93833 11.003 10.097 11.003H14.585C14.7437 11.003 14.823 10.918 14.823 10.748V6.158C14.823 5.97667 14.9023 5.886 15.061 5.886H17.084C17.254 5.886 17.339 5.98233 17.339 6.175V18.194C17.339 18.296 17.3163 18.3753 17.271 18.432C17.2257 18.4773 17.1407 18.5 17.016 18.5H15.214C14.9533 18.5 14.823 18.3867 14.823 18.16V13.128C14.823 13.0033 14.755 12.941 14.619 12.941H10.063Z" fill="url(#paint1_linear_2297_1586)" />
        <defs>
            <linearGradient id="paint0_linear_2297_1586" x1="12.5" y1="1" x2="12.5" y2="24" gradientUnits="userSpaceOnUse"> <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint1_linear_2297_1586" x1="12.5" y1="4.5" x2="12.5" y2="20.5" gradientUnits="userSpaceOnUse"> <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
        </defs>
        </svg>,
    anchor: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2284_1191)">
            <path d="M12.5 9.375V21.875M12.5 9.375C11.6712 9.375 10.8763 9.04576 10.2903 8.45971C9.70424 7.87366 9.375 7.0788 9.375 6.25C9.375 5.4212 9.70424 4.62634 10.2903 4.04029C10.8763 3.45424 11.6712 3.125 12.5 3.125C13.3288 3.125 14.1237 3.45424 14.7097 4.04029C15.2958 4.62634 15.625 5.4212 15.625 6.25C15.625 7.0788 15.2958 7.87366 14.7097 8.45971C14.1237 9.04576 13.3288 9.375 12.5 9.375ZM12.5 21.875C10.2899 21.875 8.17025 20.997 6.60744 19.4342C5.04464 17.8714 4.16667 15.7518 4.16667 13.5417M12.5 21.875C14.7101 21.875 16.8298 20.997 18.3926 19.4342C19.9554 17.8714 20.8333 15.7518 20.8333 13.5417M21.875 13.5417H19.7917M5.20833 13.5417H3.125" stroke="url(#paint0_linear_2284_1191)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
            <linearGradient id="paint0_linear_2284_1191" x1="12.5" y1="3.125" x2="12.5" y2="21.875" gradientUnits="userSpaceOnUse"> <stop stopColor="#7C29C4"/> <stop offset="1" stopColor="#2D2C52"/></linearGradient>
            <clipPath id="clip0_2284_1191">
                <rect width="25" height="25" fill="white"/>
            </clipPath>
        </defs>
        </svg>,
    blockquote: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g clipPath="url(#clip0_2270_1428)">
            <path d="M14.3757 14.6671L14.3896 14.4851C14.3896 9.79292 17.2305 7.3208 20.8436 6M14.3757 14.6671C14.3756 14.0981 14.4871 13.5347 14.7037 13.009C14.9203 12.4832 15.2378 12.0055 15.6382 11.6031C16.4468 10.7904 17.5435 10.3338 18.6872 10.3336C19.2534 10.3335 19.8142 10.4455 20.3374 10.6631C20.8606 10.8808 21.336 11.1999 21.7365 11.6021C22.5453 12.4146 22.9998 13.5166 23 14.6657C23.0002 15.8149 22.546 16.917 21.7375 17.7297C20.9289 18.5424 19.8322 18.9991 18.6885 18.9993C17.5449 18.9995 16.448 18.5432 15.6392 17.7307C14.8304 16.9183 14.3759 15.8163 14.3757 14.6671ZM2 14.6671L2.01394 14.4851C2.01394 9.79292 4.85479 7.3208 8.46788 6M2 14.6671C2 13.518 2.45432 12.4159 3.263 11.6033C4.07169 10.7908 5.1685 10.3343 6.31215 10.3343C7.45581 10.3343 8.55262 10.7908 9.3613 11.6033C10.17 12.4159 10.6243 13.518 10.6243 14.6671C10.6243 15.8163 10.17 16.9184 9.3613 17.7309C8.55262 18.5435 7.45581 19 6.31215 19C5.1685 19 4.07169 18.5435 3.263 17.7309C2.45432 16.9184 2 15.8163 2 14.6671Z" stroke="url(#paint0_linear_2270_1428)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_2270_1428" x1="12.5" y1="19" x2="12.5" y2="6" gradientUnits="userSpaceOnUse" > <stop stopColor="#2D2C52" /> <stop offset="1" stopColor="#7C29C4" /></linearGradient>
            <clipPath id="clip0_2270_1428">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
        </svg>,
    buttons: buttonIcon,
    buttons_child: buttonIcon,
    call_mail_button: svgIcon("svg", { width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24" },
        svgIcon("path", { fill: "#ff6f61", d: "M21 8V7l-3 2l-3-2v1l3 2l3-2zm1-5H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h20c1.1 0 1.99-.9 1.99-2L24 5c0-1.1-.9-2-2-2zM8 6c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm6 12H2v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1zm8-6h-8V6h8v6z" })
    ),
    call_to_action: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g clipPath="url(#clip0_2297_1681)">
            <g clipPath="url(#clip1_2297_1681)">
                <path d="M17.7709 13.25V7M17.7709 7H11.5209M17.7709 7L11 13.7708" stroke="url(#paint0_linear_2297_1681)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16.7071 15.7071L19.3552 18.3552C19.7113 18.7113 19.7113 19.2887 19.3552 19.6448C17.43 21.57 14.3821 21.7866 12.204 20.153L10.6286 18.9714C8.88504 17.6638 7.33622 16.115 6.02857 14.3714L4.84701 12.796C3.21341 10.6179 3.43001 7.56999 5.35523 5.64477C5.71133 5.28867 6.28867 5.28867 6.64477 5.64477L9.29289 8.29289C9.68342 8.68342 9.68342 9.31658 9.29289 9.70711L8.27175 10.7283C8.10946 10.8905 8.06923 11.1385 8.17187 11.3437C9.35853 13.7171 11.2829 15.6415 13.6563 16.8281C13.8615 16.9308 14.1095 16.8905 14.2717 16.7283L15.2929 15.7071C15.6834 15.3166 16.3166 15.3166 16.7071 15.7071Z" stroke="url(#paint1_linear_2297_1681)" strokeWidth="1.5" strokeLinejoin="round" /> 
            </g>
        </g>
        <defs>
            <linearGradient id="paint0_linear_2297_1681" x1="14.3855" y1="7" x2="14.3855" y2="13.7708" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint1_linear_2297_1681" x1="11" y1="5" x2="11" y2="23" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <clipPath id="clip0_2297_1681">
                <rect width="25" height="25" fill="white" />
            </clipPath>
            <clipPath id="clip1_2297_1681">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
        </svg>,
    card: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2314_1266)">
            <g clipPath="url(#clip1_2314_1266)">
            <rect x="2" y="4" width="21" height="18" rx="2" stroke="url(#paint0_linear_2314_1266)" strokeWidth="1.5"/>
            <path d="M6 15.5L19 15.5" stroke="url(#paint1_linear_2314_1266)" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M10 18.5L15 18.5" stroke="url(#paint2_linear_2314_1266)" strokeWidth="1.5" strokeLinecap="round"/>
            <mask id="path-4-inside-1_2314_1266" fill="white">
                <rect x="4" y="6" width="17" height="7" rx="1"/>
            </mask>
            <rect x="4" y="6" width="17" height="7" rx="1" stroke="url(#paint3_linear_2314_1266)" strokeWidth="3" mask="url(#path-4-inside-1_2314_1266)"/>
            </g>
        </g>
        <defs>
            <linearGradient id="paint0_linear_2314_1266" x1="12.5" y1="4" x2="12.5" y2="22" gradientUnits="userSpaceOnUse"><stop stopColor="#7C29C4"/><stop offset="1" stopColor="#2D2C52"/></linearGradient>
            <linearGradient id="paint1_linear_2314_1266" x1="12.5" y1="15.5" x2="12.5" y2="16.5" gradientUnits="userSpaceOnUse"><stop stopColor="#7C29C4"/><stop offset="1" stopColor="#2D2C52"/></linearGradient>
            <linearGradient id="paint2_linear_2314_1266" x1="12.5" y1="18.5" x2="12.5" y2="19.5" gradientUnits="userSpaceOnUse"><stop stopColor="#7C29C4"/><stop offset="1" stopColor="#2D2C52"/></linearGradient>
            <linearGradient id="paint3_linear_2314_1266" x1="12.5" y1="6" x2="12.5" y2="13" gradientUnits="userSpaceOnUse"><stop stopColor="#7C29C4"/><stop offset="1" stopColor="#2D2C52"/></linearGradient>
            <clipPath id="clip0_2314_1266">
                <rect width="25" height="25" fill="white"/>
            </clipPath>
            <clipPath id="clip1_2314_1266">
                <rect width="25" height="25" fill="white"/>
            </clipPath>
        </defs>
        </svg>,
    content_timeline: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g clipPath="url(#clip0_2282_1257)">
            <line x1="12.5" y1="3" x2="12.5" y2="22" stroke="url(#paint0_linear_2282_1257)" strokeLinecap="round" />
            <circle cx="12.5" cy="5.5" r="1" fill="white" stroke="url(#paint1_linear_2282_1257)" />
            <circle cx="12.5" cy="19.5" r="1" fill="white" stroke="url(#paint2_linear_2282_1257)" />
            <circle cx="12.5" cy="12.5" r="1" fill="white" stroke="url(#paint3_linear_2282_1257)" />
            <path d="M18.834 2.25H19.5C20.464 2.25 21.1117 2.25146 21.5947 2.31641C22.0561 2.37845 22.2535 2.4859 22.3838 2.61621C22.5141 2.74652 22.6215 2.94388 22.6836 3.40527C22.7485 3.88831 22.75 4.53599 22.75 5.5C22.75 6.46401 22.7485 7.11169 22.6836 7.59473C22.6215 8.05612 22.5141 8.25348 22.3838 8.38379C22.2535 8.5141 22.0561 8.62155 21.5947 8.68359C21.1117 8.74854 20.464 8.75 19.5 8.75H18.583C17.9728 8.75 17.57 8.74891 17.2588 8.71777C16.9635 8.68821 16.8155 8.63654 16.707 8.57129C16.6694 8.54863 16.6327 8.52356 16.5977 8.49707C16.4968 8.42074 16.3933 8.30367 16.2559 8.04102C16.1108 7.76379 15.9601 7.38971 15.7324 6.82324C15.461 6.14792 15.3983 5.96596 15.3887 5.78809C15.3872 5.76153 15.3865 5.7346 15.3867 5.70801C15.3886 5.52999 15.4434 5.34541 15.6846 4.65918L15.7676 4.42285C16.0002 3.76091 16.1558 3.32299 16.3115 3.00098C16.4588 2.6965 16.5754 2.5648 16.6943 2.48047C16.8134 2.39612 16.977 2.32903 17.3135 2.29102C17.6688 2.25091 18.1327 2.25 18.834 2.25Z" stroke="url(#paint4_linear_2282_1257)" strokeWidth="1.5" />
            <path d="M18.7725 16.25H19.5C20.464 16.25 21.1117 16.2515 21.5947 16.3164C22.0561 16.3785 22.2535 16.4859 22.3838 16.6162C22.5141 16.7465 22.6215 16.9439 22.6836 17.4053C22.7485 17.8883 22.75 18.536 22.75 19.5C22.75 20.464 22.7485 21.1117 22.6836 21.5947C22.6215 22.0561 22.5141 22.2535 22.3838 22.3838C22.2535 22.5141 22.0561 22.6215 21.5947 22.6836C21.1117 22.7485 20.464 22.75 19.5 22.75H18.7725C18.0852 22.75 17.6306 22.7488 17.2822 22.71C16.9527 22.6732 16.7917 22.609 16.6738 22.5273C16.556 22.4456 16.4392 22.3171 16.2891 22.0215C16.1305 21.709 15.9696 21.2846 15.7285 20.6416C15.4488 19.8956 15.3857 19.6952 15.3857 19.5C15.3857 19.3048 15.4488 19.1044 15.7285 18.3584C15.9696 17.7154 16.1305 17.291 16.2891 16.9785C16.4392 16.6829 16.556 16.5544 16.6738 16.4727C16.7917 16.391 16.9527 16.3268 17.2822 16.29C17.6306 16.2512 18.0852 16.25 18.7725 16.25Z" stroke="url(#paint5_linear_2282_1257)" strokeWidth="1.5" />
            <path d="M5.5 9.25H6.22754C6.91475 9.25 7.36941 9.25121 7.71777 9.29004C8.04733 9.32678 8.20827 9.39095 8.32617 9.47266C8.44404 9.55438 8.56085 9.68287 8.71094 9.97852C8.86952 10.291 9.03036 10.7154 9.27148 11.3584C9.55123 12.1044 9.61426 12.3048 9.61426 12.5C9.61426 12.6952 9.55123 12.8956 9.27148 13.6416C9.03036 14.2846 8.86952 14.709 8.71094 15.0215C8.56085 15.3171 8.44404 15.4456 8.32617 15.5273C8.20827 15.609 8.04733 15.6732 7.71777 15.71C7.36941 15.7488 6.91475 15.75 6.22754 15.75H5.5C4.53599 15.75 3.88831 15.7485 3.40527 15.6836C2.94388 15.6215 2.74652 15.5141 2.61621 15.3838C2.4859 15.2535 2.37845 15.0561 2.31641 14.5947C2.25146 14.1117 2.25 13.464 2.25 12.5C2.25 11.536 2.25146 10.8883 2.31641 10.4053C2.37845 9.94388 2.4859 9.74652 2.61621 9.61621C2.74652 9.4859 2.94388 9.37845 3.40527 9.31641C3.88831 9.25146 4.53599 9.25 5.5 9.25Z" stroke="url(#paint6_linear_2282_1257)" strokeWidth="1.5" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_2282_1257" x1="11.5" y1="3.5" x2="11.5" y2="22.5" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint1_linear_2282_1257" x1="12.5" y1="4" x2="12.5" y2="7" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint2_linear_2282_1257" x1="12.5" y1="18" x2="12.5" y2="21" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint3_linear_2282_1257" x1="12.5" y1="11" x2="12.5" y2="14" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint4_linear_2282_1257" x1="19" y1="1.5" x2="19" y2="9.5" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint5_linear_2282_1257" x1="19" y1="15.5" x2="19" y2="23.5" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint6_linear_2282_1257" x1="6" y1="8.5" x2="6" y2="16.5" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <clipPath id="clip0_2282_1257">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
        </svg>,
    count_down: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g clipPath="url(#clip0_2274_1506)">
            <path d="M18.2291 7.8125L19.7916 6.25" stroke="url(#paint0_linear_2274_1506)" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12.5" cy="14.5833" r="8.33333" stroke="url(#paint1_linear_2274_1506)" strokeWidth="2" />
            <path d="M12.5 14.5833L12.5 11.4583" stroke="url(#paint2_linear_2274_1506)" strokeWidth="2" strokeLinecap="round" />
            <path d="M10.4877 2.46938C10.6064 2.35863 10.8679 2.26077 11.2318 2.19097C11.5956 2.12118 12.0414 2.08334 12.5 2.08334C12.9587 2.08334 13.4045 2.12118 13.7683 2.19097C14.1321 2.26077 14.3937 2.35863 14.5124 2.46938" stroke="url(#paint3_linear_2274_1506)" strokeWidth="2" strokeLinecap="round" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_2274_1506" x1="19.0104" y1="6.25" x2="19.0104" y2="7.8125" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint1_linear_2274_1506" x1="12.5" y1="6.25" x2="12.5" y2="22.9167" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint2_linear_2274_1506" x1="13" y1="11.4583" x2="13" y2="14.5833" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint3_linear_2274_1506" x1="12.5" y1="2.08334" x2="12.5" y2="3.12501" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <clipPath id="clip0_2274_1506">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
        </svg>,
    count_up: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g clipPath="url(#clip0_2274_1750)">
            <path d="M22 7.5L24 9.5M22 7.5L20 9.5M22 7.5L22 15.5" stroke="url(#paint0_linear_2274_1750)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path className="rbea-editor-icon-selected-fill rbea-editor-icon-selected-no-stroke" d="M5.42599 14.339C5.53399 14.339 5.58799 14.384 5.58799 14.474V15.347C5.58799 15.383 5.57299 15.419 5.54299 15.455C5.51899 15.485 5.47399 15.5 5.40799 15.5H1.85299C1.73899 15.5 1.68199 15.449 1.68199 15.347V14.474C1.68199 14.384 1.73299 14.339 1.83499 14.339H2.77099C2.83699 14.339 2.86999 14.318 2.86999 14.276V10.496C2.86999 10.406 2.82799 10.373 2.74399 10.397L1.87099 10.658C1.73899 10.688 1.67299 10.631 1.67299 10.487V9.893C1.67299 9.827 1.68199 9.782 1.69999 9.758C1.71799 9.734 1.75399 9.707 1.80799 9.677L3.31099 8.93C3.39499 8.888 3.46099 8.861 3.50899 8.849C3.55699 8.831 3.61699 8.822 3.68899 8.822H4.30999C4.39999 8.822 4.44499 8.876 4.44499 8.984V14.249C4.44499 14.309 4.47199 14.339 4.52599 14.339H5.42599ZM8.31309 12.611C8.60109 12.359 8.83509 12.146 9.01509 11.972C9.19509 11.792 9.33609 11.636 9.43809 11.504C9.54009 11.372 9.60909 11.249 9.64509 11.135C9.68709 11.015 9.70809 10.889 9.70809 10.757C9.70809 10.571 9.66309 10.415 9.57309 10.289C9.48309 10.157 9.36309 10.055 9.21309 9.983C9.06909 9.911 8.90109 9.875 8.70909 9.875C8.54709 9.875 8.39109 9.905 8.24109 9.965C8.09709 10.025 7.95309 10.124 7.80909 10.262C7.67109 10.4 7.53309 10.586 7.39509 10.82C7.37709 10.856 7.34709 10.88 7.30509 10.892C7.26309 10.898 7.21209 10.886 7.15209 10.856L6.35109 10.442C6.29109 10.406 6.25509 10.361 6.24309 10.307C6.23709 10.253 6.25209 10.199 6.28809 10.145C6.60009 9.659 6.96309 9.302 7.37709 9.074C7.79709 8.846 8.27109 8.732 8.79909 8.732C9.27909 8.732 9.70209 8.813 10.0681 8.975C10.4341 9.137 10.7191 9.371 10.9231 9.677C11.1331 9.977 11.2381 10.337 11.2381 10.757C11.2381 10.997 11.1961 11.225 11.1121 11.441C11.0281 11.657 10.8901 11.873 10.6981 12.089C10.5121 12.305 10.2601 12.539 9.94209 12.791L8.27709 14.096C8.23509 14.12 8.21409 14.144 8.21409 14.168C8.22009 14.192 8.25909 14.204 8.33109 14.204H11.1301C11.2441 14.204 11.3011 14.252 11.3011 14.348V15.338C11.3011 15.386 11.2861 15.425 11.2561 15.455C11.2321 15.485 11.1871 15.5 11.1211 15.5H6.43209C6.35409 15.5 6.30009 15.488 6.27009 15.464C6.24009 15.434 6.22509 15.383 6.22509 15.311V14.618C6.22509 14.588 6.23109 14.555 6.24309 14.519C6.26109 14.483 6.30009 14.435 6.36009 14.375C6.42009 14.309 6.51309 14.225 6.63909 14.123L8.31309 12.611ZM12.2691 9.866C12.2211 9.812 12.2211 9.746 12.2691 9.668C12.4311 9.476 12.6351 9.311 12.8811 9.173C13.1271 9.029 13.3971 8.921 13.6911 8.849C13.9851 8.771 14.2881 8.732 14.6001 8.732C15.1281 8.732 15.5781 8.807 15.9501 8.957C16.3281 9.101 16.6161 9.305 16.8141 9.569C17.0181 9.827 17.1201 10.13 17.1201 10.478C17.1201 10.76 17.0301 11.033 16.8501 11.297C16.6701 11.555 16.4061 11.738 16.0581 11.846C15.9921 11.87 15.9561 11.9 15.9501 11.936C15.9501 11.966 15.9831 11.99 16.0491 12.008C16.3011 12.086 16.5231 12.203 16.7151 12.359C16.9071 12.509 17.0571 12.686 17.1651 12.89C17.2731 13.094 17.3271 13.319 17.3271 13.565C17.3271 13.991 17.2221 14.357 17.0121 14.663C16.8021 14.963 16.4871 15.194 16.0671 15.356C15.6471 15.512 15.1221 15.59 14.4921 15.59C14.1501 15.59 13.8201 15.545 13.5021 15.455C13.1841 15.365 12.8961 15.236 12.6381 15.068C12.3801 14.9 12.1671 14.702 11.9991 14.474C11.9631 14.426 11.9511 14.381 11.9631 14.339C11.9751 14.291 12.0051 14.249 12.0531 14.213L12.7551 13.718C12.8031 13.682 12.8421 13.667 12.8721 13.673C12.9081 13.673 12.9351 13.685 12.9531 13.709C13.1391 13.895 13.3131 14.045 13.4751 14.159C13.6371 14.267 13.8051 14.348 13.9791 14.402C14.1591 14.456 14.3601 14.483 14.5821 14.483C14.9601 14.483 15.2541 14.402 15.4641 14.24C15.6741 14.078 15.7791 13.865 15.7791 13.601C15.7791 13.397 15.7221 13.223 15.6081 13.079C15.4941 12.935 15.3411 12.824 15.1491 12.746C14.9631 12.668 14.7561 12.629 14.5281 12.629L13.7541 12.611C13.6521 12.611 13.6011 12.569 13.6011 12.485V11.639C13.6011 11.567 13.6521 11.525 13.7541 11.513L14.3751 11.486C14.6151 11.48 14.8251 11.438 15.0051 11.36C15.1851 11.276 15.3261 11.168 15.4281 11.036C15.5301 10.898 15.5811 10.745 15.5811 10.577C15.5811 10.433 15.5361 10.304 15.4461 10.19C15.3621 10.076 15.2451 9.986 15.0951 9.92C14.9451 9.848 14.7741 9.812 14.5821 9.812C14.3061 9.812 14.0541 9.866 13.8261 9.974C13.5981 10.076 13.3641 10.244 13.1241 10.478C13.0881 10.514 13.0551 10.535 13.0251 10.541C13.0011 10.541 12.9681 10.52 12.9261 10.478L12.2691 9.866Z" fill="url(#paint1_linear_2274_1750)" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_2274_1750" x1="22" y1="7.5" x2="22" y2="15.5" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint1_linear_2274_1750" x1="9.5" y1="6.5" x2="9.5" y2="17.5" gradientUnits="userSpaceOnUse" > <stop stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <clipPath id="clip0_2274_1750">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
        </svg>,
    contact_form_7_styler: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1.00476 0.236075C0.577052 0.236075 0.228533 0.595904 0.228533 1.03821V14.3022C0.228533 14.7447 0.576945 15.1046 1.00476 15.1046L12.3705 15.1045C12.7983 15.1045 13.1464 14.7447 13.1464 14.3022L13.1464 1.03813C13.1464 0.59581 12.7983 0.236011 12.3705 0.236011H1.0048L1.00476 0.236075ZM12.3705 15.3405H1.00476C0.450893 15.3405 0.000183105 14.8747 0.000183105 14.3022L0.000318886 1.03813C0.000318886 0.465721 0.450895 2.00675e-05 1.00476 2.00675e-05L12.3705 0C12.9244 0 13.3747 0.465745 13.3747 1.03815L13.3748 14.3022C13.3748 14.8746 12.9243 15.3405 12.3705 15.3405L12.3705 15.3405Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1.46783 0.880495C1.33097 0.880495 1.2192 0.995791 1.2192 1.13742C1.21926 1.27906 1.33097 1.39431 1.46774 1.39431C1.60483 1.39431 1.71657 1.27908 1.71657 1.13742C1.71667 0.995791 1.60476 0.880535 1.46783 0.880495ZM1.46783 1.63029C1.20493 1.63029 0.990845 1.40922 0.990845 1.13742C0.990884 0.865634 1.20493 0.644531 1.46773 0.644531C1.73084 0.644531 1.9446 0.865653 1.9446 1.13742C1.94463 1.40921 1.73084 1.63031 1.46783 1.63029Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M2.86004 0.880495C2.72305 0.880495 2.61149 0.995791 2.61149 1.13742C2.61162 1.27906 2.72298 1.39431 2.86003 1.39431C2.99717 1.39431 3.10857 1.27908 3.10857 1.13742C3.10862 0.995791 2.99709 0.880535 2.86004 0.880495ZM2.86004 1.63029C2.59703 1.63029 2.38318 1.40922 2.38318 1.13742C2.38325 0.865634 2.59693 0.644531 2.86003 0.644531C3.12293 0.644531 3.33691 0.865653 3.33691 1.13742C3.33698 1.40921 3.12286 1.63031 2.86004 1.63029Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.25205 0.880495C4.11493 0.880495 4.00344 0.995791 4.00344 1.13742C4.00349 1.27906 4.11491 1.39431 4.25197 1.39431C4.38905 1.39431 4.50053 1.27908 4.50053 1.13742C4.50063 0.995791 4.38903 0.880535 4.25205 0.880495ZM4.25205 1.63029C3.98917 1.63029 3.77509 1.40922 3.77509 1.13742C3.77512 0.865634 3.98915 0.644531 4.25197 0.644531C4.51508 0.644531 4.72883 0.865653 4.72883 1.13742C4.72885 1.40921 4.51508 1.63031 4.25205 1.63029Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1.15656 8.82846H3.88895V8.02839C3.88895 7.64978 3.63092 7.32519 3.27861 7.24641C3.10031 7.49194 2.82286 7.63635 2.52257 7.63635C2.22242 7.63633 1.94524 7.49195 1.76687 7.24641C1.41462 7.32517 1.15651 7.64982 1.15651 8.02839L1.15656 8.82846ZM4.00321 9.06447H1.04243C0.979432 9.06447 0.928162 9.01165 0.928162 8.9465L0.928191 8.02838C0.928191 7.50763 1.30517 7.06573 1.80521 7.00048C1.84904 6.99462 1.89232 7.01578 1.91581 7.05447C2.04849 7.27104 2.27526 7.40035 2.52257 7.40035C2.77026 7.40032 2.99707 7.27105 3.12967 7.05447C3.15314 7.01577 3.19626 6.99465 3.24025 7.00048C3.74033 7.06569 4.11729 7.50763 4.11729 8.02838L4.11733 8.94649C4.11733 9.01162 4.06616 9.06449 4.00321 9.06447Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M2.52258 5.12122C2.12725 5.12122 1.80545 5.45385 1.80545 5.86266C1.8055 6.27148 2.12712 6.60411 2.52253 6.60411C2.91831 6.60407 3.2399 6.2715 3.2399 5.86266C3.23993 5.45384 2.91824 5.12124 2.52258 5.12122ZM2.52258 6.84005C2.00148 6.84005 1.57715 6.40161 1.57715 5.86266C1.57726 5.32369 2.00138 4.88525 2.52252 4.88525C3.04406 4.88524 3.46823 5.32371 3.46823 5.86266C3.46829 6.4016 3.044 6.84008 2.52258 6.84005Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.97767 7.71387H12.2183V6.23563H4.97767V7.71387ZM12.3326 7.94988H4.86355C4.80053 7.94988 4.74933 7.89707 4.74933 7.83189L4.74944 6.11762C4.74944 6.05249 4.80046 5.99963 4.86349 5.99963H12.3326C12.3956 5.99963 12.4466 6.0525 12.4466 6.11764L12.4467 7.83188C12.4467 7.89705 12.3955 7.94988 12.3326 7.94988Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.97767 12.0832H12.2183V10.6049H4.97767V12.0832ZM12.3326 12.319H4.86355C4.80053 12.319 4.74933 12.2663 4.74933 12.2012L4.74944 10.4869C4.74944 10.4217 4.80046 10.3689 4.86349 10.3689H12.3326C12.3956 10.3689 12.4466 10.4218 12.4466 10.4869L12.4467 12.2011C12.4467 12.2663 12.3955 12.3191 12.3326 12.319Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M1.15656 12.258H3.88895V10.4301H1.15656V12.258ZM4.00321 12.4939H1.04243C0.979432 12.4939 0.928162 12.4411 0.928162 12.3759L0.928191 10.3121C0.928191 10.2469 0.979316 10.1941 1.04234 10.1941L4.0032 10.1941C4.06622 10.1941 4.11729 10.2469 4.11729 10.3121L4.11733 12.3759C4.11733 12.4411 4.06616 12.4939 4.00321 12.4939Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M2.52289 11.6691C2.43821 11.6691 2.35373 11.6383 2.28474 11.5768L0.967794 10.4014C0.919907 10.3588 0.914797 10.2843 0.955839 10.235C0.997239 10.1856 1.0691 10.1802 1.11697 10.2228L2.43406 11.3982C2.48612 11.4449 2.55916 11.4449 2.61148 11.3982L3.92857 10.2228C3.97647 10.1802 4.04834 10.1857 4.08964 10.235C4.13072 10.2843 4.12561 10.3588 4.07777 10.4014L2.76078 11.5768C2.69188 11.6383 2.60733 11.6691 2.52289 11.6691L2.52289 11.6691Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.00317 12.494C3.97669 12.494 3.95017 12.4847 3.92848 12.4654L2.77237 11.4334C2.72473 11.3908 2.71937 11.3163 2.76039 11.267C2.80179 11.2177 2.87366 11.2121 2.92152 11.2548L4.07782 12.2867C4.12559 12.3292 4.13061 12.4039 4.0896 12.4531C4.06713 12.4801 4.0352 12.494 4.00317 12.494ZM1.0424 12.494C1.01031 12.494 0.97839 12.4801 0.955799 12.4531C0.914777 12.4039 0.919799 12.3293 0.967686 12.2867L2.12391 11.2548C2.1718 11.2122 2.24368 11.2177 2.28501 11.267C2.32605 11.3163 2.321 11.3908 2.27313 11.4334L1.11707 12.4654C1.09526 12.4847 1.06876 12.494 1.0424 12.494Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M13.2603 2.27482H0.114182C0.0511801 2.27482 -6.10352e-05 2.22199 -6.10352e-05 2.15684C7.47035e-05 2.09164 0.0510739 2.03885 0.114115 2.03885L13.2603 2.03882C13.3234 2.03882 13.3744 2.09167 13.3744 2.15684C13.3745 2.22197 13.3233 2.27484 13.2603 2.27482L13.2603 2.27482Z" fill="#FF6F61" />
        <path fillRule="evenodd" clipRule="evenodd" d="M4.87187 7.82336H12.3239V6.12655H4.87187V7.82336ZM12.3326 7.84076H4.86356C4.85876 7.84076 4.85516 7.83691 4.85516 7.83208L4.85527 6.11784C4.85527 6.11303 4.85872 6.10913 4.86349 6.10913H12.3326C12.337 6.10913 12.3408 6.11303 12.3408 6.11786L12.3409 7.83208C12.3409 7.83688 12.3369 7.84078 12.3326 7.84076Z" fill="#FF6F61" />
        <path d="M9.86605 19.0367L9.80919 19.2424C9.76087 19.4216 9.80635 19.6067 9.93427 19.736C10.0622 19.8682 10.2413 19.9152 10.4147 19.8653L10.6137 19.8065C10.6819 19.7859 10.7586 19.7947 10.8212 19.83C11.3812 20.1326 12.0606 20.0239 12.5068 19.5626L16.8845 15.0379L14.4796 12.5522L10.102 17.077C9.65285 17.5412 9.55051 18.2405 9.8433 18.8193C9.87742 18.8869 9.88594 18.9633 9.86605 19.0367Z" fill="#FF6F61" />
        <path d="M19.6787 11.2711C19.8863 11.0566 20 10.7716 20 10.469C20 10.1663 19.8863 9.88133 19.6787 9.66684C19.2523 9.22612 18.5559 9.22612 18.1267 9.66684L17.3222 10.4983L18.8743 12.1026L19.6787 11.2711Z" fill="#FF6F61" />
        <path d="M17.5838 14.929C17.9249 15.2816 18.482 15.2816 18.826 14.929L19.1955 14.547C19.5367 14.1945 19.5367 13.6186 19.1955 13.2631L16.1994 10.1692C16.0345 9.99881 15.8128 9.90479 15.5797 9.90479C15.3466 9.90479 15.1249 9.99881 14.96 10.1692L14.5905 10.5512C14.4256 10.7216 14.3347 10.9508 14.3347 11.1917C14.3347 11.4326 14.4256 11.6618 14.5905 11.8322L17.5838 14.929Z" fill="#FF6F61" />
    </svg>,
    divider: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M4 9h12v2H4V9z" })
    ),
    expand: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M7 8h6v4H7zm-5 5v4h4l-1.2-1.2L7 12l-3.8 2.2M14 17h4v-4l-1.2 1.2L13 12l2.2 3.8M14 3l1.3 1.3L13 8l3.8-2.2L18 7V3M6 3H2v4l1.2-1.2L7 8L4.7 4.3" })
    ),
    feature_grid: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" })
    ),
    flipbox: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M15.95 5H14l3.2 3.39L19.82 5h-1.78c0-2.89-1.89-5-5.04-5v2.1c2.1 0 2.95 1.16 2.95 2.9zM1 1h10v9h9v10H6v-5H1V1zm2 2v10h3v-3h3V3H3zm5 9v6h10v-6H8z" })
    ),
    gallery_masonry: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M22 9.999V20a1 1 0 0 1-1 1h-8V9.999h9zm-11 6V21H3a1 1 0 0 1-1-1v-4.001h9zM11 3v10.999H2V4a1 1 0 0 1 1-1h8zm10 0a1 1 0 0 1 1 1v3.999h-9V3h8z" })
    ),
    googlemap: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M10 2C6.69 2 4 4.69 4 8c0 2.02 1.17 3.71 2.53 4.89c.43.37 1.18.96 1.85 1.83c.74.97 1.41 2.01 1.62 2.71c.21-.7.88-1.74 1.62-2.71c.67-.87 1.42-1.46 1.85-1.83C14.83 11.71 16 10.02 16 8c0-3.31-2.69-6-6-6zm0 2.56a3.44 3.44 0 1 1 0 6.88a3.44 3.44 0 0 1 0-6.88z" })
    ),
    icons_list: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" })
    ),
    icons_list_child: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" })
    ),
    image_boxes: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M4 22H2V4a2.002 2.002 0 0 1 2-2h18v2H4z" }),
        svgIcon("path", { fill: "#ff6f61", d: "M21 17a3 3 0 1 0-3-3a3.003 3.003 0 0 0 3 3zm0-4a1 1 0 1 1-1 1a1 1 0 0 1 1-1z" }),
        svgIcon("path", { fill: "#ff6f61", d: "M28 7H9a2.002 2.002 0 0 0-2 2v19a2.002 2.002 0 0 0 2 2h19a2.002 2.002 0 0 0 2-2V9a2.002 2.002 0 0 0-2-2zm0 21H9v-6l4-3.997l5.586 5.586a2 2 0 0 0 2.828 0L23 22.003L28 27zm0-3.828l-3.586-3.586a2 2 0 0 0-2.828 0L20 22.172l-5.586-5.586a2 2 0 0 0-2.828 0L9 19.172V9h19z" })
    ),
    image_hotspot: svgIcon("svg", { width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24" },
        svgIcon("path", { fill: "#ff6f61", d: "M6 20l6-6l1.03 1.03c.25-2.77 2.65-5.03 5.47-5.03c.5 0 1 .08 1.5.22V8l-6-6H6c-1.11 0-2 .89-2 2v16a2 2 0 0 0 2 2h9.91c-.41-.56-.91-1.24-1.36-2H6m7-16.5L18.5 9H13V3.5M8 9a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m10.5 3c-1.9 0-3.5 1.6-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5c0-1.9-1.6-3.5-3.5-3.5m0 4.8c-.7 0-1.2-.6-1.2-1.2c0-.7.6-1.2 1.2-1.2s1.2.6 1.2 1.2c.1.6-.5 1.2-1.2 1.2z" }),
    ),
    image_slider: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M22 26H10a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zM10 8v16h12V8z" }),
        svgIcon("path", { fill: "#ff6f61", d: "M4 24H0v-2h4V10H0V8h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" }),
        svgIcon("path", { fill: "#ff6f61", d: "M32 24h-4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h4v2h-4v12h4z" })
    ),
    info_block: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M3 5h14V3H3v2zm9 8V7H3v6h9zm2-4h3V7h-3v2zm0 4h3v-2h-3v2zM3 17h14v-2H3v2z" }),
    ),
    inline_notice: svgIcon("svg", { width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24" },
        svgIcon("path", { fill: "#ff6f61", d: "M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8s-8-3.59-8-8s3.59-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm1 13h-2v2h2v-2zm-2-2h2l.5-6h-3l.5 6z" })
    ),
    instagram: svgIcon("svg", { width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24" },
        svgIcon("g", { fill: "#ff6f61" },
            svgIcon("path", { fill: "#ff6f61", fillRule: "evenodd", clipRule: "evenodd", d: "M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986zM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89z" })
        )
    ),
    post_carousel: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M5 14V6h10v8H5zm-3-1V7h2v6H2zm4-6v6h8V7H6zm10 0h2v6h-2V7zm-3 2V8H7v1h6zm0 3v-2H7v2h6z" })
    ),
    post_grid: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M2 1h16c.55 0 1 .45 1 1v16c0 .55-.45 1-1 1H2c-.55 0-1-.45-1-1V2c0-.55.45-1 1-1zm7.01 7.99v-6H3v6h6.01zm8 0v-6h-6v6h6zm-8 8.01v-6H3v6h6.01zm8 0v-6h-6v6h6z" })
    ),
    post_timeline: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M3.5 3A1.5 1.5 0 0 0 2 4.5v4A1.5 1.5 0 0 0 3.5 10h9A1.5 1.5 0 0 0 14 8.5v-4A1.5 1.5 0 0 0 12.5 3h-9zM3 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4zm.5 6.5A1.5 1.5 0 0 0 2 12.5v4A1.5 1.5 0 0 0 3.5 18h9a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5h-9zM3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-4zm14-.063a2.003 2.003 0 0 1-2.5-1.937A2 2 0 0 1 16 8.563a2.005 2.005 0 0 1 1 0a2 2 0 0 1 0 3.874zM16.5 3a.5.5 0 0 1 .5.5v4.041a3.02 3.02 0 0 0-1 0V3.5a.5.5 0 0 1 .5-.5zm0 10.5c-.17 0-.337-.014-.5-.041V17.5a.5.5 0 0 0 1 0v-4.041c-.163.027-.33.041-.5.041z" })
    ),
    pricing_list: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M12.5 10.25a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75zm.75 4.75a.75.75 0 1 0 0 1.5h3.5a.75.75 0 1 0 0-1.5h-3.5zm-2.47-5.22a.75.75 0 1 0-1.06-1.06l-1.47 1.47l-.47-.47a.75.75 0 0 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2zm0 4.44a.75.75 0 0 1 0 1.06l-2 2a.75.75 0 0 1-1.06 0l-1-1a.75.75 0 1 1 1.06-1.06l.47.47l1.47-1.47a.75.75 0 0 1 1.06 0zm5.214-10.136A2.25 2.25 0 0 0 13.75 2h-3.5a2.25 2.25 0 0 0-2.236 2H6.25A2.25 2.25 0 0 0 4 6.25v13.5A2.25 2.25 0 0 0 6.25 22h11.5A2.25 2.25 0 0 0 20 19.75V6.25A2.25 2.25 0 0 0 17.75 4h-1.764l.008.084zm0 .012L16 4.25c0-.052-.002-.103-.005-.154zM10.25 6.5h3.5c.78 0 1.467-.397 1.871-1h2.129a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H6.25a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75h2.129c.404.603 1.091 1 1.871 1zm0-3h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5z" })
    ),
    pricing_table: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" })
    ),
    progress_bar: svgIcon("svg", { width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 32 32" },
        svgIcon("path", { fill: "#ff6f61", d: "M28 21H4a2.002 2.002 0 0 1-2-2v-6a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2zM4 13v6h24v-6z" }),
        svgIcon("path", { fill: "#ff6f61", d: "M6 15h14v2H6z" }),
    ),
    section: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M19 16V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h15c.55 0 1-.45 1-1zM4 4h13v4H4V4zm1 1v2h3V5H5zm4 0v2h3V5H9zm4 0v2h3V5h-3zm-8.5 5c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5zM6 10h4v1H6v-1zm6 0h5v5h-5v-5zm-7.5 2c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5zM6 12h4v1H6v-1zm7 0v2h3v-2h-3zm-8.5 2c.28 0 .5.22.5.5s-.22.5-.5.5s-.5-.22-.5-.5s.22-.5.5-.5zM6 14h4v1H6v-1z" })
    ),
    shape_divider: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M2 8.75A6.75 6.75 0 0 1 15.459 8H12.25A4.25 4.25 0 0 0 8 12.25v3.209A6.751 6.751 0 0 1 2 8.75z" }),
        svgIcon("path", { fill: "#ff6f61", d: "M12.25 9A3.25 3.25 0 0 0 9 12.25v6.5A3.25 3.25 0 0 0 12.25 22h6.5A3.25 3.25 0 0 0 22 18.75v-6.5A3.25 3.25 0 0 0 18.75 9h-6.5z" })
    ),
    social_share: svgIcon("svg", { width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 512 512" },
        svgIcon("circle", { fill: "#ff6f61", stroke: "#ff6f61", cx: 128, cy: 256, r: 48, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32" }),
        svgIcon("circle", { fill: "#ff6f61", stroke: "#ff6f61", cx: 384, cy: 112, r: 48, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32" }),
        svgIcon("circle", { fill: "#ff6f61", stroke: "#ff6f61", cx: 384, cy: 400, r: 48, strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "32" }),
        svgIcon("path", { fill: "#ff6f61", stroke: "#ff6f61", strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: "32", d: "M169.83 279.53l172.34 96.94" }),
        svgIcon("path", { fill: "#ff6f61", stroke: "#ff6f61", strokeLinejoin: "round", strokeLinecap: "round", strokeWidth: "32", d: "M342.17 135.53l-172.34 96.94" })
    ),
    spacer: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M11 21H3v-8h2v4.59L17.59 5H13V3h8v8h-2V6.41L6.41 19H11v2z" })
    ),
    table_of_contents: svgIcon("svg", { width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 48 48" },
        svgIcon("g", { fill: "none", stroke: "#ff6f61", strokeWidth: 4, strokeLinecap: "round", strokeLinejoin: "round" },
            svgIcon("rect", { x: 8, y: 4, width: 32, height: 40 }),
            svgIcon("path", { d: "M14 16h20" }),
            svgIcon("path", { d: "M14 24h20" }),
            svgIcon("path", { d: "M14 32h20" }),
            svgIcon("path", { d: "M18 12v24" })
        )
    ),
    tabs: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M14 4V2H0v12h16V4h-2zm-4-1h3v1h-3V3zM6 3h3v1H6V3zm9 10H1V3h4v2h10v8z" })
    ),
    taxonomy_list: svgIcon("svg", { width: 20, height: 20, preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 24 24" },
        svgIcon("g", { fill: "none" },
            svgIcon("path", { fill: "#ff6f61", d: "M3.001 11.996l3 .004a1 1 0 0 1 .114 1.993L6 14L4 13.996v5.003L6 19a1 1 0 0 1 .993.883L7 20a1 1 0 0 1-.883.993L6 21H3a1 1 0 0 1-.993-.883L2 20v-7.004a1 1 0 0 1 .885-.994L3 11.996zM21 17a1 1 0 0 1 .117 1.993L21 19H9a1 1 0 0 1-.117-1.993L9 17h12zm0-3a1 1 0 0 1 .117 1.993L21 16H9a1 1 0 0 1-.117-1.993L9 14h12zM6 2a1 1 0 0 1 .117 1.993L6 4H4v4.995h2a1 1 0 0 1 .993.883L7 9.995a1 1 0 0 1-.883.993L6 10.995H3a1 1 0 0 1-.993-.883L2 9.995V3a1 1 0 0 1 .883-.993L3 2h3zm15 5a1 1 0 0 1 .117 1.993L21 9H9a1 1 0 0 1-.117-1.993L9 7h12zm0-3a1 1 0 0 1 .117 1.993L21 6H9a1 1 0 0 1-.117-1.993L9 4h12z" })
        )
    ),
    team: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M10 0c5.52 0 10 4.48 10 10s-4.48 10-10 10S0 15.52 0 10S4.48 0 10 0zm0 .5C4.75.5.5 4.75.5 10s4.25 9.5 9.5 9.5s9.5-4.25 9.5-9.5S15.25.5 10 .5zm0 1c4.7 0 8.5 3.8 8.5 8.5s-3.8 8.5-8.5 8.5s-8.5-3.8-8.5-8.5S5.3 1.5 10 1.5zm1.8 1.71c-.57 0-1.1.17-1.55.45a3.55 3.55 0 0 1 2.73 3.45c0 .69-.21 1.33-.55 1.87a2.917 2.917 0 0 0 2.29-2.85c0-1.61-1.31-2.92-2.92-2.92zm-2.38 1a2.926 2.926 0 1 0 .011 5.851A2.926 2.926 0 0 0 9.42 4.21zm4.25 5.01l-.51.59c2.34.69 2.45 3.61 2.45 3.61h1.28c0-4.71-3.22-4.2-3.22-4.2zm-2.1.8l-2.12 2.09l-2.12-2.09C3.12 10.24 3.89 15 3.89 15h11.08c.47-4.98-3.4-4.98-3.4-4.98z" })
    ),
    testimonial: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M8.54 12.74c0-.87-.24-1.61-.72-2.22c-.73-.92-2.14-1.03-2.96-.85c-.34-1.93 1.3-4.39 3.42-5.45L6.65 1.94C3.45 3.46.31 6.96.85 11.37C1.19 14.16 2.8 16 5.08 16c1 0 1.83-.29 2.48-.88c.66-.59.98-1.38.98-2.38zm9.43 0c0-.87-.24-1.61-.72-2.22c-.73-.92-2.14-1.03-2.96-.85c-.34-1.93 1.3-4.39 3.42-5.45l-1.63-2.28c-3.2 1.52-6.34 5.02-5.8 9.43c.34 2.79 1.95 4.63 4.23 4.63c1 0 1.83-.29 2.48-.88c.66-.59.98-1.38.98-2.38z" })
    ),
    testimonial_slider: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M4 3h12c.55 0 1.02.2 1.41.59S18 4.45 18 5v7c0 .55-.2 1.02-.59 1.41S16.55 14 16 14h-1l-5 5v-5H4c-.55 0-1.02-.2-1.41-.59S2 12.55 2 12V5c0-.55.2-1.02.59-1.41S3.45 3 4 3zm11 2H4v1h11V5zm1 3H4v1h12V8zm-3 3H4v1h9v-1z" })
    ),
    video_popup: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M19 15V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2zM8 14V6l6 4z" })
    ),
    wp_search: svgIcon("svg", { width: 20, height: 20 },
        svgIcon("path", { fill: "#ff6f61", d: "M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6z" }),
        svgIcon("path", { fill: "#ff6f61", d: "M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z" })
    ),
    carousel_left: svgIcon("svg", { width: 20, height: 20, viewBox: "0 0 256 512" },
        svgIcon("path", { d: "M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" }),
    ),
    carousel_right: svgIcon("svg", { width: 20, height: 20, viewBox: "0 0 256 512" },
        svgIcon("path", { d: "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" }),
    ),
    image_block: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.9655 0H1.03448C0.465517 0 0 0.465517 0 1.03448V18.9655C0 19.5345 0.465517 20 1.03448 20H18.9655C19.5345 20 20 19.5345 20 18.9655V1.03448C20 0.465517 19.5345 0 18.9655 0ZM0.689655 14.9724L8.92759 7.67586L13.6103 13.3207C8.66552 15.3724 2.74138 17.4448 0.689655 16.769V14.9724ZM19.3103 18.9655C19.3103 19.1552 19.1552 19.3103 18.9655 19.3103H1.03448C0.844828 19.3103 0.689655 19.1552 0.689655 18.9655V17.4759C0.972414 17.5379 1.28966 17.5724 1.65172 17.5724C6.28276 17.5724 16.8621 12.7034 19.3103 11.5448V18.9655ZM13.6621 12.3034L17.2241 8.71035L19.1 10.8862C17.8655 11.4759 16.1621 12.2483 14.2759 13.0448L13.6621 12.3034ZM19.3103 10.0724L17.5034 7.97586C17.4414 7.90345 17.3517 7.85862 17.2552 7.85517C17.1552 7.84828 17.0655 7.88966 16.9966 7.95517L13.2207 11.769L9.23103 6.95862C9.17241 6.88621 9.08621 6.84138 8.9931 6.83448C8.9 6.82759 8.8069 6.85862 8.73793 6.92069L0.689655 14.0517V1.03448C0.689655 0.844828 0.844828 0.689655 1.03448 0.689655H18.9655C19.1552 0.689655 19.3103 0.844828 19.3103 1.03448V10.0724Z" fill="#FF6F61" />
        <path d="M14.8276 2.41382C13.6863 2.41382 12.7587 3.3414 12.7587 4.48278C12.7587 5.62416 13.6863 6.55175 14.8276 6.55175C15.969 6.55175 16.8966 5.62416 16.8966 4.48278C16.8966 3.3414 15.969 2.41382 14.8276 2.41382ZM14.8276 5.86209C14.0656 5.86209 13.4483 5.24485 13.4483 4.48278C13.4483 3.72071 14.0656 3.10347 14.8276 3.10347C15.5897 3.10347 16.2069 3.72071 16.2069 4.48278C16.2069 5.24485 15.5897 5.86209 14.8276 5.86209Z" fill="#FF6F61" />
        <path d="M15.1725 17.5862H17.2414C17.4311 17.5862 17.5863 17.431 17.5863 17.2414C17.5863 17.0517 17.4311 16.8965 17.2414 16.8965H15.1725C14.9828 16.8965 14.8276 17.0517 14.8276 17.2414C14.8276 17.431 14.9828 17.5862 15.1725 17.5862Z" fill="#FF6F61" />
        <path d="M15.1725 16.2069H17.2414C17.4311 16.2069 17.5863 16.0517 17.5863 15.862C17.5863 15.6724 17.4311 15.5172 17.2414 15.5172H15.1725C14.9828 15.5172 14.8276 15.6724 14.8276 15.862C14.8276 16.0517 14.9828 16.2069 15.1725 16.2069Z" fill="#FF6F61" />
    </svg>,
    popup: <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 0.5H7.97375C6.6 0.5 5.5 1.6 5.5 2.975V13C5.5 14.375 6.625 15.5 8 15.5H18C19.375 15.5 20.5 14.375 20.5 13V3C20.5 1.625 19.375 0.5 18 0.5ZM18 13H8V3H18V13ZM3 10.5H0.5V18C0.5 19.375 1.625 20.5 3 20.5H10.5V18H3V10.5Z" fill="#FE6E5A" /></svg>,
    template_library: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false"><path fill="#FF6F61" d="M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"></path></svg>,
    form: <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="7" width="23" height="33" rx="1" stroke="#FE6E5A" fill="white" /><rect x="15" y="10" width="17" height="3" rx="1" stroke="#FE6E5A" fill="white" /><rect x="15" y="16" width="17" height="4" rx="1" stroke="#FE6E5A" fill="white" /><rect x="15" y="23" width="17" height="14" rx="1" stroke="#FE6E5A" fill="white" /></svg>,
    formInput: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="o-block-icon" aria-hidden="true" focusable="false"><path fill="#FE6E5A" fillRule="evenodd" d="M19 10H5v4h14v-4ZM5 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H5Z" clipRule="evenodd"></path><path fill="#FE6E5A" d="M6 12.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Z"></path></svg>,

    container: <svg className="rbea-editor-icons" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <g clipPath="url(#clip0_2270_1135)">
            <rect x="4.16663" y="4.16666" width="16.6667" height="7.29167" rx="1" stroke="url(#paint0_linear_2270_1135)" strokeWidth="1.5" />
            <rect x="4.16663" y="14.5833" width="6.25" height="6.25" rx="1" stroke="url(#paint1_linear_2270_1135)" strokeWidth="1.5" />
            <rect x="14.5834" y="14.5833" width="6.25" height="6.25" rx="1" stroke="url(#paint2_linear_2270_1135)" strokeWidth="1.5" />
        </g>
        <defs>
            <linearGradient id="paint0_linear_2270_1135" x1="12.5" y1="4.16666" x2="12.5" y2="11.4583" gradientUnits="userSpaceOnUse" > <stop offset="0" stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint1_linear_2270_1135" x1="7.29163" y1="14.5833" x2="7.29163" y2="20.8333" gradientUnits="userSpaceOnUse" > <stop offset="0" stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <linearGradient id="paint2_linear_2270_1135" x1="17.7084" y1="14.5833" x2="17.7084" y2="20.8333" gradientUnits="userSpaceOnUse" > <stop offset="0" stopColor="#7C29C4" /> <stop offset="1" stopColor="#2D2C52" /></linearGradient>
            <clipPath id="clip0_2270_1135">
                <rect width="25" height="25" fill="white" />
            </clipPath>
        </defs>
        </svg>,
}


export default ResponsiveBlockEditorAddonsIcons;
