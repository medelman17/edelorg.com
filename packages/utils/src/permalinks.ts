import slugify from "limax";

export function trim_trailing_slash(url: string): string {
	if (url.endsWith("/")) {
		return url.slice(0, -1);
	}
	return url;
}

export function create_path(...params: string[]): string {
	const paths = params
		.map((el) => trim_trailing_slash(el))
		.filter((el) => el.length > 0)
		.join("/");
	return "/" + paths;
}

export function clean_slug(text = ""): string {
	return trim_trailing_slash(text)
		.split("/")
		.map((el) => slugify(el))
		.join("/");
}

export function get_canonical() {}

export type PermalinkType = "post" | "page" | "category" | "tag";

export function get_permalink(slug = "", type: PermalinkType = "page") {
	switch (type) {
		case "post":
			return get_permalink_for_post(slug);
		case "page":
			return get_permalink_for_page(slug);
		case "category":
			return get_permalink_for_category(slug);
		case "tag":
			return get_permalink_for_tag(slug);
	}
}

export function get_permalink_for_post(slug = "") {
	return create_path("blog", slug);
}

export function get_permalink_for_page(slug = "") {
	return create_path("page", slug);
}

export function get_permalink_for_category(slug = "") {
	return create_path("category", slug);
}

export function get_permalink_for_tag(slug = "") {
	return create_path("tag", slug);
}
