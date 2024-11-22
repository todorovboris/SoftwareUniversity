import { html, render } from '../lib/lit-html.js';

const template = () => html` <h1>IT WORKS</h1> `;

export default async function homeView(ctx) {
    render(template());
}
