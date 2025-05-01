const questions = document.querySelectorAll(".questionFrame");

questions.forEach(q => {
    const answer = q.querySelector("p");
    const icon = q.querySelector("img");

    q.addEventListener("click", function () {
        const isOpen = answer.style.display === "block";

        // Close all answers and reset icons and rotation
        questions.forEach(otherQ => {
            const otherAnswer = otherQ.querySelector("p");
            const otherIcon = otherQ.querySelector("img");

            otherAnswer.style.display = "none";
            otherIcon.src = "./images/icon-plus.svg";
            otherQ.classList.remove("open"); // Remove rotation class
        });

        // Toggle this one if the answer wasn't already open
        if (!isOpen) {
            answer.style.display = "block";
            icon.src = "./images/icon-minus.svg";
            q.classList.add("open"); // Add rotation class
        }
    });
});

