document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("slider2");
    const games = document.querySelectorAll(".game");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    let currentIndex = Math.floor(games.length / 2); // Start with the middle image
  
    function updateCarousel() {
      const gameWidth = games[0].offsetWidth; // Width of one game item
      const sliderWidth = slider.offsetWidth; // Width of the slider container
      const scrollPosition = currentIndex * gameWidth - (sliderWidth / 2 - gameWidth / 2); // Center the active image
  
      slider.scrollTo({ left: scrollPosition, behavior: "smooth" });
  
      // Reset all images to normal scale
      games.forEach(game => {
        game.style.transform = "scale(1)";
        game.style.transition = "transform 0.3s ease-in-out";
      });
  
      // Zoom the centered image
      games[currentIndex].style.transform = "scale(1.2)";
    }
  
    function nextGame() {
      currentIndex = (currentIndex + 1) % games.length; // Move to the next image
      updateCarousel();
    }
  
    function prevGame() {
      currentIndex = (currentIndex - 1 + games.length) % games.length; // Move to the previous image
      updateCarousel();
    }
  
    // Event listeners for navigation buttons
    nextBtn.addEventListener("click", nextGame);
    prevBtn.addEventListener("click", prevGame);
  
    // Initialize the carousel
    updateCarousel();
  });