import Footer from "./footer";
import Header from "./header";
import Nav from "./nav";

const Layout: React.FC = ({ children }) => {
	return (
		<div className="h-full">
			<Nav />
			<div>
				<Header />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
