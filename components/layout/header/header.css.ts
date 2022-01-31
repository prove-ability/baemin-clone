import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { STYLES } from "components/constants/constants.css";

// wrapper
const headerStyle = style({
	display: "flex",
	justifyContent: "space-between",
	backgroundColor: STYLES.background.main,
	padding: "20px",
});

export const headerRecipe = recipe({
	base: [headerStyle],
	variants: {},
});
