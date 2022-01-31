import { navRecipe, ulRecipe } from "./nav.css";

const Nav = () => {
	return (
		<nav className={navRecipe()}>
			<ul className={ulRecipe()}>
				<li>홈</li>
				<li>검색</li>
				<li>즐겨찾기</li>
				<li>주문내역</li>
				<li>My 이츠</li>
			</ul>
		</nav>
	);
};

export default Nav;
