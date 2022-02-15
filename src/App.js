import "./App.css";
import { useState } from "react";

function App() {
	const [catFact, setCatFact] = useState("");

	function factGetter() {
		fetch(
			"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2"
		)
			.then((response) => response.json())
			.then((data) => {
				let text = catFact + "\n";
				text = text + " " + data[0].text;

				setCatFact(text);
			});
	}
	return (
		<div className='App'>
			<header className='App-header'>
				<button onClick={factGetter}>Click to get a Fact!</button>
				<p> "\n" </p>
				<p className='App-style'>Cat Fact:{catFact}</p>
			</header>
		</div>
	);
}

export default App;
