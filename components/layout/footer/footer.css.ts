import { style } from "@vanilla-extract/css"
import { sprinkles } from "../../common/theme.css"

export const footer = style([
	sprinkles({
		color: "default",
	}),
	{
		marginTop: "auto",
	},
])
