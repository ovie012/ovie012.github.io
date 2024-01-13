//header scroller
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if(window.scrollY > 0) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
});

// search interactivity
const searchIcon = document.querySelector('.search-icon');
const search = document.querySelector('.search');
const icon = document.querySelector('.icon');
const clear = document.querySelector('.clear');
const hideStuff = document.querySelector('.end');
const mySearch = document.getElementById('mysearch');
const footerSearch = document.querySelector('.footer-search');

// Function to hide elements
function hideElements() {
    search.classList.remove('active-search');
    hideStuff.classList.remove('hide-stuffs');
}

// Click event listener for search icon
searchIcon.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the window
    search.classList.add('active-search');
    hideStuff.classList.add('hide-stuffs');
});

// Click event listener using event delegation for window
window.addEventListener('click', (event) => {
    // Check if the click is outside the search and icon elements
    if (!event.target.closest('.search') && !event.target.closest('.icon')) {
        hideElements();
    }
});

// Click event listener for clearing the search
clear.onclick = () => {
    mySearch.value = '';
};

//click footer search to open search in the header
footerSearch.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the window
    search.classList.toggle('active-search');
    hideStuff.classList.toggle('hide-stuffs');
})

// Click event listener for icon (uncomment if you want to hide elements when the icon is clicked)
// icon.addEventListener('click', () => {
//     hideElements();
// });


// JAVASCRIPT FOR THE NAV SIDEBAR

const navClick = document.querySelector(".sidebar .toggle-btn");

const navSidebar = document.querySelector(".sidebar");

function navClicked() {
    navSidebar.classList.toggle("active-nav");
};

window.addEventListener('click', (event) => {
    // Check if the click is outside the sidebar and toggle-btn elements
    if (!event.target.closest('.sidebar') && !event.target.closest('.sidebar .toggle-btn')) {
        navSidebar.classList.remove("active-nav");
    }
});


navClick.addEventListener('click', navClicked);