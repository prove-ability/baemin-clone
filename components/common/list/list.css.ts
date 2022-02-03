import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles/theme.css";

// container
export const table = style([
	sprinkles({}),
	{
		width: "100%",
	},
]);

// tr
export const tr = style([
	sprinkles({
		display: "flex",
	}),
	{},
]);

// th
export const th = style([
	sprinkles({
		display: "flex",
		placeItems: "center",
	}),
	{
		flex: 1,
	},
]);
