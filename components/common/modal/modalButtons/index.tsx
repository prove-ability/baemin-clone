import * as styles from "./modalButtons.css";
import Button from "components/common/button";

/**
 * 확인 버튼만 있는 경우
 * 취소, 저장 버튼이 있는 경우
 */

interface Props {
	isSubmit?: boolean;
}

const ModalButtons: React.FC<Props> = ({ isSubmit = false }) => {
	return (
		<div className={styles.container}>
			<Button fullSize>{isSubmit ? "취소" : "확인"}</Button>
			{isSubmit && (
				<Button color="primary" fullSize type="submit">
					등록
				</Button>
			)}
		</div>
	);
};

export default ModalButtons;
