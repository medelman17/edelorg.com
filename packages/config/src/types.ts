export interface Config {
	readonly web: WebConfig;
}

export interface WebBaseConfig {
	readonly name: string;
	readonly origin: string;
	readonly basePathname: string;
	readonly trailingSlash: boolean;
	readonly title: string;
	readonly description: string;
	readonly defaultImage: string;
	readonly defaultTheme: string;
	readonly language: string;
	readonly textDirection: string;
	readonly dateFormatter: Intl.DateTimeFormat;
}

export interface WebConfig {
	readonly base: WebBaseConfig;
	readonly blog: BlogConfig;
}

export type BlogPages = "list" | "category" | "tag";

export interface BlogConfig {
	readonly disabled: boolean;
	readonly postsPerPage: number;
	readonly post: BlogPostConfig;
	readonly list: BlogListPageConfig;
	readonly category: BlogCategoryPageConfig;
	readonly tag: BlogTagPageConfig;
}

export interface BlogRouteConfig {
	readonly noindex: boolean;
	readonly disabled: boolean;
}

export interface BlogPostConfig extends BlogRouteConfig {
	readonly permalink: string;
}

export interface BlogPageConfig extends BlogRouteConfig {
	readonly pathname: string;
}

export interface BlogCategoryPageConfig extends BlogPageConfig {}

export interface BlogListPageConfig extends BlogPageConfig {}

export interface BlogTagPageConfig extends BlogPageConfig {}
