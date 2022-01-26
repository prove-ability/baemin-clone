import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colors } from "styles/themes.css";

const BRAND_COLOR = "#f06d06";

const buttonStyle = style({
	backgroundColor: BRAND_COLOR,
	color: colors.text.normal,
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
			default: {},
			primary: {
				background: "none",
				color: BRAND_COLOR,
			},
		},
	},
});
