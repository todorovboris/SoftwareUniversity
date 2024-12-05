import page from '../node_modules/page/page.mjs';

import dashboardView from './views/dashbaord.js';
import createView from './views/create.js';
import deleteView from './views/delete.js';
import detailsView from './views/details.js';
import editView from './views/edit.js';
import homeView from './views/home.js';
import loginView from './views/login.js';
import logoutView from './views/logout.js';
import registerView from './views/register.js';
import navigationView from './views/navigation.js';
import searchView from './views/search.js';

page(navigationView);

page('/', homeView);
page('/login', loginView);
page('/logout', logoutView);
page('/register', registerView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/dashbaord/:itemId/details', detailsView);
page('/dashbaord/:itemId/edit', editView);
page('/dashbaord/:itemId/delete', deleteView);
page('/search', searchView);

page();
