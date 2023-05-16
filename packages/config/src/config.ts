import * as T from "./types";
import * as D from "./defaults";

export function from(config?: Partial<T.Config>): T.Config {
	return {
		web: web_config(config?.web),
	};
}

function web_config(config?: Partial<T.WebConfig>): T.WebConfig {
	return {
		base: web_base_config(config?.base),
		blog: web_blog_config(config?.blog),
	};
}

function web_base_config(config?: Partial<T.WebBaseConfig>): T.WebBaseConfig {
	return {
		name: config?.name ?? D.NAME,
		origin: config?.origin ?? D.ORIGIN,
		basePathname: config?.basePathname ?? D.BASE_PATHNAME,
		trailingSlash: config?.trailingSlash ?? D.TRAILING_SLASH,
		title: config?.title ?? D.TITLE,
		description: config?.description ?? D.DESCRIPTION,
		defaultImage: config?.defaultImage ?? D.IMAGE,
		defaultTheme: config?.defaultTheme ?? D.THEME,
		language: config?.language ?? D.LANGUAGE,
		textDirection: config?.textDirection ?? D.TEXT_DIRECTION,
		dateFormatter: new Intl.DateTimeFormat("en", {
			year: D.DATETIME_YEAR_FORMAT,
			month: D.DATETIME_MONTH_FORMAT,
			day: D.DATETIME_DAY_FORMAT,
			timeZone: D.DATETIME_TIMEZONE,
		}),
	};
}

function web_blog_config(config?: Partial<T.BlogConfig>): T.BlogConfig {
	return {
		disabled: config?.disabled ?? D.BLOG_DISABLED,
		postsPerPage: config?.postsPerPage ?? D.BLOG_POSTS_PER_PAGE,
		post: {
			noindex: config?.post?.noindex ?? D.BLOG_POST_NOINDEX,
			disabled: config?.post?.disabled ?? D.BLOG_POST_DISABLED,
			permalink: config?.post?.permalink ?? D.BLOG_POST_PERMALINK,
		},
		list: default_blog_page_config("list"),
		category: default_blog_page_config("category"),
		tag: default_blog_page_config("tag"),
	};
}

function default_blog_page_config(path: string): T.BlogPageConfig {
	return {
		noindex: false,
		disabled: false,
		pathname: path,
	};
}
