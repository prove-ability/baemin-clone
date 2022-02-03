import * as styles from "./modal.css";
import { useEffect } from "react";

interface Props {
	show: boolean;
	onClose: () => void;
	title: string;
	size: "full" | "mini";
}

const Modal: React.FC<Props> = ({ show, onClose, children, title, size }) => {
	const handleCloseClick = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault();
		onClose();
	};

	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "unset";
		};
	}, []);

	return (
		<div className={styles.container({ show })}>
			<div className={styles.wrapper({ size })}>
				<div className={styles.header}>
					<span>{title}</span>
					<span onClick={handleCloseClick}>x</span>
				</div>
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	);
};

Modal.displayName = "Modal";
export default Modal;
