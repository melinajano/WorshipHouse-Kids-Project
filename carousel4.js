const carousel4 = document.querySelector(".carousel4");
const container = document.querySelector(".carousel4-container");

let scrollAmount = 0;
const maxScroll = carousel4.scrollHeight - container.clientHeight;

container.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollAmount += event.deltaY;
    
    // Prevent scrolling past the limits
    scrollAmount = Math.max(0, Math.min(scrollAmount, maxScroll));

    carousel4.style.transform = `translateY(${-scrollAmount}px)`;
});
