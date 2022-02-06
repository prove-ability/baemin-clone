import { ComponentStory, ComponentMeta } from "@storybook/react";

import Input from ".";

export default {
	title: "Components/Input",
	component: Input,
} as ComponentMeta<typeof Input>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
	onChange: (e) => console.log("test"),
	numbersOnly: false,
};

export const NumbersOnly = Template.bind({});
NumbersOnly.args = { ...Default.args, numbersOnly: true, maxLength: 4 };
