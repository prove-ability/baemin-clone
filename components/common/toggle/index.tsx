import { Switch } from "antd";
import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";

interface Props {
	id: string;
	value: boolean;
	onChange: (e: any) => void;
}

const Toggle: ForwardRefExoticComponent<Props & RefAttributes<any>> =
	forwardRef((props, ref) => {
		return <Switch {...props} checked={props.value} ref={ref} />;
	});

Toggle.displayName = "toggle";

export default Toggle;
