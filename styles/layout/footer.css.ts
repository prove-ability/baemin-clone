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
		// 색상 또는 사이즈
	},
});

// 약관 terms
const termsStyle = style({
	color: colors.text.gray,
});

export const termsRecipe = recipe({
	base: [termsStyle],
	variants: {
		// 색상 또는 사이즈
	},
});

const liStyle = style({});

// ul
const ulStyle = style({
	display: "flex",
	selectors: {
		"& li": {},
		// `& ${liStyle}`: {
		// 	color: "red",
		// },
	},
});

export const ulRecipe = recipe({
	base: [ulStyle],
	variants: {
		// 색상 또는 사이즈
	},
});
