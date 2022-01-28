import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "styles/themes.css";

// wrapper
const headerStyle = style({
	display: "flex",
	justifyContent: "space-between",
	backgroundColor: vars.background.main,
});

export const headerRecipe = recipe({
	base: [headerStyle],

	variants: {
		type: {
			default: {},
			primary: {},
		},
	},
});
