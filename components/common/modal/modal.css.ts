import { style } from "@vanilla-extract/css"
import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "components/common/theme.css"

// container
const containerStyle = style([
	sprinkles({
		zIndex: "9999",
		display: "flex",
		placeItems: "center",
		background: "dimmed",
	}),
	{
		position: "absolute",
		top: "0",
		left: "0",
		width: "100%",
		transition: "transform 10s ease",
	},
])

export const container = recipe({
	base: containerStyle,
	variants: {
		show: {
			true: {
				transform: "translateY(0)",
				visibility: "visible",
				height: "100%",
			},
			false: {
				transform: "translateY(110%)",
				visibility: "hidden",
			},
		},
	},
	defaultVariants: { show: false },
})

// wrapper
export const wrapper = style([
	sprinkles({
		background: "white",
		paddingX: "medium",
	}),
	{
		width: "100%",
		maxWidth: "769px",
		height: "100%",
	},
])

// header
export const header = style([
	sprinkles({
		display: "flex",
		placeItems: "center",
	}),
])

// body
export const body = style([sprinkles({ paddingTop: "medium" })])
