import { html } from 'https://unpkg.com/lit-html?module'
export const layout = (data) => html`
	<h1 style="margin-top: 5%"><a href="/">Logan's Crochet</a></h1>
	${data}
	<hr>
	<footer>Contacts: ${
		[
			{
				href: "mailto:taga@myself.com",
				alt: "Email",
				text: "taga@myself.com"
			},
			{
				href: "sms:16083152470",
				alt: "Phone number",
				text: "+1 (608) 315-2470"
			},
			{
				href: "https://t.me/Junipyr",
				alt: "Telegram",
				text: "@Junipyr on Telegram"
			},
			{
				href: "https://mastodon.online/@junipyr",
				alt: "Mastodon",
				text: "@junipyr@mastodon.online on Mastodon"
			}
		].map(c => html` <a href=${c.href} alt=${c.alt}>${c.text}</a>`)
	}</footer>
`;