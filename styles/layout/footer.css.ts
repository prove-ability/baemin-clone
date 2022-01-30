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

// ul
const ulStyle = style({
	display: "flex",
	margin: "10px 0",
});

export const ulRecipe = recipe({
	base: [ulStyle],
	variants: {
		// 색상 또는 사이즈
	},
});

// li
const liStyle = style({
	selectors: {
		"&+&": {
			marginLeft: "10px",
		},
	},
});

export const liRecipe = recipe({
	base: [liStyle],
	variants: {
		// 색상 또는 사이즈
	},
});
