import Image from "next/image";

import _ from "lodash";
import Carousel, { CarouselProps } from "nuka-carousel";

// example
// 케러셀
// const items: Item[] = [
// 	{ caption: "baemin1", path: "http://img.woowahan.com/www/common/baemin.jpg" },
// 	{
// 		caption: "baemin2",
// 		path: "https://cdn.dailyimpact.co.kr/news/photo/201901/50618_9997_5649.jpg",
// 	},
// 	{
// 		caption: "baemin3",
// 		path: "https://miro.medium.com/max/992/1*DVM8hgRJalsAeayE3CEvAg.png",
// 	},
// 	{ caption: "baemin4", path: "https://t1.daumcdn.net/cfile/tistory/99B879455EA790590D" },
// 	{ caption: "baemin5", path: "https://t1.daumcdn.net/cfile/tistory/99E208435FB6322304" },
// 	{
// 		caption: "baemin6",
// 		path: "http://t1.daumcdn.net/brunch/service/user/4OZm/image/_3p_nMCKQt1KBQcvc7bFYr3jcYc",
// 	},
// ]
export interface Item {
	caption: string;
	path: string;
}

interface Props {
	items: Item[];
}

const Slider: React.FC<Props> = ({ items }) => {
	const settings: CarouselProps = {
		wrapAround: true,
		dragging: true,
		height: "100px",
		cellAlign: "center",
		autoplay: true,
		defaultControlsConfig: {
			prevButtonStyle: { display: "none" },
			nextButtonStyle: { display: "none" },
			pagingDotsStyle: { display: "none" },
		},
	};
	return (
		<Carousel {...settings}>
			{_.map(items, (item, index) => (
				<Image
					key={index}
					src={item.path}
					alt={item.caption}
					data-slide={`Slide ${index + 1}`}
					tabIndex={index}
				/>
			))}
		</Carousel>
	);
};

export default Slider;
