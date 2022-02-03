import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "styles/theme.css";

// container
export const tr = style([
	sprinkles({
		display: "flex",
	}),
	{},
]);

export const td = style([
	sprinkles({
		display: "flex",
		placeItems: "center",
	}),
	{
		flex: 1,
	},
]);
