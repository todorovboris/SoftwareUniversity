import { html, render } from '../../node_modules/lit-html/lit-html.js';

const template = () => html``;

export default async function createView(ctx) {
    render(template(), document.querySelector('#content main'));
}