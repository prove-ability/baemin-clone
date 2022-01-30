import { headerRecipe } from "components/layout/header/header.css";

function Header() {
	return (
		<header className={headerRecipe()}>
			{/* 서비스 전체보기 버튼 */}
			<span>SVG</span>
			{/* 주소 나열 및 클릭시 하단에 주소 설정 팝업 */}
			<span>광명시 철산동</span>
			{/* 알림 및 마이페이지 바로가기 */}
			<span>SVG</span>
		</header>
	);
}

export default Header;
