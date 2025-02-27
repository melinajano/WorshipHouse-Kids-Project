let currentIndex = 0;
const totalItems = 5;  
const visibleItems = 4;  
const carousel3 = document.getElementById('carousel3');

function moveSlide(direction) {
    
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = totalItems - visibleItems;
    if (currentIndex > totalItems - visibleItems) currentIndex = totalItems - visibleItems;

    carousel3.style.transform = `translateX(-${(currentIndex * 100) / visibleItems}%)`;
}
