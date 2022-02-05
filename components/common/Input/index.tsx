import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";

import * as styles from "./input.css";

interface Props {
	id: string;
	maxLength?: number;
	onChange: (e: any) => void;
	numbersOnly?: boolean;
}
const Input: ForwardRefExoticComponent<Props & RefAttributes<any>> = forwardRef(
	({ numbersOnly, ...rest }, ref) => {
		const onChange = numbersOnly
			? (e: any) => {
					rest.onChange({
						...e,
						target: {
							...e.target,
							value: e.target.value.replace(/[^0-9]/g, ""),
						},
					});
			  }
			: rest.onChange;
		return (
			<input
				{...rest}
				onChange={onChange}
				className={styles.input}
				ref={ref}
			/>
		);
	}
);

Input.displayName = "input";

export default Input;
