import * as styles from "./modal.css";
import { useEffect } from "react";
import Typography from "../typography";

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
		if (show) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "unset";
	}, [show]);

	return (
		<>
			<div className={styles.container({ show })}>
				<div className={styles.wrapper({ size })}>
					<div className={styles.header}>
						<span />
						<span>
							<Typography size="medium" weight={500}>
								{title}
							</Typography>
						</span>
						<span
							className={styles.close}
							onClick={handleCloseClick}
						>
							x
						</span>
					</div>
					<div className={styles.body}>{children}</div>
				</div>
			</div>
		</>
	);
};

Modal.displayName = "Modal";
export default Modal;
