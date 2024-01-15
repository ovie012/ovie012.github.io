// FOR THE LEFT SLIDE IN ANIMATIONS

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}


// FOR THE RIGHT SLIDE IN ANIMATIONS 

const boxesR = document.querySelectorAll('.boxR');

window.addEventListener('scroll', checkBoxesR);

checkBoxesR();

function checkBoxesR() {
    const triggerBottomR = window.innerHeight / 5 * 4;

    boxesR.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottomR) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}


// JAVASCRIPT FOR THE NAV SIDEBAR

const navClick = document.querySelector(".sidebar .toggle-btn");

const navSidebar = document.querySelector(".sidebar");

function navClicked() {
    navSidebar.classList.toggle("active");
};

navClick.addEventListener('click', navClicked);

const animation = document.querySelector('.second-div');

function animate () {
    animation.classList.add('active');
};

window.addEventListener('load', animate);



// loader
const loader = document.querySelector('.lazy-loader')

function lazyLoader () {
    loader.classList.add('start');
};

window.addEventListener('load', lazyLoader);
