import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const colors = createThemeContract({
	text: {
		normal: null,
		gray: null,
	},
	background: {
		white: null,
		main: null,
		gray: null,
	},
});

export const lightTheme = createTheme(colors, {
	text: {
		normal: "#1F2937",
		gray: "#6B7280",
	},
	background: {
		white: "#fff",
		main: "#5FBEBB",
		gray: "#F2F2F2",
	},
});

export const darkTheme = createTheme(colors, {
	text: {
		normal: "#F9FAFB",
		gray: "#D1D5DB",
	},
	background: {
		white: "#fff",
		main: "#5FBEBB",
		gray: "#F2F2F2",
	},
});
