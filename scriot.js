document.addEventListener("DOMContentLoaded", () => {
    // Drag effect
    gsap.utils.toArray(".card").forEach(card => {
        Draggable.create(card, { bounds: ".paper" });
    });

    // Cloud clear effect
    setTimeout(() => {
        document.getElementById("clouds").style.opacity = "0";
        showBirthdayMessage();
    }, 3000);

    function showBirthdayMessage() {
        const messages = [
            "🎉 Happy Birthday 🎉",
            "🎂 Feliz Cumpleaños 🎂",
            "🎊 Joyeux Anniversaire 🎊",
            "🎁 जन्मदिन मुबारक हो 🎁",
            "🎈 Buon Compleanno 🎈",
            "🥳生日快乐 🥳",
            "🎇 お誕生日おめでとう 🎇"
        ];
        
        let index = 0;
        const msgSpan = document.getElementById("birthday-message");

        function showNextMessage() {
            if (index < messages.length) {
                msgSpan.textContent = messages[index];
                gsap.fromTo(msgSpan, { opacity: 0 }, { opacity: 1, duration: 1 });
                index++;
                setTimeout(showNextMessage, 1000);
            } else {
                showFinalEffect();
            }
        }

        showNextMessage();
    }

    function showFinalEffect() {
        document.querySelector(".baby-animal").style.display = "block";
        gsap.fromTo(".baby-animal", { scale: 0 }, { scale: 1, duration: 2 });

        setTimeout(() => {
            document.getElementById("final-message").style.display = "block";
            gsap.fromTo("#final-message", { opacity: 0 }, { opacity: 1, duration: 2 });
        }, 2000);
    }
});