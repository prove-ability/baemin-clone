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

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
	children: "버튼:D",
	type: "button",
	fullSize: false,
	color: "default",
};

export const Primary = Template.bind({});
Primary.args = { ...Default.args, color: "primary" };
