import { render, html } from '../lib/lit-html.js';

const template = () => html``;

export default async function createView(ctx) {
    render(template());
}
