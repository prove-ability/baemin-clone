import Header from "components/layout/header"
import Footer from "components/layout/footer"
import Nav from "components/layout/nav"

import * as styles from "components/layout/layout.css"

const Layout: React.FC = ({ children }) => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<Header />
				<main>{children}</main>
				<Footer />
				<Nav />
			</div>
		</div>
	)
}

export default Layout
