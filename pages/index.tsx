import type { NextPage } from "next";
import { useState } from "react";

import Modal from "components/common/modal";

const Home: NextPage = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<button onClick={() => setShowModal(true)}>Open Modal</button>
			<Modal
				title="전자금융거래 이용약관"
				onClose={() => setShowModal(false)}
				show={showModal}
			>
				<h2>전자금융거래 이용약관</h2>
			</Modal>
		</div>
	);
};

export default Home;
