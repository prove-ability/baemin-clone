import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colors } from "styles/themes.css";

// footer
const footerStyle = style({
	backgroundColor: colors.background.gray,
	padding: "20px 10px",
	marginTop: "auto",
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

// 약관 terms
const termsStyle = style({
	color: colors.text.gray,
});

export const termsRecipe = recipe({
	base: [termsStyle],
	variants: {
		type: {
			default: {},
			primary: {},
		},
	},
});
