import { useContext } from "react";
import { UserContext } from "../../UserContext";

const Branding = () => {
	const { userValue, drink } = useContext(UserContext);

	// console.log("userValue" + userValue);
	// console.log("drink" + drink);
	return (
		<a
			href="/"
			className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
		>
			<svg className="bi me-2" width="40" height="32">
				<use xlinkHref="#bootstrap"></use>
			</svg>
			<span className="fs-4">
				{userValue + " "} drinks {drink}
			</span>
		</a>
	);
};

export default Branding;
