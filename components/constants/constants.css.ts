import { createGlobalTheme } from "@vanilla-extract/css";

import { STYLE } from "./constants";

const STYLES = createGlobalTheme(":root", STYLE);

export { STYLES };
