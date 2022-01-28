import _ from "lodash";
import Carousel, { CarouselProps } from "nuka-carousel";

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
				<img
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
