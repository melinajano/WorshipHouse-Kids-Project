function changeImage(buttonNumber, direction) {
    const imageElement = document.getElementById('carousel-image');
    imageElement.classList.remove('slide-left', 'slide-right'); 

    if (direction === 'left') {
        imageElement.classList.add('slide-left');
    } else if (direction === 'right') {
        imageElement.classList.add('slide-right');
    }


    setTimeout(() => {
        if (buttonNumber === 1 || buttonNumber === 2) {
            imageElement.src = 'ultimate-song-sale_1280_426_copy (2).jpg'; 
        }
        imageElement.classList.remove('slide-left', 'slide-right'); 
    }, 500); 
}


