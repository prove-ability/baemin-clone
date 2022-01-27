import { footerRecipe } from "styles/components/layout/footer.css";

function Footer() {
	return (
		<footer className={footerRecipe()}>
			{/* 케러셀 */}
			<div>케러셀</div>
			{/* 약관들 */}
			<ul>
				<li>사업자정보확인</li>
				<li>이용약관</li>
				<li>전자금용거래이용약관</li>
				<li>개인정보처리방침</li>
			</ul>
			{/* 회사 정보 */}
			(주)우아한형제들
		</footer>
	);
}

export default Footer;
