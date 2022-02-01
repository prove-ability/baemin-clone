import { style } from "@vanilla-extract/css"
import { sprinkles } from "components/common/theme.css"

export const header = style([
	sprinkles({
		zIndex: "100",
		maxWidth: "768px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		background: "dark",
		color: "default",
	}),
	{
		position: "fixed",
		top: 0,
		width: "100%",
		height: "32px",
	},
])

// export const wrapper = style([
// 	sprinkles({
// 		display: "flex",
// 		flexDirection: "column",
// 		paddingBottom: "large",
// 	}),
// 	{
// 		margin: "0 auto",
// 		height: "100vh",
// 		width: "100%",
// 		maxWidth: "768px",
// 	},
// ])
