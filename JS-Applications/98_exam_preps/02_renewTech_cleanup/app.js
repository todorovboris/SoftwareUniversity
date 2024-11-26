import page from './lib/page.js';

import homeView from './views/home.js';
import loginView from './views/login.js';
import logoutView from './views/logout.js';
import registerView from './views/register.js';
import dashboardView from './views/dashboard.js';
import createView from './views/create.js';
import detailsView from './views/details.js';

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/dashboard', dashboardView);
page('/create', createView);

page();
