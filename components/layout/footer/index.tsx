import Modal from "components/common/modal"
import Typography from "components/common/typography"
import * as styles from "./footer.css"

import { useState } from "react"

function Footer() {
	// 사업자정보확인
	const [checkBusinessInfoShowModal, setCheckBusinessInfoShowModal] = useState(false)
	const onOpenCheckBusinessInfoShowModal = () => setCheckBusinessInfoShowModal(true)
	const onCloseCheckBusinessInfoShowModal = () => setCheckBusinessInfoShowModal(false)
	// 이용약관
	const [termsOfUseShowModal, setTermsOfUseShowModal] = useState(false)
	const onOpenTermsOfUseShowModal = () => setTermsOfUseShowModal(true)
	const onCloseTermsOfUseShowModal = () => setTermsOfUseShowModal(false)
	// 전자긍용거래이용약관
	const [termsOfTranscationShowModal, setTermsOfTranscationShowModal] = useState(false)
	const onOpenTermsOfTranscationShowModal = () => setTermsOfTranscationShowModal(true)
	const onClaseTermsOfTranscationShowModal = () => setTermsOfTranscationShowModal(false)
	// 개인정보처리방침
	const [checkPrivacyPolicyShowModal, setCheckPrivacyPolicyShowModal] = useState(false)
	const onOpenCheckPrivacyPolicyShowModal = () => setCheckPrivacyPolicyShowModal(true)
	const onCloseCheckPrivacyPolicyShowModal = () => setCheckPrivacyPolicyShowModal(false)

	return (
		<>
			<footer className={styles.footer}>
				{/* 약관들 */}
				<div>
					<ul>
						<li>
							<Typography
								text="사업자정보확인"
								onClick={onOpenCheckBusinessInfoShowModal}
							/>
						</li>
						<li>
							<Typography text="이용약관" onClick={onOpenTermsOfUseShowModal} />
						</li>
						<li>
							<Typography
								text="전자금용거래이용약관"
								onClick={onOpenTermsOfTranscationShowModal}
							/>
						</li>
						<li>
							<Typography
								text="개인정보처리방침"
								onClick={onOpenCheckPrivacyPolicyShowModal}
							/>
						</li>
					</ul>
				</div>
				{/* 회사 정보 */}
				<div>
					<p>
						쿠팡(주) | 대표이사 : 박대준 사업
						<br />
						사업자 등록번호 : 120-88-00767 | 통신판매업신고 : 2017-서울송파-0680 |
						서울시 송파구 송파대로 570 쿠팡이츠 고객센터: <b>1670-9827</b>| 이메일 문의:
						eatshelp@coupang.com | 쿠팡은 통신판매업자로서 통신판매의 당사자가 아니며,
						판매자가 등록한 상품 정보, 상품의 품질 및 거래에 대해서 일체의 책임을 지지
						않습니다.<b>이용약관 및 개인정보처리방침</b>|호스팅서비스제공자: 쿠팡(주) |
						사업자정보확인 않습니다.
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
	)
}

export default Footer
