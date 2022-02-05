import * as styles from "./select.css";
import { Radio, RadioChangeEvent } from "antd";
import React, { ForwardRefExoticComponent, RefAttributes } from "react";

interface Props {
	id: string;
	value: string;
	options: Record<"label" | "value", string>[];
	onChange: (e: RadioChangeEvent) => void;
}

const Select: ForwardRefExoticComponent<Props & RefAttributes<any>> =
	React.forwardRef((props, ref) => {
		return (
			<Radio.Group
				className={styles.select}
				{...props}
				ref={ref}
				optionType="button"
				buttonStyle="solid"
			/>
		);
	});

Select.displayName = "select";

export default Select;
