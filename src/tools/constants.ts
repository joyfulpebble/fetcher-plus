import { CommonT } from "../types/common";

export const defaultRequestMethods: Array<CommonT.MainRequestMethods> = [
	"GET",
	"POST",
	"PUT",
	"PATCH",
	"DELETE"
];

export const defaultRequestHeaders: Array<string> = [
	"Accept",
	"Accept-Charset",
	"Accept-Encoding",
	"Accept-Ranges",
	"Age",
	"Allow",
	"Authorization",
	"Cache-Control",
	"Connection",
	"Content-Encoding",
	"Content-Language",
	"Content-Length",
	"Content-Location",
	"Content-Range",
	"Content-Type",
	"Content-Version",
	"Date",
	"ETag",
	"Expect",
	"Expires",
	"From",
	"Host",
	"If-Match",
	"If-Modified-Since",
	"If-None-Match",
	"If-Range",
	"If-Unmodified-Since",
	"Last-Modified",
	"Link",
	"Location",
	"Max-Forwards",
	"Pragma",
	"Proxy-Authenticate",
	"Proxy-Authorization",
	"Public",
	"Range",
	"Referer",
	"Retry-After",
	"Server",
	"Title",
	"TE",
	"Trailer",
	"Transfer-Encoding",
	"Upgrade",
	"User-Agent",
	"Vary",
	"Via",
	"Warning",
	"WWW-Authenticate",
	"Clear-Site-Data",
	"Accept-CH",
	"Accept-CH-Lifetime",
	"Early-Data",
	"Content-DPR",
	"DPR",
	"Device-Memory",
	"Save-Data",
	"Viewport-Width",
	"Width",
	"Keep-Alive",
	"Accept-Language",
	"Cookie",
	"Set-Cookie",
	"Cookie2",
	"Set-Cookie2",
	"Access-Control-Allow-Origin",
	"Access-Control-Allow-Credentials",
	"Access-Control-Allow-Headers",
	"Access-Control-Allow-Methods",
	"Access-Control-Expose-Headers",
	"Access-Control-Max-Age",
	"Access-Control-Request-Headers",
	"Access-Control-Request-Method",
	"Origin",
	"Service-Worker-Allowed",
	"Timing-Allow-Origin",
	"X-Permitted-Cross-Domain-Policies",
	"DNT",
	"Tk",
	"Content-Disposition",
	"Forwarded",
	"X-Forwarded-For",
	"X-Forwarded-Host",
	"X-Forwarded-Proto",
	"Referrer-Policy",
	"Cross-Origin-Opener-Policy",
	"Cross-Origin-Resource-Policy",
	"Content-Security-Policy",
	"Content-Security-Policy-Report-Only",
	"Expect-CT",
	"Feature-Policy",
	"Public-Key-Pins",
	"Public-Key-Pins-Report-Only",
	"Strict-Transport-Security",
	"Upgrade-Insecure-Requests",
	"X-Content-Type-Options",
	"X-Download-Options",
	"X-Frame-Options",
	"X-Powered-By",
	"X-XSS-Protection",
	"Last-Event-ID",
	"NEL",
	"Ping-From",
	"Ping-To",
	"Report-To",
	"Sec-WebSocket-Key",
	"Sec-WebSocket-Extensions",
	"Sec-WebSocket-Accept",
	"Sec-WebSocket-Protocol",
	"Sec-WebSocket-Version",
	"Accept-Push-Policy",
	"Accept-Signature",
	"Alt-Svc",
	"Large-Allocation",
	"Push-Policy",
	"Signature",
	"Signed-Headers",
	"Server-Timing",
	"SourceMap",
	"X-DNS-Prefetch-Control",
	"X-Firefox-Spdy",
	"X-Pingback",
	"X-Requested-With",
	"X-Robots-Tag",
	"X-UA-Compatible"
];

export const bodyContentTypes: Array<string> = [
	"none",
	"raw",
	"form-data",
	"x-www-form-urlencoded"
];

export const bodyRawTypes: Array<CommonT.BodyRawType> = [
	"Text",
	"JSON",
	"XML",
	"HTML",
	"JavaScript"
];
export const authTypes: Array<CommonT.AuthType> = ["none", "basic-auth", "bearer-token", "api-key"];
export const authApiTypes: Array<CommonT.AuthApiKeyType> = ["parameter", "header"];

export const editorStyleColors = {
	"breadcrumb.activeSelectionForeground": "#614fd1",
	"breadcrumb.background": "#212121",
	"breadcrumb.focusForeground": "#b2bdbd",
	"breadcrumb.foreground": "#848484",
	"breadcrumbPicker.background": "#1a1a1a",
	"button.background": "#61616150",
	"debugToolBar.background": "#212121",
	"dropdown.background": "#212121",
	"dropdown.border": "#ffffff10",
	"editor.background": "#1e1e1e",
	"editor.lineHighlightBackground": "#61616150",
	"editor.selectionBackground": "#61616150",
	"editor.selectionHighlightBackground": "#61616150",
	"editor.findMatchBackground": "#614fd1",
	"editor.findMatchHighlightBackground": "#61616150",
	"editor.findRangeHighlightBackground": "#61616150",
	"editorError.foreground": "#ff537070",
	"editorLineNumber.activeForeground": "#614fd1",
	"editorLineNumber.foreground": "#ffffff80",
	"editor.border": "#ffffff",
	"editorSuggestWidget.foreground": "#614fd1",
	"editorHoverWidget.color": "#614fd1",
	"editorSuggestWidget.highlightForeground": "#614fd1",
	"editorWarning.foreground": "#c3e88d70",
	"editorWhitespace.foreground": "#eeffff40",
	"editorWidget.background": "#272727",
	"editorWidget.border": "#614fd1",
	"editorWidget.resizeBorder": "#614fd1",
	"focusBorder": "#614fd1",
	"input.placeholderForeground": "#eeffff60",
	"inputOption.activeBorder": "#614fd1",
	"inputValidation.errorBorder": "#ff537050",
	"inputValidation.infoBorder": "#9393bf",
	"inputValidation.warningBorder": "#ffcb6b50",
	"list.activeSelectionBackground": "#1a1a1a",
	"list.activeSelectionForeground": "#614fd1",
	"list.highlightForeground": "#614fd1",
	"list.focusBackground": "#eeffff20",
	"list.focusForeground": "#b2bdbd",
	"list.hoverBackground": "#1a1a1a",
	"list.hoverForeground": "#bababa",
	"scrollbarSlider.activeBackground": "#614fd190",
	"scrollbarSlider.background": "#eeffff10",
	"scrollbarSlider.hoverBackground": "#eeffff20"
};
export const editorCodeColors = [
	{
		token: "comment",
		foreground: "#80a271"
	},
	{
		token: "keyword.js",
		foreground: "#614fd1"
	},
	{
		token: "typeKeywords",
		foreground: "#614fd1"
	},
	{
		token: "metatag.html",
		foreground: "#614fd1"
	},
	{
		token: "metatag.content.html",
		foreground: "#9084df"
	},
	{
		token: "tag",
		foreground: "#614fd1"
	},
	{
		token: "attribute.name",
		foreground: "#9084df"
	},
	{
		token: "attribute.value",
		foreground: "#ddde98"
	},
	{
		token: "attribute.value.hex.css",
		foreground: "#ddde98"
	},
	{
		token: "metatag.xml",
		foreground: "#614fd1"
	},
	{
		token: "metatag.content.xml",
		foreground: "#9084df"
	},
	{
		token: "number.json",
		foreground: "#80a271"
	},
	{
		token: "string.value.json",
		foreground: "#9084df"
	},
	{
		token: "string.key.json",
		foreground: "#614fd1"
	}
];
