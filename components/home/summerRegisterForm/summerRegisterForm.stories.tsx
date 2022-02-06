import { ComponentStory, ComponentMeta } from "@storybook/react";

import { screen, userEvent } from "@storybook/testing-library";

import SummerRegisterForm from ".";
import Modal from "components/common/modal";

export default {
	title: "Form/SummerRegisterForm",
	component: SummerRegisterForm,
} as ComponentMeta<typeof SummerRegisterForm>;

const Template: ComponentStory<typeof SummerRegisterForm> = (args) => (
	<Modal
		show={true}
		onClose={() => console.log("onClose!")}
		title="title"
		size="mini"
	>
		<SummerRegisterForm />
	</Modal>
);

export const FilledForm = Template.bind({});
FilledForm.play = async () => {
	const memoInput = screen.getByLabelText("메모", {
		selector: "textarea",
	});

	await userEvent.type(memoInput, "안녕하세요\n듀오구해요!!@@", {
		delay: 100,
	});

	const passwordInput = screen.getByLabelText("삭제 비밀번호", {
		selector: "input",
	});

	await userEvent.type(passwordInput, "12", {
		delay: 100,
	});

	const submitButton = screen.getByText("등록");

	await userEvent.click(submitButton);
};
