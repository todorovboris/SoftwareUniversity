import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';

const template = () => html`<!-- Dashboard page -->
    <h2>Available Motorcycles</h2>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        <div class="motorcycle">
            <img src="./images/Honda Hornet.png" alt="example1" />
            <h3 class="model">Honda Hornet</h3>
            <p class="year">Year: 2006</p>
            <p class="mileage">Mileage: 45000 km.</p>
            <p class="contact">Contact Number: 0881234567</p>
            <a class="details-btn" href="#">More Info</a>
        </div>
        <div class="motorcycle">
            <img src="./images/Kawasaki er6n.png" alt="example1" />
            <h3 class="model">Kawasaki er6n</h3>
            <p class="year">Year: 2016</p>
            <p class="mileage">Mileage: 10000 km.</p>
            <p class="contact">Contact Number: 0884567123</p>
            <a class="details-btn" href="#">More Info</a>
        </div>
        <div class="motorcycle">
            <img src="./images/Yamaha mt 07.png" alt="example1" />
            <h3 class="model">Yamaha mt 07</h3>
            <p class="year">Year: 2017</p>
            <p class="mileage">Mileage: 15000 km.</p>
            <p class="contact">Contact Number: 0886714523</p>
            <a class="details-btn" href="#">More Info</a>
        </div>
    </section>
    <!-- Display an h2 if there are no posts -->
    <h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`;

export default async function dashboardView(ctx) {
    render(template(), document.querySelector('#wrapper main'));
}
