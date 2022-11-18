import { useContext } from "react";
import { UserContext } from "../../UserContext";

const Menu = () => {
	const { userValue } = useContext(UserContext);

	return (
		<ul className="nav nav-pills">
			<li className="nav-item">
				<a href="/" className="nav-link " aria-current="page">
					Home
				</a>
			</li>
			<li className="nav-item">
				<a href="/" className="nav-link">
					Pricing
				</a>
			</li>
			<li className="nav-item">
				<a href="/" className="nav-link">
					FAQs
				</a>
			</li>
			<li className="nav-item">
				<a href="/" className="nav-link active">
					{userValue}'s Profile
				</a>
			</li>
		</ul>
	);
};

export default Menu;
