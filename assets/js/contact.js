/* =====================================================
   CONTACT FAQ SWITCHER
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const questions = document.querySelectorAll(
        ".contact-faq__question"
    );

    const answers = document.querySelectorAll(
        ".contact-faq__answer"
    );


    questions.forEach(function (question) {

        question.addEventListener("click", function () {

            const selectedIndex = this.dataset.faq;


            /* -------------------------
               QUESTIONS
            -------------------------- */

            questions.forEach(function (item) {

                item.classList.remove("active");

                item.setAttribute(
                    "aria-selected",
                    "false"
                );

            });


            this.classList.add("active");

            this.setAttribute(
                "aria-selected",
                "true"
            );


            /* -------------------------
               ANSWERS
            -------------------------- */

            answers.forEach(function (answer) {

                answer.classList.remove("active");

            });


            const selectedAnswer = document.querySelector(
                '.contact-faq__answer[data-answer="' +
                selectedIndex +
                '"]'
            );


            if (selectedAnswer) {

                selectedAnswer.classList.add("active");

            }

        });

    });

});