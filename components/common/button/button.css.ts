import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { STYLES } from "components/constants/constants.css";

const buttonStyle = style({
	color: STYLES.text.normal,
	padding: 10,
	margin: 10,
	":hover": {
		color: "black",
	},
	":focus": {
		color: "black",
	},
});

export const buttonRecipe = recipe({
	base: [buttonStyle],
	variants: {
		// 색상 또는 컬러
	},
});

// https://vanilla-extract.style/documentation/recipes-api/#recipevariants
