import { InputHTMLAttributes } from "react";

interface Props extends Pick<InputHTMLAttributes<HTMLButtonElement>, "type"> {
	recipe?: "default";
}

const Input: React.FC<Props> = () => {
	return <input />;
};

export default Input;
