import { html, render } from 'https://unpkg.com/lit-html?module';
import { until } from 'https://unpkg.com/lit-html/directives/until?module';
import { layout } from '/assets/js/layout.js';
render(layout(html`
	${
		until(fetch('/assets/json/products.json').then(r => r.json()).then(items => items.map(item => html`
			<a href=${item.href} style="content-visibility: auto">
				<div class="row">
					${item.images.slice(0, 3).map(image => html`<img src=${image} width="150px" alt=${item.name} loading="lazy">`)}
				</div>
				<p>${item.name}</p>
			</a>
		`)), html`<span>Loading...</span>`)
	}
	<p>You may also request a custom product not listed</p>
`), document.body);