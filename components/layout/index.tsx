import Footer from "./footer";
import Header from "./header";
import { layoutRecipe, wrapperRecipe } from "components/layout/layout.css";
import Nav from "./nav";

const Layout: React.FC = ({ children }) => {
	return (
		<div className={layoutRecipe()}>
			<div className={wrapperRecipe()}>
				<Header />
				<main>{children}</main>
				<Footer />
				<Nav />
			</div>
		</div>
	);
};

export default Layout;
