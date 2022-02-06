import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Toggle from ".";

export default {
	title: "Components/Toggle",
	component: Toggle,
} as ComponentMeta<typeof Toggle>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Toggle> = (args) => {
	const [value, setValue] = useState<boolean>(false);
	const onChangeValue = (checked: boolean) => setValue(checked);

	return <Toggle {...args} value={value} onChange={onChangeValue} />;
};

//👇 Each story then reuses that template
export const Default = Template.bind({});
