import { modalBodyRecipe, modalHeaderRecipe, modalOverlayRecipe, modalRecipe } from "./modal.css";

interface Props {
	show: boolean;
	onClose: () => void;
	title: string;
}

const Modal: React.FC<Props> = ({ show, onClose, children, title }) => {
	const handleCloseClick = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault();
		onClose();
	};

	return (
		<div className={modalOverlayRecipe({ show })}>
			<div className={modalRecipe()}>
				<div className={modalHeaderRecipe()}>
					<span onClick={handleCloseClick}>x</span>
				</div>
				{title && <p>{title}</p>}
				<div className={modalBodyRecipe()}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
