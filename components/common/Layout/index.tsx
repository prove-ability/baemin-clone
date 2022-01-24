import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

const Layout: React.FC = ({ children }) => {
	return (
		<div>
			<Header />
			<Nav />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
