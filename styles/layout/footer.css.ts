import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "styles/themes.css";

// footer
const footerStyle = style({
	backgroundColor: vars.background.gray,
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
	color: vars.text.gray,
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

// ul
const ulStyle = style({
	display: "flex",
});

export const ulRecipe = recipe({
	base: [ulStyle],
	variants: {
		type: {
			default: {},
			primary: {},
		},
	},
});
