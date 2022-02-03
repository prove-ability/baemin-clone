import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = () => (
	<Button>Button</Button>
);
