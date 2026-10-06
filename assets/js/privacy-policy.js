/* =========================================================
   AURIA
   PRIVACY POLICY PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const html = document.documentElement;

    const themeToggle =
        document.getElementById("theme-toggle");

    const rtlToggle =
        document.getElementById("rtl-toggle");


    /* =====================================================
       LUCIDE
    ====================================================== */

    function initializeIcons() {

        if (
            typeof lucide !== "undefined" &&
            typeof lucide.createIcons === "function"
        ) {

            lucide.createIcons();

        }

    }


    initializeIcons();


    /* =====================================================
       THEME
    ====================================================== */

    const savedTheme =
        localStorage.getItem("auria-theme");


    const initialTheme =
        savedTheme === "dark"
            ? "dark"
            : "light";


    html.setAttribute(
        "data-theme",
        initialTheme
    );


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                const currentTheme =
                    html.getAttribute(
                        "data-theme"
                    );


                const newTheme =
                    currentTheme === "dark"
                        ? "light"
                        : "dark";


                html.setAttribute(
                    "data-theme",
                    newTheme
                );


                localStorage.setItem(
                    "auria-theme",
                    newTheme
                );

            }
        );

    }


    /* =====================================================
       RTL
    ====================================================== */

    const savedDirection =
        localStorage.getItem(
            "auria-direction"
        );


    const initialDirection =
        savedDirection === "rtl"
            ? "rtl"
            : "ltr";


    html.setAttribute(
        "dir",
        initialDirection
    );


    updateRTLButton(
        initialDirection
    );


    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            function () {

                const currentDirection =
                    html.getAttribute("dir");


                const newDirection =
                    currentDirection === "rtl"
                        ? "ltr"
                        : "rtl";


                html.setAttribute(
                    "dir",
                    newDirection
                );


                localStorage.setItem(
                    "auria-direction",
                    newDirection
                );


                updateRTLButton(
                    newDirection
                );

            }
        );

    }


    /* =====================================================
       RTL BUTTON
    ====================================================== */

    function updateRTLButton(direction) {

        if (!rtlToggle) {
            return;
        }


        rtlToggle.textContent =
            direction === "rtl"
                ? "LTR"
                : "RTL";


        rtlToggle.setAttribute(
            "aria-label",
            direction === "rtl"
                ? "Switch to left to right layout"
                : "Switch to right to left layout"
        );

    }

});