// account section interactivity
const account = document.querySelector('.account');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    account.classList.add('active');
};

loginLink.onclick = () => {
    account.classList.remove('active');
};