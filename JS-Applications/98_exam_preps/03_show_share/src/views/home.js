import { html, render } from '../../node_modules/lit-html/lit-html.js';

const tempalte = () => html`<h1>HELLO!</h1>`;

export default function homeView() {
    render(tempalte(), document.querySelector('body main'));
}
