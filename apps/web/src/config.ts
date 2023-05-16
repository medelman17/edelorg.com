export const CONFIG = {
	name: 'EdelOrg',
	origin: 'https://edelorg.com',
	basePathname: '/',
	trailingSlash: false,
	title: '',
	description: '',
	defaultImage: '',
	defaultTheme: 'system',
	language: 'en',
	textDirection: 'ltr',
	dateFormatter: new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC',
	}),

	blog: {
		disabled: false,
		postsPerPage: 4,
		post: {
			permalink: '/%slug%',
			noindex: false,
			disabled: false,
		},
		list: {
			pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
			noindex: false,
			disabled: false,
		},

		category: {
			pathname: 'category', // Category main path /category/some-category
			noindex: true,
			disabled: false,
		},

		tag: {
			pathname: 'tag', // Tag main path /tag/some-tag
			noindex: true,
			disabled: false,
		},
	},
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
