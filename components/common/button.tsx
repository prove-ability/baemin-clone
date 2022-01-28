import { ButtonHTMLAttributes } from "react";
import { buttonRecipe } from "styles/components/button.css";

interface Props extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
	recipe?: "default";
}

const Button: React.FC<Props> = ({ children, type = "button", recipe = "default" }) => {
	return (
		<button className={buttonRecipe()} type={type}>
			{children}
		</button>
	);
};

export default Button;
