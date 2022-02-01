import { style } from "@vanilla-extract/css"
import { sprinkles } from "components/common/theme.css"

export const container = style([
	sprinkles({
		maxWidth: "768px",
		background: "dark",
		color: "default",
	}),
	{
		position: "fixed",
		bottom: "0",
		width: "100%",
		height: "32px",
	},
])

export const ul = style([
	sprinkles({
		display: "flex",
		flexDirection: "row",
	}),
	{ height: "100%" },
])

export const li = style([
	sprinkles({
		display: "flex",
		placeItems: "center",
	}),
	{
		flex: 1,
	},
])
