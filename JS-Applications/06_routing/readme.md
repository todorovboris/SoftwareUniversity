Routing
External Routing Library - page.js

1. npm install page
2. import page from “//unpkg.com/page/page.mjs” OR import page from ‘../node_modules/page/page.mjs’;

Basic Usage:
page(‘/’, index); // Register home route
page(‘\*’, notfound); // Register catch-all (404)
page.start(); // Activate router

// —————————————————————————————————————————————

3. Implementation:

function homePage(){{}
function contactsPage(){}

page(‘/’, homePage);
page(‘/contacts’, contactsPage);
page.start()

// —————————————————————————————————————————————

4. URL Parameters

-   URL glob patterns can match dynamic parts of the URL - e.g., category name, product ID, user page, etc.
    page(‘/catalog/:id’, detailsView); // match any route, following /catalog

-   URL parameter can be accessed from the context:
    function detailsView(ctx, next) {
    console.log(ctx.params.id);
    }

-   Multiple parameters can be captured:
    page(‘/:category/:id’, detailsView)’;

// —————————————————————————————————————————————

5. Programmatic Redirect

-   Automatic redirect:
    page.redirect(‘/home’, ‘/catalog’); // navigating to /home will be redirected to /catalog

-   Navigate to a page programmatically:
    page.redirect(‘/login’);

// —————————————————————————————————————————————

6. Chaining Route Handlers

-   Route handler can be chained:
    page(‘/catalog/:id’, loadData, detailsView); // first will be invoked loadData, then detailsView

-   Add values to the context, to share them across handlers:
    async function loadData(ctx, next) {
    const data await fetchProduct(ctx.params.id);
    ctx.product = data;
    next(); // next will invoke detailsView function
    }

/ ——————————————————————————————————
History-based Routing
routes = {
‘/’: homePage,
‘/pricing’: pricingPage,
‘/contacts’: contactsPage
}

// STOP default navigation
e.preventDefault();

// Add history based navigation
const url = new URL(e.target.href);
history.pushState(null, null, url.pathname);

// Show content based on the current route
routes[url.pathname]()

// —————————————————————————————————————————————

MiddleWares

-   Could be prepared FOR the whole app OR separate route
-   Data preparation
-   Route guarding -> if someone is authorised
-   Additional checks or validations
-   Render the navigation before each route

-   If we didn’t initialised specific rout (‘/…’) in page, and just invoke a function, this is MiddleWare and it will be shown for the whole app:

export default function renderNavigation(ctx, next) {
…
…

    next();

}

page(renderNavigation); // ALWAYS render the middleware and then render all the rest
page(‘/’, homePage);
…
…
