import "./App.css";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@material-ui/core/Button";

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
				<Button
					onClick={factGetter}
					startIcon={<GitHubIcon />}
					size='medium'
					variant='contained'>
					Click to get a Fact!
				</Button>

				<p className='App-style'>Cat Fact:{catFact}</p>
			</header>
		</div>
	);
}

export default App;
