import { html, render } from '../../node_modules/lit-html/lit-html.js';

const tempalte = () => html``;

export default function deleteView() {
    render(tempalte(), document.querySelector('body main'));
}