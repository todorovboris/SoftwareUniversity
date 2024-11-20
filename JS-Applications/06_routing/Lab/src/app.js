import page from '//unpkg.com/page/page.mjs';

import loginPage from './views/login.js';
import registerPage from './views/register.js';
import createPage from './views/create.js';
import logoutPage from './views/logout.js';
import catalogPage from './views/catalog.js';
import homePage from './views/home.js';

page('/', homePage);
page('/catalog', catalogPage);
page('/login', loginPage);
page('/register', registerPage);
page('/create', createPage);
page('/logout', logoutPage);
page();

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

renderNavigation();
