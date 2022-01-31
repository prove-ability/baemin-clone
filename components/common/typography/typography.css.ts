import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { STYLES } from "components/constants/constants.css";

const typographyStyle = style({
	color: STYLES.text.normal,
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
		isHover: {
			true: {
				":hover": {
					cursor: "pointer",
				},
			},
		},
	},
});

// export type TypographyVariants = RecipeVariants<typeof typographyRecipe>;

export interface TypographyVariants {
	fontSize?: "12px" | "13px" | "14px";
}
