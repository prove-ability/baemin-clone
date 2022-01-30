import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { STYLES } from "components/constants/constants.css";

// layout
const layoutStyle = style({
	width: "100%",
	height: "100%",
	backgroundColor: STYLES.background.main,
});

export const layoutRecipe = recipe({
	base: [layoutStyle],
	variants: {},
});

// wrapper
const wrapperStyle = style({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	maxWidth: "769px",
	height: "100vh",
	margin: "0 auto",
	backgroundColor: STYLES.background.white,
});

export const wrapperRecipe = recipe({
	base: [wrapperStyle],

	variants: {},
});
