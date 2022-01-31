import { typographyRecipe, TypographyVariants } from "components/common/typography/typography.css";

interface Props extends TypographyVariants {
	text: string;
	onClick?: () => void;
}

const Typography: React.FC<Props> = ({ text, fontSize = "12px", onClick }) => {
	return (
		<span
			className={typographyRecipe({ fontSize, isHover: Boolean(onClick) })}
			onClick={onClick}
		>
			{text}
		</span>
	);
};

export default Typography;
