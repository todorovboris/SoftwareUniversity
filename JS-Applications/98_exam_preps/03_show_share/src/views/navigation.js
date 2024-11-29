import { html, render } from '../../node_modules/lit-html/lit-html.js';

const tempalte = () => html``;

export default function navigationView() {
    render(tempalte(), document.querySelector('#wrapper header'));
}
