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



// Original Code:
// The original code contains separate functions for initializing sliders for different carousels (Best seller, Earrings, Necklace, Bracelets, and Rings). Each function is defined separately, and there is some redundancy in terms of structure and functionality.

// Refactored Code:
// The refactored code introduces a single, reusable function called initSlider. This function takes four parameters representing the selectors for the carousel, slide buttons, slider scrollbar, and scrollbar thumb. By doing this, we eliminate the need for separate functions for each type of carousel.

// Differences:
// Function Reusability:

// Original: Multiple functions (initSlider, initSliderOne, initSliderTwo, etc.) with similar structures.
// Refactored: Single function (initSlider) that can be reused for different carousels by providing different selectors.
// Parameterization:

// Original: Each function uses hard-coded selectors for the elements inside the carousel.
// Refactored: The initSlider function takes parameters for selectors, making it adaptable to different carousels.
// Reduced Redundancy:

// Original: Similar logic is repeated in multiple functions, leading to redundancy.
// Refactored: The redundant code is consolidated into a single function, reducing duplication and improving maintainability.
// Improved Readability:

// Original: The code for each carousel is separated into different functions, making it harder to see the similarities.
// Refactored: The shared logic is concentrated in one place (initSlider), making it easier to understand and modify.
// Initialization:

// Original: Each function is individually called on the 'load' event for each type of carousel.
// Refactored: The initSlider function is called once for each type of carousel within a single 'load' event listener, streamlining the initialization process.
// Overall, the refactored code is more modular, maintainable, and efficient, as it reduces redundancy and promotes the reuse of code for different carousels.

// ORIGINAL CODE

// // Best seller carousel interactivity
// const initSlider = () => {
//     const imageList = document.querySelector('.carousel-collection .carousel');
//     const slideButtons = document.querySelectorAll('.carousel-collection .slide-button');
//     const sliderScrollBar = document.querySelector('.slider-scrollbar');
//     const scrollBarThumb = sliderScrollBar.querySelector('.scrollbar-thumb');
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth * 1.01;

//     const handleSlideButtons = () => {
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
//     };

//     scrollBarThumb.addEventListener('mousedown', (e) => {
//         const startX = e.clientX;
//         const thumbPosition = scrollBarThumb.offsetLeft;

//         const handleMouseMove = (e) => {
//             const deltaX = e.clientX - startX;
//             const newThumbPosition = thumbPosition + deltaX;
//             const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

//             const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
//             const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

//             scrollBarThumb.style.left = `${boundedPosition}px`;
//             imageList.scrollLeft = scrollPosition;
//         };

//         // remove event listeners on mouse up
//         const handleMouseUp = () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//         };

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);
//     });

//     // SLIDES IMAGE ACCORDING TO THE SLIDE BUTTON CLICKS
//     slideButtons.forEach((button) => {
//         button.addEventListener('click', () => {
//             const direction = button.id === 'prev-slide' ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//         });
//     });

//     // update scrollbar thumb position based on image scroll
//     const updateScrollThumbPosition = () => {
//         const scrollPosition = imageList.scrollLeft;
//         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
//         scrollBarThumb.style.left = `${thumbPosition}px`;
//     };

//     imageList.addEventListener('scroll', () => {
//         handleSlideButtons();
//         updateScrollThumbPosition();
//     });

//     // Ensure slideButtons[0] is set to 'none' when the page loads
//     handleSlideButtons();
// };

// window.addEventListener('load', initSlider);


// // Earrings carousel interactivity
// const initSliderOne = () => {
//     const imageList = document.querySelector('.carousel-collection-1 .carousel-1');
//     const slideButtons = document.querySelectorAll('.carousel-collection-1 .slide-button-1');
//     const sliderScrollBar = document.querySelector('.slider-scrollbar-1');
//     const scrollBarThumb = sliderScrollBar.querySelector(".scrollbar-thumb-1");
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth * 1.01;

//     scrollBarThumb.addEventListener("mousedown", (e) => {
//         const startX = e.clientX;
//         const thumbPosition = scrollBarThumb.offsetLeft;

//         const handleMouseMove = (e) => {
//             const deltaX = e.clientX - startX;
//             const newThumbPosition = thumbPosition + deltaX;
//             const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

//             const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
//             const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

//             scrollBarThumb.style.left = `${boundedPosition}px`;
//             imageList.scrollLeft = scrollPosition;
//         };

//         // remove event listeners on mouse up
//         const handleMouseUp = () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//             document.removeEventListener("mouseup", handleMouseUp);
//         };

//         document.addEventListener("mousemove", handleMouseMove);
//         document.addEventListener("mouseup", handleMouseUp);
//     });

//     // SLIDES IMAGE ACCORDING TO THE SLIDE BUTTON CLICKS
//     slideButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const direction = button.id === "prev-slide" ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
//         });
//     });

//     // handle slide button if no more images to slide
//     const handleSlideButtons = () => {
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
//     };

//     // update scrollbar thumb position based on image scroll
//     const updateScrollThumbPosition = () => {
//         const scrollPosition = imageList.scrollLeft;
//         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
//         scrollBarThumb.style.left = `${thumbPosition}px`;
//     };

//     imageList.addEventListener("scroll", () => {
//         handleSlideButtons();
//         updateScrollThumbPosition();
//     });

    
//         handleSlideButtons();
// };

// window.addEventListener('load', initSliderOne);


// // Necklace carousel section
// const initSliderTwo = () => {
//     const imageList = document.querySelector('.carousel-collection-2 .carousel-2');
//     const slideButtons = document.querySelectorAll('.carousel-collection-2 .slide-button-2');
//     const sliderScrollBar = document.querySelector('.slider-scrollbar-2');
//     const scrollBarThumb = sliderScrollBar.querySelector('.scrollbar-thumb-2');
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth * 1.01;

//     const handleSlideButtons = () => {
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
//     };

//     scrollBarThumb.addEventListener('mousedown', (e) => {
//         const startX = e.clientX;
//         const thumbPosition = scrollBarThumb.offsetLeft;

//         const handleMouseMove = (e) => {
//             const deltaX = e.clientX - startX;
//             const newThumbPosition = thumbPosition + deltaX;
//             const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

//             const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
//             const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

//             scrollBarThumb.style.left = `${boundedPosition}px`;
//             imageList.scrollLeft = scrollPosition;
//         };

//         // remove event listeners on mouse up
//         const handleMouseUp = () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//         };

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);
//     });

//     // SLIDES IMAGE ACCORDING TO THE SLIDE BUTTON CLICKS
//     slideButtons.forEach((button) => {
//         button.addEventListener('click', () => {
//             const direction = button.id === 'prev-slide' ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//         });
//     });

//     // update scrollbar thumb position based on image scroll
//     const updateScrollThumbPosition = () => {
//         const scrollPosition = imageList.scrollLeft;
//         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
//         scrollBarThumb.style.left = `${thumbPosition}px`;
//     };

//     imageList.addEventListener('scroll', () => {
//         handleSlideButtons();
//         updateScrollThumbPosition();
//     });

//     // Ensure slideButtons[0] is set to 'none' when the page loads
//     handleSlideButtons();
// };

// window.addEventListener('load', initSliderTwo);


// // Bracelets carousel sections
// const initSliderThree = () => {
//     const imageList = document.querySelector('.carousel-collection-3 .carousel-3');
//     const slideButtons = document.querySelectorAll('.carousel-collection-3 .slide-button-3');
//     const sliderScrollBar = document.querySelector('.slider-scrollbar-3');
//     const scrollBarThumb = sliderScrollBar.querySelector(".scrollbar-thumb-3");
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth * 1.01;

//     scrollBarThumb.addEventListener("mousedown", (e) => {
//         const startX = e.clientX;
//         const thumbPosition = scrollBarThumb.offsetLeft;

//         const handleMouseMove = (e) => {
//             const deltaX = e.clientX - startX;
//             const newThumbPosition = thumbPosition + deltaX;
//             const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

//             const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
//             const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

//             scrollBarThumb.style.left = `${boundedPosition}px`;
//             imageList.scrollLeft = scrollPosition;
//         }

//         // remove eventlisteners on mouse up
//         const handleMouseUp = () => {
//             document.removeEventListener("mousemove", handleMouseMove);
//             document.removeEventListener("mouseup", handleMouseUp);
//         }

//         document.addEventListener("mousemove", handleMouseMove);
//         document.addEventListener("mouseup", handleMouseUp);
//     })

//     // SLIDES IMAGE ACCORDING TO THE SLIDE BUTTON CLICKS
//     slideButtons.forEach(button => {
//         button.addEventListener("click", () => {
//             const direction = button.id === "prev-slide" ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
//         });
//     });

//     // handle slide button if no more images to slide
//     const handleSlideButtons = () => {
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
//     }

//     // update scrollbar thumb position based on image scroll
//     const updateScrollThumbPosition = () => {
//         const scrollPosition = imageList.scrollLeft;
//         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
//         scrollBarThumb.style.left = `${thumbPosition}px`;
//     }

//     imageList.addEventListener("scroll", () => {
//         handleSlideButtons();
//         updateScrollThumbPosition();
//     });

//     // Ensure slideButtons[0] is set to 'none' when the page loads
//     handleSlideButtons();
// };

// window.addEventListener('load', initSliderThree);


// // Rings carousel section
// const initSliderFour = () => {
//     const imageList = document.querySelector('.carousel-collection-4 .carousel-4');
//     const slideButtons = document.querySelectorAll('.carousel-collection-4 .slide-button-4');
//     const sliderScrollBar = document.querySelector('.slider-scrollbar-4');
//     const scrollBarThumb = sliderScrollBar.querySelector('.scrollbar-thumb-4');
//     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth * 1.01;

//     scrollBarThumb.addEventListener('mousedown', (e) => {
//         const startX = e.clientX;
//         const thumbPosition = scrollBarThumb.offsetLeft;

//         const handleMouseMove = (e) => {
//             const deltaX = e.clientX - startX;
//             const newThumbPosition = thumbPosition + deltaX;
//             const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

//             const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
//             const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

//             scrollBarThumb.style.left = `${boundedPosition}px`;
//             imageList.scrollLeft = scrollPosition;
//         };

//         // remove event listeners on mouse up
//         const handleMouseUp = () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//             document.removeEventListener('mouseup', handleMouseUp);
//         };

//         document.addEventListener('mousemove', handleMouseMove);
//         document.addEventListener('mouseup', handleMouseUp);
//     });

//     // SLIDES IMAGE ACCORDING TO THE SLIDE BUTTON CLICKS
//     slideButtons.forEach((button) => {
//         button.addEventListener('click', () => {
//             const direction = button.id === 'prev-slide' ? -1 : 1;
//             const scrollAmount = imageList.clientWidth * direction;
//             imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//         });
//     });

//     // handle slide button if no more images to slide
//     const handleSlideButtons = () => {
//         slideButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
//         slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
//     };

//     // update scrollbar thumb position based on image scroll
//     const updateScrollThumbPosition = () => {
//         const scrollPosition = imageList.scrollLeft;
//         const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
//         scrollBarThumb.style.left = `${thumbPosition}px`;
//     };

//     imageList.addEventListener('scroll', () => {
//         handleSlideButtons();
//         updateScrollThumbPosition();
//     });

//     // Ensure slideButtons[0] is set to 'none' when the page loads
//     handleSlideButtons();
// };

// window.addEventListener('load', initSliderFour);







