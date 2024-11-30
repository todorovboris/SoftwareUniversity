import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = () => html``;

export default async function navigationView() {
    render(template(), document.querySelector('#content header'));
}
