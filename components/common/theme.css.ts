import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"
import { createGlobalTheme } from "@vanilla-extract/css"

export const vars = createGlobalTheme(":root", {
	colors: {
		text: {
			blud: "blue",
			pink: "pink",
			aqua: "aqua",
			navy: "navy",
		},
		background: {
			white: "white",
			gray: "gray",
			dark: "#000",
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
		"100": "100",
		"200": "200",
		"300": "300",
		"400": "400",
		"500": "500",
		"600": "600",
	},
})

const responsiveProperties = defineProperties({
	conditions: {
		mobile: {},
		tablet: { "@media": "screen and (min-width: 768px)" },
		desktop: { "@media": "screen and (min-width: 1024px)" },
	},
	defaultCondition: "mobile",
	properties: {
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
})

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
	},
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0]
