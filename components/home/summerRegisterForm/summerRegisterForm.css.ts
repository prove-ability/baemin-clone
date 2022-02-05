import { style } from "@vanilla-extract/css";
import { sprinkles } from "styles/theme.css";

// container
export const error = style([
	sprinkles({
		color: "error",
	}),
	{ marginTop: "10px", marginBottom: "10px" },
]);

export const row = style([sprinkles({}), {}]);

export const label = style([
	sprinkles({
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between",
		color: "default",
	}),
	{},
]);
