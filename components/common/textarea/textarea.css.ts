import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles/theme.css";

// container
export const textarea = style([
	sprinkles({
		color: "dark",
	}),
	{
		width: "100%",
	},
]);
