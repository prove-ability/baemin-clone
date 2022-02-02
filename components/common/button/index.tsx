import { ButtonHTMLAttributes } from "react";
// import { buttonRecipe } from "styles/components/button.css";

interface Props
	extends Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> {
	recipe?: "default";
}

const Button: React.FC<Props> = ({ children, type = "button", ...rest }) => {
	return (
		<button type={type} {...rest}>
			{children}
		</button>
	);
};

export default Button;
