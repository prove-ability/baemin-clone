import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from ".";

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Modal",
	component: Modal,
	args: {
		title: "제목 입니다",
	},
} as ComponentMeta<typeof Modal>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Modal> = (args) => (
	<Modal {...args}>MODAL 입니다</Modal>
);

export const FullModal = Template.bind({});
FullModal.args = {
	show: true,
	onClose: () => console.log("닫기"),
	size: "full",
};
// FullModal.play = async ({ canvasElement }) => {};

export const MiniModal = Template.bind({});
MiniModal.args = {
	...FullModal.args,
	size: "mini",
};
