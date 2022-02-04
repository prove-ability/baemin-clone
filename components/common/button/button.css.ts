import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "styles/theme.css";

// container
const buttonStyle = style([
	sprinkles({
		background: "main",
		color: "default",
		padding: "small",
	}),
	{
		border: "1px solid",
		// border: "2px solid",
		selectors: {
			"&:nth-child(2n)": {
				marginLeft: "10px",
			},
			"&:hover": {
				cursor: "pointer",
			},
		},
	},
]);

export const button = recipe({
	base: buttonStyle,
	variants: {
		color: {
			default: {
				backgroundColor: "inherit",
				color: vars.colors.text.default,
				borderColor: vars.colors.background.light,
				selectors: {
					// 더 밝은색으로
					"&:hover": {},
				},
			},
			primary: {
				backgroundColor: vars.colors.background.main,
				color: vars.colors.text.default,
				borderColor: vars.colors.background.main,
			},
		},
		fullSize: {
			true: {
				width: "100%",
			},
		},
	},
});
