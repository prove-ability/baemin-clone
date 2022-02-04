import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles/theme.css";

// container
export const container = style([
	sprinkles({
		display: "flex",
	}),
	{},
]);
