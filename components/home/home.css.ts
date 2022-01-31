import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { STYLES } from "components/constants/constants.css";

const homeStyle = style({
	backgroundColor: STYLES.background.gray,
});

export const homeRecipe = recipe({
	base: [homeStyle],
	variants: {},
});

// export type TypographyVariants = RecipeVariants<typeof typographyRecipe>;

export interface HomeVariants {}
