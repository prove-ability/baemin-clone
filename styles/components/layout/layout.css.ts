import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colors } from "styles/themes.css";

// layout
const layoutStyle = style({
	width: "100%",
	backgroundColor: colors.background.main,
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
	width: "100%",
	margin: "0 auto",
	maxWidth: "769px",
	backgroundColor: colors.background.white,
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
