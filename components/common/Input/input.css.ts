import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles/theme.css";

export const input = style([
	sprinkles({
		color: "dark",
	}),
	{
		selectors: {
			/* Chrome, Safari, Edge, Opera */
			"&::-webkit-outer-spin-button": {
				WebkitAppearance: "none",
				margin: "0",
			},
			"&::-webkit-inner-spin-button": {
				WebkitAppearance: "none",
				margin: "0",
			},
			/* Firefox */
			"&:input[type=number] ": {
				MozAppearance: "textfield",
			},
		},
	},
]);
