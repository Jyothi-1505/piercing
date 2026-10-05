/* =========================================================
   AURIA
   BOOK APPOINTMENT JS
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           DATE
        ================================================== */

        const dateInput =
            document.getElementById(
                "appointment-date"
            );


        if (dateInput) {

            const today =
                new Date()
                    .toISOString()
                    .split("T")[0];

            dateInput.min = today;

        }



        /* =================================================
           APPOINTMENT FORM
        ================================================== */

        const appointmentForm =
            document.getElementById(
                "appointment-form"
            );


        const successMessage =
            document.getElementById(
                "appointment-success"
            );


        if (!appointmentForm) {
            return;
        }


        appointmentForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                if (
                    !appointmentForm.checkValidity()
                ) {

                    appointmentForm.reportValidity();

                    return;

                }


                if (successMessage) {

                    successMessage.classList.add(
                        "is-visible"
                    );

                    successMessage.scrollIntoView({
                        behavior: "smooth",
                        block: "nearest"
                    });

                }

            }
        );

    }
);