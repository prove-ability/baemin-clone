import { useState } from "react";

import Button from "components/common/button";
import List from "components/common/list/list";
import Modal from "components/common/modal";
import SummerRegisterForm from "./summerRegisterForm";
import * as styles from "./home.css";
import { IRow } from "../common/list/row";

function Home() {
	// 유저리스트
	const headers = [
		"소환사 이름",
		"주포시젼",
		"티어",
		"최근 선호 챔피언",
		"승률",
		"메모",
		"등록일시",
	];
	const rows: IRow[] = [
		{
			name: "이름입니다",
			position: "jungle",
			tier: "실버",
			resent: "최근 챔피언",
			rate: "50",
			memo: "이겨주시면 돈드려요 편하게 친추 주세요",
			createdAt: "22.22.22",
		},
		{
			name: "이름입니다",
			position: "jungle",
			tier: "실버",
			resent: "최근 챔피언",
			rate: "50",
			memo: "이겨주시면 돈드려요 편하게 친추 주세요",
			createdAt: "22.22.22",
		},
		{
			name: "이름입니다",
			position: "jungle",
			tier: "실버",
			resent: "최근 챔피언",
			rate: "50",
			memo: "이겨주시면 돈드려요 편하게 친추 주세요",
			createdAt: "22.22.22",
		},
		{
			name: "이름입니다",
			position: "jungle",
			tier: "실버",
			resent: "최근 챔피언",
			rate: "50",
			memo: "이겨주시면 돈드려요 편하게 친추 주세요",
			createdAt: "22.22.22",
		},
	];

	// 소환사 등록 로직
	const [showModal, setShowModal] = useState(true);
	const onOpenShowModal = () => setShowModal(true);
	const onCloseShowModal = () => setShowModal(false);

	return (
		<>
			<div>
				{/* 소환사 등록 버튼 */}
				<div className={styles.buttonWrapper}>
					<Button onClick={onOpenShowModal}>소환사 등록</Button>
				</div>
				{/* 유저리스트 */}
				<div>
					<List headers={headers} rows={rows} />
				</div>
			</div>
			<Modal
				size="mini"
				show={showModal}
				title="소환사 등록하기"
				onClose={onCloseShowModal}
			>
				<SummerRegisterForm />
			</Modal>
		</>
	);
}

export default Home;
