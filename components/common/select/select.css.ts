import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles/theme.css";

export const select = style([
	sprinkles({}),
	{
		selectors: {
			"&.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)":
				{
					cursor: "pointer",
				},
		},
	},
]);
