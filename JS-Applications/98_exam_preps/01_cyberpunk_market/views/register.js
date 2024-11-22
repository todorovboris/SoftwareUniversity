import { html, render } from '../lib/lit-html.js';

const template = () => html``;

export default async function registerView(ctx) {
    render(template());
}
