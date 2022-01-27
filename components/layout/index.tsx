import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";

const Layout: React.FC = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
