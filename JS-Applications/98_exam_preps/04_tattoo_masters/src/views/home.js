import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = () => html`<h1>HELLO!</h1>`;

export default async function homeView(ctx) {
    render(template(), document.querySelector('#content main'));
}
