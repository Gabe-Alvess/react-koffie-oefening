import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Content from "./components/content/Content";
import { UserContext } from "./UserContext";

function App() {
	const [userValue, setUserValue] = useState("Adam ");
	const [drink, setDrink] = useState("Coffee");
	const [month, setMonth] = useState("September");
	const [color, setColor] = useState("Green");
	const [age, setAge] = useState("18");
	const [nationality, setNationality] = useState("Belgian");

	return (
		<main>
			<UserContext.Provider value={{ userValue, setUserValue, drink, setDrink, month, setMonth, color, setColor, age, setAge, nationality, setNationality }}>
				<Header />
				<Content />
				<Footer />
			</UserContext.Provider>
		</main>

	);
}

export default App;
