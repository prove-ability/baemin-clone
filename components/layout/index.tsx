import Footer from "./footer"
import Header from "./header"
// import { layoutRecipe, wrapperRecipe } from "components/layout/layout.css";
import Nav from "./nav"
import { sprinkles } from "components/common/theme.css"

const Layout: React.FC = ({ children }) => {
	return (
		<div
		// className={sprinkles({
		// 	padding: { mobile: "small" },
		// 	color: { lightMode: "pink", darkMode: "pink" },
		// 	background: { lightMode: "white", darkMode: "white" },
		// })}
		>
			<div
			// className={wrapperRecipe()}
			>
				<Header />
				<main>{children}</main>
				<Footer />
				<Nav />
			</div>
		</div>
	)
}

export default Layout
