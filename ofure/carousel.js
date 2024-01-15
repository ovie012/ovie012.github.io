//REFACTORED CODE
// Function to initialize a slider for a given carousel
const initSlider = (carouselSelector, buttonSelector, scrollbarSelector, thumbSelector) => {
    // Select necessary DOM elements
    const imageList = document.querySelector(carouselSelector);
    const slideButtons = document.querySelectorAll(buttonSelector);
    const sliderScrollBar = document.querySelector(scrollbarSelector);
    const scrollBarThumb = sliderScrollBar.querySelector(thumbSelector);
    
    // Calculate the maximum scroll distance
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth * 1.01;

    // Function to handle the visibility of slide buttons based on scroll position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    };

    // Event listener for the mouse down event on the scrollbar thumb
    scrollBarThumb.addEventListener('mousedown', (e) => {
        // Capture initial mouse position and thumb position
        const startX = e.clientX;
        const thumbPosition = scrollBarThumb.offsetLeft;

        // Function to handle thumb movement during mouse drag
        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

            // Ensure the thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            // Update thumb and scroll position
            scrollBarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        };

        // Function to remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        // Add event listeners for mouse move and mouse up
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });

    // Event listener for slide button clicks
    slideButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.id === 'prev-slide' ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    });

    // Function to update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
        scrollBarThumb.style.left = `${thumbPosition}px`;
    };

    // Event listener for the image list scroll event
    imageList.addEventListener('scroll', () => {
        // Update slide buttons and scrollbar thumb position
        handleSlideButtons();
        updateScrollThumbPosition();
    });

    // Ensure slide buttons are set correctly when the page loads
    handleSlideButtons();
};

// Event listener for the 'load' event to initialize sliders for different carousels
window.addEventListener('load', () => {
    initSlider('.carousel-collection .carousel', '.carousel-collection .slide-button', '.slider-scrollbar', '.scrollbar-thumb');
    initSlider('.carousel-collection-1 .carousel-1', '.carousel-collection-1 .slide-button-1', '.slider-scrollbar-1', '.scrollbar-thumb-1');
    initSlider('.carousel-collection-2 .carousel-2', '.carousel-collection-2 .slide-button-2', '.slider-scrollbar-2', '.scrollbar-thumb-2');
    initSlider('.carousel-collection-3 .carousel-3', '.carousel-collection-3 .slide-button-3', '.slider-scrollbar-3', '.scrollbar-thumb-3');
    initSlider('.carousel-collection-4 .carousel-4', '.carousel-collection-4 .slide-button-4', '.slider-scrollbar-4', '.scrollbar-thumb-4');
});
