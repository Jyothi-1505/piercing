document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       PRODUCT FILTERS
    ====================================================== */

    const filters = document.querySelectorAll(
        ".shop-products__filter"
    );

    const products = document.querySelectorAll(
        ".shop-product"
    );


    filters.forEach(function (filter) {

        filter.addEventListener("click", function () {

            const selectedCategory =
                this.dataset.filter;

            filters.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");


            products.forEach(function (product) {

                const productCategory =
                    product.dataset.category;

                if (
                    selectedCategory === "all" ||
                    productCategory === selectedCategory
                ) {

                    product.style.display = "";

                } else {

                    product.style.display = "none";

                }

            });

        });

    });


    /* =====================================================
       PRODUCT QUICK VIEW DATA
    ====================================================== */

    const productData = {

        "minimal-gold-stud": {
            title: "Minimal Gold Stud",
            price: "₹1,299",
            material: "14K Gold",
            category: "Studs",
            suitable: "Ear Piercing",
            collection: "AURIA COLLECTION",
            number: "01",
            image: "./assets/images/jewelry-shop/1.jpg",
            description:
                "A refined everyday stud designed for effortless styling and a clean, understated finish."
        },

        "classic-mini-hoop": {
            title: "Classic Mini Hoop",
            price: "₹1,599",
            material: "14K Gold",
            category: "Hoops",
            suitable: "Ear Piercing",
            collection: "ESSENTIAL HOOPS",
            number: "02",
            image: "./assets/images/jewelry-shop/2.jpg",
            description:
                "A timeless mini hoop with a polished silhouette made for everyday wear."
        },

        "signature-stack-ring": {
            title: "Signature Stack Ring",
            price: "₹1,899",
            material: "14K Gold",
            category: "Rings",
            suitable: "Curated Styling",
            collection: "AURIA SIGNATURE",
            number: "03",
            image: "./assets/images/jewelry-shop/3.jpg",
            description:
                "A delicate stacking ring designed to layer beautifully with your existing jewelry."
        },

        "delicate-chain": {
            title: "Delicate Chain",
            price: "₹2,199",
            material: "14K Gold",
            category: "Chains",
            suitable: "Ear Styling",
            collection: "FINE DETAILS",
            number: "04",
            image: "./assets/images/jewelry-shop/4.jpg",
            description:
                "A fine chain designed to add subtle movement and dimension to your jewelry styling."
        },

        "petite-star-charm": {
            title: "Petite Star Charm",
            price: "₹999",
            material: "14K Gold",
            category: "Charms",
            suitable: "Personal Styling",
            collection: "AURIA CHARMS",
            number: "05",
            image: "./assets/images/jewelry-shop/5.jpg",
            description:
                "A petite star charm created as a personal finishing detail for curated jewelry combinations."
        },

        "classic-flatback": {
            title: "Classic Flatback",
            price: "₹1,199",
            material: "Titanium",
            category: "Flatbacks",
            suitable: "Ear Piercing",
            collection: "PIERCING ESSENTIALS",
            number: "06",
            image: "./assets/images/jewelry-shop/6.jpg",
            description:
                "A clean flatback silhouette designed for comfortable everyday ear styling."
        },

        "auria-signature-set": {
            title: "AURIA Signature Set",
            price: "₹2,799",
            material: "14K Gold",
            category: "Curated Sets",
            suitable: "Curated Styling",
            collection: "AURIA EDIT",
            number: "07",
            image: "./assets/images/jewelry-shop/7.jpg",
            description:
                "A curated combination of signature pieces designed to work together effortlessly."
        },

        "delicate-ear-chain": {
            title: "Delicate Ear Chain",
            price: "₹1,899",
            material: "14K Gold",
            category: "Chains",
            suitable: "Ear Styling",
            collection: "FINE DETAILS",
            number: "08",
            image: "./assets/images/jewelry-shop/8.jpg",
            description:
                "A delicate ear chain that brings a refined, editorial finish to your piercing arrangement."
        }

    };


    /* =====================================================
       MODAL ELEMENTS
    ====================================================== */

    const modal =
        document.getElementById("product-modal");

    const modalBackdrop =
        document.getElementById("product-modal-backdrop");

    const modalClose =
        document.getElementById("product-modal-close");

    const modalCloseBottom =
        document.getElementById("product-modal-close-bottom");

    const modalImage =
        document.getElementById("product-modal-image");

    const modalCategory =
        document.getElementById("product-modal-category");

    const modalNumber =
        document.getElementById("product-modal-number");

    const modalCollection =
        document.getElementById("product-modal-collection");

    const modalTitle =
        document.getElementById("product-modal-title");

    const modalPrice =
        document.getElementById("product-modal-price");

    const modalDescription =
        document.getElementById("product-modal-description");

    const modalMaterial =
        document.getElementById("product-modal-material");

    const modalType =
        document.getElementById("product-modal-type");

    const modalSuitable =
        document.getElementById("product-modal-suitable");


    /* =====================================================
       OPEN MODAL
    ====================================================== */

    function openProductModal(productId) {

        const product =
            productData[productId];

        if (!product || !modal) {
            return;
        }


        modalTitle.textContent =
            product.title;

        modalPrice.textContent =
            product.price;

        modalDescription.textContent =
            product.description;

        modalMaterial.textContent =
            product.material;

        modalType.textContent =
            product.category;

        modalSuitable.textContent =
            product.suitable;

        modalCollection.textContent =
            product.collection;

        modalNumber.textContent =
            product.number;

        modalCategory.textContent =
            "AURIA / " +
            product.category.toUpperCase();


        modalImage.src =
            product.image;

        modalImage.alt =
            product.title;


        modal.classList.add("is-open");

        modal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "product-modal-open"
        );


        /* Refresh Lucide icons */
        if (
            typeof lucide !== "undefined" &&
            typeof lucide.createIcons === "function"
        ) {
            lucide.createIcons();
        }

    }


    /* =====================================================
       CLOSE MODAL
    ====================================================== */

    function closeProductModal() {

        if (!modal) {
            return;
        }

        modal.classList.remove("is-open");

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "product-modal-open"
        );

    }


    /* =====================================================
       VIEW PRODUCT BUTTONS
    ====================================================== */

    const viewButtons =
        document.querySelectorAll(
            ".shop-product__view[data-product]"
        );


    viewButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                const productId =
                    this.dataset.product;

                openProductModal(productId);

            }
        );

    });


    /* =====================================================
       CLOSE BUTTON
    ====================================================== */

    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProductModal
        );

    }


    if (modalCloseBottom) {

        modalCloseBottom.addEventListener(
            "click",
            closeProductModal
        );

    }


    /* =====================================================
       CLOSE BY BACKDROP
    ====================================================== */

    if (modalBackdrop) {

        modalBackdrop.addEventListener(
            "click",
            closeProductModal
        );

    }


    /* =====================================================
       CLOSE WITH ESCAPE
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modal &&
                modal.classList.contains("is-open")
            ) {

                closeProductModal();

            }

        }
    );


});