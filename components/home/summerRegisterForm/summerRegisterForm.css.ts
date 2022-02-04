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
		alignItems: "center",
		justifyContent: "space-between",
		color: "default",
	}),
	{},
]);
