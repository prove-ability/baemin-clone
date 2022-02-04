import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles, vars } from "styles/theme.css";

// container
const typographyStyle = style([sprinkles({}), {}]);

export const typography = recipe({
	base: typographyStyle,
	variants: {
		size: {
			xxs: {
				fontSize: vars.fontSizes.xxs,
			},
			xsmall: {
				fontSize: vars.fontSizes.xs,
			},
			small: {
				fontSize: vars.fontSizes.sm,
			},
			base: {
				fontSize: vars.fontSizes.base,
			},
			medium: {
				fontSize: vars.fontSizes.md,
			},
			large: {
				fontSize: vars.fontSizes.lg,
			},
		},
		weight: {
			400: {
				fontWeight: vars.fontWeight[400],
			},
			500: {
				fontWeight: vars.fontWeight[500],
			},
			600: {
				fontWeight: vars.fontWeight[600],
			},
			700: {
				fontWeight: vars.fontWeight[700],
			},
		},
	},
	defaultVariants: {
		size: "base",
		weight: 400,
	},
});
