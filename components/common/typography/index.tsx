interface Props {
	text: string;
	onClick?: () => void;
}

const Typography: React.FC<Props> = ({ text, onClick }) => {
	return (
		<span
			// className={typographyRecipe({ fontSize, isHover: Boolean(onClick) })}
			onClick={onClick}
		>
			{text}
		</span>
	);
};

export default Typography;
