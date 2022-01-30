import { typographyRecipe, TypographyVariants } from "components/common/typography/typography.css";

interface Props extends TypographyVariants {
	text: string;
}

const Typography: React.FC<Props> = ({ text, fontSize = "12px" }) => {
	return <p className={typographyRecipe({ fontSize: "12px" })}>{text}</p>;
};

export default Typography;
