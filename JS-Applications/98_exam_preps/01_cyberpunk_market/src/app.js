import page from '../lib/page.js';
import dashboardView from '../views/dashboard.js';

import homeView from '../views/home.js';
import loginView from '../views/login.js';
import logoutView from '../views/logout.js';
import registerView from '../views/register.js';

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/dashboard', dashboardView);

page();
