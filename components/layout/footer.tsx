import Slider, { Item } from "components/common/slider";
import { footerRecipe } from "styles/layout/footer.css";
import { termsRecipe } from "../../styles/layout/footer.css";

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
	return (
		<footer className={footerRecipe()}>
			{/* 케러셀 */}
			<div>
				<Slider items={items} />
			</div>
			{/* 약관들 */}
			<div className={termsRecipe()}>
				<ul>
					<li>사업자정보확인</li>
					<li>이용약관</li>
					<li>전자금용거래이용약관</li>
					<li>개인정보처리방침</li>
				</ul>
			</div>
			{/* 회사 정보 */}
			(주)우아한형제들
		</footer>
	);
}

export default Footer;
