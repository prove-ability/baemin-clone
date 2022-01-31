import Modal from "components/common/modal";
import Slider, { Item } from "components/common/slider";
import Typography from "components/common/typography";
import { footerRecipe, liRecipe, ulRecipe } from "components/layout/footer/footer.css";
import { termsRecipe } from "./footer.css";
import { useState } from "react";

function Footer() {
	const items: Item[] = [
		{ caption: "baemin1", path: "http://img.woowahan.com/www/common/baemin.jpg" },
		{
			caption: "baemin2",
			path: "https://cdn.dailyimpact.co.kr/news/photo/201901/50618_9997_5649.jpg",
		},
		{
			caption: "baemin3",
			path: "https://miro.medium.com/max/992/1*DVM8hgRJalsAeayE3CEvAg.png",
		},
		{ caption: "baemin4", path: "https://t1.daumcdn.net/cfile/tistory/99B879455EA790590D" },
		{ caption: "baemin5", path: "https://t1.daumcdn.net/cfile/tistory/99E208435FB6322304" },
		{
			caption: "baemin6",
			path: "http://t1.daumcdn.net/brunch/service/user/4OZm/image/_3p_nMCKQt1KBQcvc7bFYr3jcYc",
		},
	];

	// 사업자정보확인
	const [checkBusinessInfoShowModal, setCheckBusinessInfoShowModal] = useState(false);
	const onOpenCheckBusinessInfoShowModal = () => setCheckBusinessInfoShowModal(true);
	const onCloseCheckBusinessInfoShowModal = () => setCheckBusinessInfoShowModal(false);
	// 이용약관
	const [termsOfUseShowModal, setTermsOfUseShowModal] = useState(false);
	const onOpenTermsOfUseShowModal = () => setTermsOfUseShowModal(true);
	const onCloseTermsOfUseShowModal = () => setTermsOfUseShowModal(false);
	// 전자긍용거래이용약관
	const [termsOfTranscationShowModal, setTermsOfTranscationShowModal] = useState(false);
	const onOpenTermsOfTranscationShowModal = () => setTermsOfTranscationShowModal(true);
	const onClaseTermsOfTranscationShowModal = () => setTermsOfTranscationShowModal(false);
	// 개인정보처리방침
	const [checkPrivacyPolicyShowModal, setCheckPrivacyPolicyShowModal] = useState(false);
	const onOpenCheckPrivacyPolicyShowModal = () => setCheckPrivacyPolicyShowModal(true);
	const onCloseCheckPrivacyPolicyShowModal = () => setCheckPrivacyPolicyShowModal(false);

	return (
		<>
			<footer className={footerRecipe()}>
				{/* 케러셀 */}
				<div>
					<Slider items={items} />
				</div>
				{/* 약관들 */}
				<div className={termsRecipe()}>
					<ul className={ulRecipe()}>
						<li className={liRecipe()}>
							<Typography
								text="사업자정보확인"
								onClick={onOpenCheckBusinessInfoShowModal}
							/>
						</li>
						<li className={liRecipe()}>
							<Typography text="이용약관" onClick={onOpenTermsOfUseShowModal} />
						</li>
						<li className={liRecipe()}>
							<Typography
								text="전자금용거래이용약관"
								onClick={onOpenTermsOfTranscationShowModal}
							/>
						</li>
						<li className={liRecipe()}>
							<Typography
								text="개인정보처리방침"
								onClick={onOpenCheckPrivacyPolicyShowModal}
							/>
						</li>
					</ul>
				</div>
				{/* 회사 정보 */}
				<div>
					<p>(주)우아한형제들</p>
					<p>
						(주)우아한형제들은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서
						(주)우아한형제들은 상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.
					</p>
				</div>
			</footer>
			{/* modal */}
			<>
				<Modal
					title="사업자정보확인"
					show={checkBusinessInfoShowModal}
					onClose={onCloseCheckBusinessInfoShowModal}
				>
					<h2>사업자정보확인</h2>
				</Modal>
				<Modal
					title="이용약관"
					show={termsOfUseShowModal}
					onClose={onCloseTermsOfUseShowModal}
				>
					<h2>이용약관</h2>
				</Modal>
				<Modal
					title="전자금융거래 이용약관"
					show={termsOfTranscationShowModal}
					onClose={onClaseTermsOfTranscationShowModal}
				>
					<h2>전자금융거래 이용약관</h2>
				</Modal>
				<Modal
					title="개인정보 처리방침"
					show={checkPrivacyPolicyShowModal}
					onClose={onCloseCheckPrivacyPolicyShowModal}
				>
					<h2>개인정보 처리방침</h2>
				</Modal>
			</>
		</>
	);
}

export default Footer;
