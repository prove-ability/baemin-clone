import * as styles from "components/common/modal/modal.css"
import { sprinkles } from "../theme.css"

interface Props {
	show: boolean
	onClose: () => void
	title: string
}

const Modal: React.FC<Props> = ({ show, onClose, children, title }) => {
	const handleCloseClick = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault()
		onClose()
	}

	return (
		<div className={styles.container({ show })}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<span onClick={handleCloseClick}>x</span>
				</div>
				{title && <p>{title}</p>}
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	)
}

export default Modal
