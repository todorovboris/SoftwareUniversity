Client Side Rendering

Rendering - буквално процесът на визуализиране на изображения;
UI Web Rendering - процесът на генериране на HTML

1. npm install lit-html:

// —————————————————————————————————————————————

2. To use lit-html, import it as module:

<script type="module>
	import { html, render } from ‘./node-modules/lit-html/lit-html.js’;
	…
</script>

// —————————————————————————————————————————————

3.  Customize the code, using JS:

let helloTemplate = (text) => html `

<h1>Hello ${text}</h1>
`
render(helloTemplate(‘Lit-Html’), document.querySelector(‘body’))

// —————————————————————————————————————————————

4. For boolean attributes binding, use the ? prefix:

const canRegister = true;
const myTemplate = (data) => html`

<div ?disabled=${canRegister}>Some text here</div>
`
- If the value is false => it will be deleted;
- If the value is true => it will be added as attribute;

// —————————————————————————————————————————————

5. For event listener binding is with the prefix @

const countClickHandler = () => {
console.log(‘click’);
}
const appRootTempalte = (cox) => html`

<div>
	<h1 @click=${countClickHandler}>${ctx.title}</h1>
</div>
`

// —————————————————————————————————————————————

6. There could be used and Conditional Statements:

html`	${user.isLoggedIn 
		? html`Welcome {user.name}`		: html`Please log in`
	}`;

// —————————————————————————————————————————————

7. List Rendering

html`	<ul>
		${items.map((item) => html`<li>${item}</li>`)}
	</ul>
`;

// —————————————————————————————————————————————
