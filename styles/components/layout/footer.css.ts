import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colors } from "styles/themes.css";

// wrapper
const footerStyle = style({
	backgroundColor: colors.background.gray,
	padding: "20px 10px",
});

export const footerRecipe = recipe({
	base: [footerStyle],

	variants: {
		type: {
			default: {},
			primary: {},
		},
	},
});
