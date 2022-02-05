import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { screen, userEvent } from "@storybook/testing-library";

import SummerRegisterForm from ".";
import Modal from "components/common/modal";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
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

	const nameInput = screen.getByLabelText("삭제 비밀번호", {
		selector: "input",
	});

	await userEvent.type(nameInput, "12", {
		delay: 200,
	});

	// const passwordInput = screen.getByLabelText("password", {
	// 	selector: "input",
	// });

	// await userEvent.type(passwordInput, "ExamplePassword", {
	// 	delay: 100,
	// });
	// See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
	const submitButton = screen.getByText("등록");

	await userEvent.click(submitButton);
};
