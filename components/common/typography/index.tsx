import * as styles from "./typhography.css";

interface Props {
	onClick?: () => void;
	// css props
	size?: "xxs" | "xsmall" | "small" | "base" | "medium" | "large";
	weight?: 400 | 500 | 600 | 700;
}

const Typography: React.FC<Props> = ({
	children,
	onClick,
	size = "base",
	weight = 400,
}) => {
	return (
		<span className={styles.typography({ size, weight })} onClick={onClick}>
			{children}
		</span>
	);
};

export default Typography;
