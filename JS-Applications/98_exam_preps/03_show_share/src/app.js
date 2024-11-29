import page from '../node_modules/page/page.mjs';

import createView from './views/create.js';
import dashboardView from './views/dashboard.js';
import homeView from './views/home.js';
import loginView from './views/login.js';
import logoutView from './views/logout.js';
import registerView from './views/register.js';
import detailsView from './views/details.js';
import deleteView from './views/delete.js';
import editView from './views/edit.js';

page('/', homeView);
page('/create', createView);
page('/dashboard', dashboardView);
page('/register', registerView);
page('/logout', logoutView);
page('/login', loginView);
page('/dashboard/:showId/details', detailsView);
page('/dashboard/:showId/edit', editView);
page('/dashboard/:showId/delete', deleteView);

page();
