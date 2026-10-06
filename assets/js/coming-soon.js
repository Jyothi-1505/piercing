/* =========================================================
   AURIA
   COMING SOON PAGE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const html = document.documentElement;

    const themeToggle =
        document.getElementById("theme-toggle");

    const rtlToggle =
        document.getElementById("rtl-toggle");


    /* =====================================================
       COUNTDOWN ELEMENTS
    ====================================================== */

    const daysElement =
        document.getElementById("countdown-days");

    const hoursElement =
        document.getElementById("countdown-hours");

    const minutesElement =
        document.getElementById("countdown-minutes");

    const secondsElement =
        document.getElementById("countdown-seconds");

    const countdownElement =
        document.getElementById("coming-countdown");

    const statusElement =
        document.getElementById("countdown-status");


    /* =====================================================
       LAUNCH DATE

       CHANGE ONLY THIS DATE WHEN NEEDED.

       Format:
       YYYY-MM-DDTHH:MM:SS

       This example launches on:
       December 1, 2026 at 12:00 AM
    ====================================================== */

    const launchDate =
        new Date("2026-12-01T00:00:00");


    let countdownInterval = null;


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
       FORMAT NUMBER
    ====================================================== */

    function formatNumber(number) {

        return String(number).padStart(2, "0");

    }


    /* =====================================================
       UPDATE COUNTDOWN
    ====================================================== */

    function updateCountdown() {

        const currentTime =
            new Date().getTime();


        const launchTime =
            launchDate.getTime();


        const remainingTime =
            launchTime - currentTime;


        /* ================================================
           COUNTDOWN FINISHED
        ================================================= */

        if (remainingTime <= 0) {

            daysElement.textContent = "00";

            hoursElement.textContent = "00";

            minutesElement.textContent = "00";

            secondsElement.textContent = "00";


            if (statusElement) {

                statusElement.textContent =
                    "WE'RE LIVE";

            }


            if (countdownElement) {

                countdownElement.classList.add(
                    "is-complete"
                );

            }


            if (countdownInterval !== null) {

                clearInterval(
                    countdownInterval
                );

                countdownInterval = null;

            }


            return;

        }


        /* ================================================
           CALCULATE TIME
        ================================================= */

        const totalSeconds =
            Math.floor(
                remainingTime / 1000
            );


        const days =
            Math.floor(
                totalSeconds / 86400
            );


        const hours =
            Math.floor(
                (totalSeconds % 86400) / 3600
            );


        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );


        const seconds =
            totalSeconds % 60;


        /* ================================================
           DISPLAY
        ================================================= */

        daysElement.textContent =
            formatNumber(days);


        hoursElement.textContent =
            formatNumber(hours);


        minutesElement.textContent =
            formatNumber(minutes);


        secondsElement.textContent =
            formatNumber(seconds);

    }


    /* =====================================================
       START COUNTDOWN
    ====================================================== */

    updateCountdown();


    countdownInterval =
        setInterval(
            updateCountdown,
            1000
        );


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