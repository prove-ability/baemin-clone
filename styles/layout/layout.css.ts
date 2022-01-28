import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "styles/themes.css";

// layout
const layoutStyle = style({
	width: "100%",
	height: "100%",
	backgroundColor: vars.background.main,
});

export const layoutRecipe = recipe({
	base: [layoutStyle],
	variants: {
		type: {
			default: {},
		},
	},
});

// wrapper
const wrapperStyle = style({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	maxWidth: "769px",
	height: "100vh",
	margin: "0 auto",
	backgroundColor: vars.background.white,
});

export const wrapperRecipe = recipe({
	base: [wrapperStyle],

	variants: {
		type: {
			default: {},
			primary: {},
		},
	},
});
