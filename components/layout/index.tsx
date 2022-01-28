import { layoutRecipe, wrapperRecipe } from "styles/layout/layout.css";
import Footer from "./footer";
import Header from "./header";
// import Nav from "./nav";

const Layout: React.FC = ({ children }) => {
	return (
		<div className={layoutRecipe()}>
			<div className={wrapperRecipe()}>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
