import homePage from './views/home.js';
import loginPage from './views/login.js';
import registerPage from './views/register.js';
import createPage from './views/create.js';
import logoutPage from './views/logout.js';

const sectionViews = {
    '/': homePage,
    '/login': loginPage,
    '/register': registerPage,
    '/create': createPage,
    '/logout': logoutPage,
};

function initNavigation() {
    const navElement = document.querySelector('header nav');
    navElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.tagName !== 'A') return;

        const url = new URL(e.target.href);
        const pathname = url.pathname;

        //initially hide all sections
        document.querySelectorAll('.site-section').forEach((section) => {
            section.style.display = 'none';
        });

        sectionViews[pathname]();
    });

    sectionViews['/']();
    renderNavigation();
}

function renderNavigation() {
    const email = localStorage.getItem('email');
    if (email && email !== 'undefined') {
        const userElm = document.getElementById('user');
        userElm.style.display = 'inline';
    } else {
        const guestElm = document.getElementById('guest');
        guestElm.style.display = 'inline';
    }
}

initNavigation();
