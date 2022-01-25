import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const BRAND_COLOR = "#f06d06";

export const buttonStyle = style({
	backgroundColor: BRAND_COLOR,
	color: "white",
	padding: 10,
	border: `2px solid ${BRAND_COLOR}`,
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
		type: {
			primary: {
				background: "none",
				color: BRAND_COLOR,
			},
		},
	},
});
