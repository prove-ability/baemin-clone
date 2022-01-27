import { createThemeContract, createTheme } from "@vanilla-extract/css";

export const colors = createThemeContract({
	primary: null,
	secondary: null,
	text: {
		normal: null,
		dimmed: null,
	},
	background: {
		white: null,
		main: null,
		gray: null,
	},
});

export const lightTheme = createTheme(colors, {
	primary: "#1E40AF",
	secondary: "#DB2777",
	text: {
		normal: "#1F2937",
		dimmed: "#6B7280",
	},
	background: {
		white: "#fff",
		main: "#5FBEBB",
		gray: "#F2F2F2",
	},
});

export const darkTheme = createTheme(colors, {
	primary: "#60A5FA",
	secondary: "#F472B6",
	text: {
		normal: "#F9FAFB",
		dimmed: "#D1D5DB",
	},
	background: {
		white: "#fff",
		main: "#5FBEBB",
		gray: "#F2F2F2",
	},
});
