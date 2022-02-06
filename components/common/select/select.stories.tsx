import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import Select from ".";

export default {
	title: "Components/Select",
	component: Select,
} as ComponentMeta<typeof Select>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Select> = (args) => {
	const [value, setValue] = useState<string>("전체");
	const onChangeValue = (e: any) => setValue(e.target.value);
	const options = [
		{ label: "전체", value: "전체" },
		{ label: "1", value: "1" },
		{ label: "2", value: "2" },
		{ label: "3", value: "3" },
	];
	return (
		<Select
			{...args}
			value={value}
			options={options}
			onChange={onChangeValue}
		/>
	);
};

//👇 Each story then reuses that template
export const Default = Template.bind({});
