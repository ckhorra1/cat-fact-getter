import "./App.css";
import { useState } from "react";
import myImage from "./catfactbanner.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

function App() {
	const [catFact, setCatFact] = useState("");
	const [counter, setCounter] = useState("");

	function factGetter() {
		let counter = 0;
		counter++;
		fetch(
			"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2"
		)
			.then((response) => response.json())
			.then((data) => {
				let text = catFact + "\n";
				text = text + " Cat Fact #" + setCounter(counter) + data[0].text;

				setCatFact(text);
			});
	}
	return (
		<div className='App'>
			<img src={myImage}></img>
			<header className='App-header'>
				<Typography variant='h4' color='initial'>
					Welcome to my Cat-Fact website. Click the button to get as many Cat
					facts as you like.
				</Typography>
				<br /> <br />
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
