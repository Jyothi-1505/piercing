/* =========================================================
   AURIA
   GLOBAL JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       ELEMENTS
    ====================================================== */
    if (typeof lucide !== "undefined") {
    lucide.createIcons();
}

    const html = document.documentElement;

    const siteHeader =
        document.getElementById("site-header");

    const themeToggle =
        document.getElementById("theme-toggle");

    const rtlToggle =
        document.getElementById("rtl-toggle");

    const mobileMenuToggle =
        document.getElementById("mobile-menu-toggle");

    const mainNavigation =
        document.getElementById("main-navigation");

    const homeDropdownToggle =
        document.getElementById("home-dropdown-toggle");

    const homeDropdownItem =
        homeDropdownToggle
            ? homeDropdownToggle.closest(
                ".navigation-item--dropdown"
            )
            : null;

    const homeDropdown =
        document.getElementById("home-dropdown");


    /* =====================================================
       LUCIDE ICONS
    ====================================================== */

    // function initializeIcons() {

    //     if (typeof lucide !== "undefined") {

    //         lucide.createIcons();

    //     }

    // }


    // initializeIcons();


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


    /* =====================================================
       THEME TOGGLE
    ====================================================== */

    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                const currentTheme =
                    html.getAttribute("data-theme");


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


                updateLogo(newTheme);

            }
        );

    }


    /* =====================================================
       LOGO THEME
    ====================================================== */

    // function updateLogo(theme) {

    //     const logos =
    //         document.querySelectorAll(
    //             "[data-light-logo]"
    //         );


    //     logos.forEach(function (logo) {

    //         const lightLogo =
    //             logo.getAttribute(
    //                 "data-light-logo"
    //             );


    //         const darkLogo =
    //             logo.getAttribute(
    //                 "data-dark-logo"
    //             );


    //         if (
    //             theme === "dark" &&
    //             darkLogo
    //         ) {

    //             logo.src = darkLogo;

    //         } else if (lightLogo) {

    //             logo.src = lightLogo;

    //         }

    //     });

    // }


    // updateLogo(
    //     html.getAttribute("data-theme")
    // );


    /* =====================================================
       RTL / LTR
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


    /* =====================================================
       RTL TOGGLE
    ====================================================== */

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
       UPDATE RTL BUTTON
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


    /* =====================================================
       HOME DROPDOWN
    ====================================================== */

    function closeHomeDropdown() {

        if (!homeDropdownItem) {
            return;
        }


        homeDropdownItem.classList.remove(
            "is-open"
        );


        if (homeDropdownToggle) {

            homeDropdownToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    function toggleHomeDropdown() {

        if (
            !homeDropdownToggle ||
            !homeDropdownItem
        ) {
            return;
        }


        const isMobile =
            window.innerWidth <= 768;


        /*
         * Desktop:
         * Dropdown is controlled completely
         * through CSS hover.
         */

        if (!isMobile) {
            return;
        }


        const isOpen =
            homeDropdownItem.classList.toggle(
                "is-open"
            );


        homeDropdownToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    }


    if (
        homeDropdownToggle &&
        homeDropdownItem
    ) {

        homeDropdownToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                toggleHomeDropdown();

            }
        );

    }


    /* =====================================================
       MOBILE MENU
    ====================================================== */

    function closeMobileMenu() {

        if (mobileMenuToggle) {

            mobileMenuToggle.classList.remove(
                "is-open"
            );


            mobileMenuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }


        if (mainNavigation) {

            mainNavigation.classList.remove(
                "is-open"
            );

        }


        /*
         * Always close Home dropdown when
         * the mobile navigation closes.
         */

        closeHomeDropdown();

    }


    function openMobileMenu() {

        if (!mobileMenuToggle) {
            return;
        }


        mobileMenuToggle.classList.add(
            "is-open"
        );


        mobileMenuToggle.setAttribute(
            "aria-expanded",
            "true"
        );


        if (mainNavigation) {

            mainNavigation.classList.add(
                "is-open"
            );

        }

    }


    function toggleMobileMenu() {

        if (!mobileMenuToggle) {
            return;
        }


        const isOpen =
            mobileMenuToggle.classList.contains(
                "is-open"
            );


        if (isOpen) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    }


    if (mobileMenuToggle) {

        mobileMenuToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                toggleMobileMenu();

            }
        );

    }


    /* =====================================================
       MOBILE NAVIGATION LINKS
    ====================================================== */

    if (mainNavigation) {

        const navigationLinks =
            mainNavigation.querySelectorAll(
                "a"
            );


        navigationLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        /*
                         * Do not prevent navigation.
                         * Just close the mobile menu.
                         */

                        if (
                            window.innerWidth <= 768
                        ) {

                            closeMobileMenu();

                        }

                    }
                );

            }
        );

    }


    /* =====================================================
       OUTSIDE CLICK
    ====================================================== */

    document.addEventListener(
        "click",
        function (event) {


            /*
             * Close Home dropdown if user
             * clicks outside the Home item.
             */

            if (
                homeDropdownItem &&
                !homeDropdownItem.contains(
                    event.target
                )
            ) {

                closeHomeDropdown();

            }


            /*
             * Close complete mobile menu if
             * user clicks outside it.
             */

            if (
                mainNavigation &&
                mobileMenuToggle &&
                !mainNavigation.contains(
                    event.target
                ) &&
                !mobileMenuToggle.contains(
                    event.target
                )
            ) {

                if (
                    window.innerWidth <= 768
                ) {

                    closeMobileMenu();

                }

            }

        }
    );


    /* =====================================================
       RESIZE
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {

            /*
             * Mobile menu and mobile dropdown
             * should not remain open after
             * switching to desktop.
             */

            if (window.innerWidth > 768) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       STICKY HEADER
    ====================================================== */

    function updateHeader() {

        if (!siteHeader) {
            return;
        }


        if (window.scrollY > 20) {

            siteHeader.classList.add(
                "is-scrolled"
            );

        } else {

            siteHeader.classList.remove(
                "is-scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();


    /* =====================================================
       ACTIVE PAGE
    ====================================================== */

    setActiveNavigation();


    function setActiveNavigation() {

        let currentFile =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        /*
         * When the URL does not contain a filename,
         * treat it as Home 1.
         */

        if (!currentFile) {

            currentFile = "index.html";

        }


        const navigationLinks =
            document.querySelectorAll(
                ".navigation-link[data-page]"
            );


        /*
         * Support BOTH:
         *
         * .home-dropdown__link
         *
         * and the older
         *
         * .dropdown-link
         *
         * so the JS remains compatible.
         */

        const dropdownLinks =
            document.querySelectorAll(
                ".home-dropdown__link[data-page], .dropdown-link[data-page]"
            );


        /* ---------------------------------------------
           REMOVE EXISTING ACTIVE STATES
        --------------------------------------------- */

        navigationLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );

            }
        );


        dropdownLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );

            }
        );


        /* ---------------------------------------------
           HOME 1
        --------------------------------------------- */

        if (
            currentFile === "index.html"
        ) {

            activateHome(
                "home1"
            );

            return;

        }


        /* ---------------------------------------------
           HOME 2
        --------------------------------------------- */

        if (
            currentFile === "home2.html"
        ) {

            activateHome(
                "home2"
            );

            return;

        }


        /* ---------------------------------------------
           OTHER PAGES
        --------------------------------------------- */

        navigationLinks.forEach(
            function (link) {

                const page =
                    link.getAttribute(
                        "data-page"
                    );


                if (
                    page &&
                    currentFile.includes(
                        page.toLowerCase()
                    )
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }


    /* =====================================================
       ACTIVATE HOME
    ====================================================== */

    function activateHome(homePage) {

        const homeToggle =
            document.getElementById(
                "home-dropdown-toggle"
            );


        const dropdownLink =
            document.querySelector(
                '.home-dropdown__link[data-page="' +
                homePage +
                '"], ' +
                '.dropdown-link[data-page="' +
                homePage +
                '"]'
            );


        /*
         * Home itself becomes active.
         */

        if (homeToggle) {

            homeToggle.classList.add(
                "active"
            );

        }


        /*
         * Correct Home 1 / Home 2 item
         * becomes active.
         */

        if (dropdownLink) {

            dropdownLink.classList.add(
                "active"
            );

        }

    }


    /* =====================================================
       SCROLL REVEAL
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .reveal-left, .reveal-right, .reveal-scale"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                function (
                    entries,
                    observer
                ) {

                    entries.forEach(
                        function (entry) {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );


                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12,

                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            function (element) {

                revealObserver.observe(
                    element
                );

            }
        );


    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "is-visible"
                );

            }
        );

    }


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeMobileMenu();

            }

        }
    );


});
