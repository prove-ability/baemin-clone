import { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import * as styles from "./textarea.css";

interface Props {}

const Textarea: ForwardRefExoticComponent<Props & RefAttributes<any>> =
	forwardRef((props, ref) => {
		return <textarea className={styles.textarea} {...props} ref={ref} />;
	});

Textarea.displayName = "textarea";

export default Textarea;
