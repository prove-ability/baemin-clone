import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { createGlobalTheme } from "@vanilla-extract/css";

// color palette
// #222831
// #393E46
// #00ADB5
// #EEEEEE

export const vars = createGlobalTheme(":root", {
	colors: {
		text: {
			default: "#EEEEEE",
			error: "red",
		},
		background: {
			default: "#393E46",
			dark: "#222831",
			light: "#EEEEEE",
			main: "#00ADB5",
			dimmed: "rgba(0, 0, 0, 0.3)",
		},
	},
	space: {
		small: "8px",
		medium: "16px",
		large: "32px",
	},
	zIndex: {
		auto: "auto",
		"9999": "9999",
		"10000": "10000",
		"100": "100",
		"200": "200",
		"300": "300",
		"400": "400",
		"500": "500",
		"600": "600",
	},
	fontSizes: {
		xxs: "12px",
		xs: "13px",
		sm: "14px",
		base: "16px",
		md: "18px",
		lg: "24px",
	},
	fontWeight: {
		400: "400",
		500: "500",
		600: "600",
		700: "700",
	},
	borderRadius: {
		circle: "50%",
		8: "8px",
		16: "16px",
		24: "24px",
	},
});

const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { "@media": "screen and (min-width: 768px)" },
		desktop: { "@media": "screen and (min-width: 1024px)" },
	},
	defaultCondition: "mobile",
	properties: {
		maxWidth: ["768px"],
		display: ["none", "flex", "block", "inline"],
		flexDirection: ["row", "column"],
		justifyContent: [
			"stretch",
			"flex-start",
			"center",
			"flex-end",
			"space-around",
			"space-between",
		],
		alignItems: ["stretch", "flex-start", "center", "flex-end"],
		paddingTop: vars.space,
		paddingBottom: vars.space,
		paddingLeft: vars.space,
		paddingRight: vars.space,
		zIndex: vars.zIndex,
		// etc.
	},
	shorthands: {
		padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
		paddingX: ["paddingLeft", "paddingRight"],
		paddingY: ["paddingTop", "paddingBottom"],
		placeItems: ["justifyContent", "alignItems"],
	},
});

const colorProperties = defineProperties({
	conditions: {
		lightMode: {},
		darkMode: { "@media": "(prefers-color-scheme: dark)" },
	},
	defaultCondition: "lightMode",
	properties: {
		color: vars.colors.text,
		background: vars.colors.background,
		// etc.
		borderColor: vars.colors.background,
	},
});

// const fontProperties = defineProperties({
// 	properties: {
// 		fontSize: {
// 			xxs: "12px",
// 			xs: "13px",
// 			sm: "14px",
// 			base: "16px",
// 			md: "18px",
// 			lg: "24px",
// 		},
// 		fontWeight: {
// 			400: "400",
// 			500: "500",
// 			600: "600",
// 			700: "700",
// 		},
// 	},
// });

const borderRadiusProperties = defineProperties({
	properties: {
		borderRadius: {
			circle: vars.borderRadius.circle,
			8: vars.borderRadius[8],
			16: vars.borderRadius[16],
			24: vars.borderRadius[24],
		},
	},
});

export const sprinkles = createSprinkles(
	responsiveProperties,
	colorProperties,
	borderRadiusProperties
	// fontProperties
);

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0];
