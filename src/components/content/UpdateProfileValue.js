import { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

// https://www.smashingmagazine.com/2020/07/styled-components-react/
const Button = styled.button`
  /* This renders the buttons above... Edit me! */

  margin: 0.25vw 0px;
`;
const UpdateProfileValue = () => {
	const { userValue, setUserValue, drink, setDrink } = useContext(UserContext);
	const [newValue, setNewValue] = useState(userValue); //username
	const [newDrink, setNewDrink] = useState(drink); //drink


	//functions to update values
	//updates username
	const onClickUpdate = e => {
		e.preventDefault();
		// https://www.w3schools.com/jsref/event_preventdefault.asp#:~:text=The%20preventDefault()%20method%20cancels,link%20from%20following%20the%20URL
		setUserValue(newValue);
	};

	//updates drink
	const onClickUpdateDrink = e => {
		e.preventDefault();
		setDrink(newDrink);
	};

	//updates both username and drink
	const onClickUpdateAll = e => {
		e.preventDefault();
		setUserValue(newValue);
		setDrink(newDrink);
	};


	return (
		<div className="container col-xl-10 col-xxl-8 px-4 py-5">
			<div className="row align-items-center g-lg-5 py-5">
				<div className="col-lg-7 text-center text-lg-start">
					<h1 className="display-4 fw-bold lh-1 mb-3">
						{userValue + " "} drinks {drink}.
					</h1>
					<p className="col-lg-10 fs-4">De Bistro</p>
				</div>
				<div className="col-md-10 mx-auto col-lg-5">
					<form className="p-4 p-md-5 border rounded-3 bg-light">
						<div className="form-floating mb-3">
							Drink:
							<input
								type="text"
								className="form-control"
								id="floatingInput"
								placeholder="Drink"
								value={newDrink}
								onChange={e => setNewDrink(e.target.value)}
							/>
						</div>
						<div className="form-floating mb-3">
							Name:
							<input
								type="text"
								className="form-control"
								id="floatingInput"
								placeholder="Name"
								value={newValue}
								onChange={e => setNewValue(e.target.value)}
							/>
						</div>
						<Button
							onClick={onClickUpdateDrink}
							className="w-100 btn btn-lg btn-primary"
						>
							Update Drink
						</Button>{" "}
						<Button
							onClick={onClickUpdate}
							className="w-100 btn btn-lg btn-primary"
						>
							Update Client
						</Button>
						<Button
							onClick={onClickUpdateAll}
							className="w-100 btn btn-lg btn-primary"
						>
							Update both drink and client
						</Button>
						<hr className="my-4" />
						<small className="text-muted">Thank you, {userValue}!</small>
					</form>
				</div>
			</div>
		</div>
	);


};
export default UpdateProfileValue;

