document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider2");
    const games = document.querySelectorAll(".game");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentIndex = 0;

    function updateCarousel() {
        const gameWidth = games[0].offsetWidth; 
        const scrollPosition = currentIndex * gameWidth; 

        slider.scrollTo({ left: scrollPosition, behavior: "smooth" });

        games.forEach(game => {
            game.style.transform = "scale(1)";
            game.style.transition = "transform 0.3s ease-in-out";
        });


        games[currentIndex].style.transform = "scale(1.2)";
    }

    function nextGame() {
        currentIndex = (currentIndex + 1) % games.length; 
        updateCarousel();
    }

    function prevGame() {
        currentIndex = (currentIndex - 1 + games.length) % games.length; 
        updateCarousel();
    }

    nextBtn.addEventListener("click", nextGame);
    prevBtn.addEventListener("click", prevGame);

    updateCarousel(); 
});


