import * as styles from "./nav.css"

const Nav = () => {
	return (
		<nav className={styles.container}>
			<ul className={styles.ul}>
				<li className={styles.li}>홈</li>
				<li className={styles.li}>검색</li>
				<li className={styles.li}>즐겨찾기</li>
				<li className={styles.li}>주문내역</li>
				<li className={styles.li}>My 이츠</li>
			</ul>
		</nav>
	)
}

export default Nav
