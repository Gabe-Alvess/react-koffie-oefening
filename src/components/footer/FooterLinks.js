import { useContext } from "react";
import { UserContext } from "../../UserContext";

const FooterLinks = () => {
	const { userValue } = useContext(UserContext);

	return (
		<div className="nav col-md-4 justify-content-end">
			<a href="/">Ask us a question, {userValue}</a>
		</div>
	);
};

export default FooterLinks;
