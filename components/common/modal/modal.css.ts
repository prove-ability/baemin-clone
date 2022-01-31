import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

// modal
const modalBodyStyle = style({
	paddingTop: "10xp",
});

export const modalBodyRecipe = recipe({
	base: [modalBodyStyle],
	variants: {},
});

// header
const modalheaderStyle = style({
	display: "flex",
	justifyContent: "flex-end",
	fontSize: "25px",
});

export const modalHeaderRecipe = recipe({
	base: [modalheaderStyle],
	variants: {},
});

//
const modalStyle = style({
	backgroundColor: "white",
	width: "100%",
	maxWidth: "739px",
	height: "100%",
	borderRadius: "15px",
	padding: "15px",
});

export const modalRecipe = recipe({
	base: [modalStyle],
	variants: {},
});

// Overlay
const modalOverlayStyle = style({
	zIndex: "9999",
	position: "absolute",
	top: "0",
	left: "0",
	width: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "rgba(0, 0, 0, 0.3)",
	transition: "transform 1s ease",
});

export const modalOverlayRecipe = recipe({
	base: [modalOverlayStyle],
	variants: {
		show: {
			true: {
				transform: "translateY(0)",
				visibility: "visible",
				height: "100%",
			},
			false: {
				transform: "translateY(110%)",
				visibility: "hidden",
			},
		},
	},
});
