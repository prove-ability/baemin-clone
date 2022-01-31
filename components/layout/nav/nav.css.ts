import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { STYLES } from "components/constants/constants.css";

// wrapper
const navStyle = style({
	position: "fixed",
	bottom: "0",
	width: "100%",
	height: "20px",
	backgroundColor: STYLES.background.white,
});

export const navRecipe = recipe({
	base: [navStyle],
	variants: {},
});

// ul
const ulStyle = style({
	display: "flex",
	flexDirection: "row",
});

export const ulRecipe = recipe({
	base: [ulStyle],
	variants: {},
});

// li
const liStyle = style({
	display: "flex",
	flexDirection: "row",
});

export const liRecipe = recipe({
	base: [liStyle],
	variants: {},
});
