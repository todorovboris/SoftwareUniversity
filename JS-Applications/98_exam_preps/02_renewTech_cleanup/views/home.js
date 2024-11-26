import { render, html } from '../lib/lit-html.js';

const template = () => html`<h1>HELLO!</h1>`;

export default async function homeView(ctx) {
    render(template());
}
