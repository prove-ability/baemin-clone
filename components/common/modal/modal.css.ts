import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "components/common/theme.css";

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
		background: "light",
		padding: "medium",
	}),
	{
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%, -50%)",
		width: "100%",
		maxWidth: "769px",
		height: "100%",
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
		placeItems: "center",
	}),
]);

// body
export const body = style([sprinkles({ paddingTop: "medium" })]);
