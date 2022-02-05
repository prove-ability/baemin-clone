import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "styles/theme.css";

// container
const containerStyle = style([
	sprinkles({
		zIndex: "9999",
		background: "dimmed",
	}),
	{
		position: "fixed",
		top: "0",
		left: "0",
		bottom: "0",
		width: "100%",
		transition: "transform 1.5s ease",
	},
]);

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
});

// wrapper
const wrapperStyle = style([
	sprinkles({
		borderRadius: 8,
		background: "default",
		padding: "medium",
		color: "default",
	}),
	{
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: "100%",
		maxWidth: "769px",
		height: "100%",
		// borderRadius: "",
	},
]);

export const wrapper = recipe({
	base: wrapperStyle,
	variants: {
		size: {
			full: {},
			mini: {
				width: "auto",
				height: "auto",
			},
		},
	},
	defaultVariants: { size: "full" },
});

// header
export const header = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	}),
]);

// body
export const body = style([sprinkles({ paddingTop: "medium" })]);

// close
export const close = style([
	sprinkles({}),
	{
		selectors: {
			"&:hover": {
				cursor: "pointer",
				color: vars.colors.text.error,
			},
		},
	},
]);
