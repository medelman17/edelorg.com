import { Config, defaults, from } from "@edelorg/config";

export function get_date_formatter(config: Config) {
	return config.web.base.dateFormatter;
}

export function format_date(date: Date, custom?: Config) {
	let config = from(custom);
	let formatter = get_date_formatter(config);
	try {
		let result = formatter.format(date);
		return result;
	} catch (error) {
		throw error;
	}
}

export function trim(str: string = "", ch?: string): string {
	if (!ch) return str.trim();

	return trim_left(trim_right(str, ch), ch);
}

export function trim_left(str: string = "", ch?: string): string {
	if (!ch) return str.trim();
	return str;
}

export function trim_right(str: string = "", ch?: string): string {
	if (!ch) return str.trim();
	return str;
}
