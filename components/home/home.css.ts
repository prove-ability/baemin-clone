import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "styles/theme.css";

// container
export const buttonWrapper = style([
	sprinkles({
		display: "flex",
		padding: "medium",
		justifyContent: "flex-end",
	}),
	{},
]);
