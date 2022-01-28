import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { colors } from "styles/themes.css";

const typographyStyle = style({
	color: colors.text.normal,
	":hover": {},
	selectors: {},
});

export const typographyRecipe = recipe({
	base: [typographyStyle],
	variants: {
		fontSize: {
			"12px": { fontSize: "12px" },
			"13px": { fontSize: "13px" },
			"14px": { fontSize: "14px" },
		},
	},
});

// export type TypographyVariants = RecipeVariants<typeof typographyRecipe>;

export interface TypographyVariants {
	fontSize?: "12px" | "13px" | "14px";
}
