import { html, render } from '../../node_modules/lit-html/lit-html.js';
import page from '../../node_modules/page/page.mjs';

const template = () => html``;

export default async function deleteView(ctx) {
    render(template(), document.querySelector('#wrapper main'));
}
