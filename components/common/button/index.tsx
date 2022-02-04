import { ButtonHTMLAttributes } from "react";
import * as styles from "./button.css";
interface Props
	extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> {
	recipe?: "default";
	className?: string;
	fullSize?: boolean;
	color?: "default" | "primary";
}

const Button: React.FC<Props> = ({
	children,
	type = "button",
	fullSize = false,
	color = "default",
	...rest
}) => {
	return (
		<button
			className={styles.button({ fullSize, color })}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
