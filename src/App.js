import "./App.css";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@material-ui/core/Button";
import "fontsource-roboto";
import Typography from "@material-ui/core/Typography";

function App() {
	const [catFact, setCatFact] = useState("");
	let counter = 0;
	function factGetter() {
		counter++;
		fetch(
			"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2"
		)
			.then((response) => response.json())
			.then((data) => {
				let text = catFact + "\n";
				text = text + " Cat Fact #" + counter + data[0].text;

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

				<p className='App-style'>
					<Typography variant='h6' color='initial'>
						Welcome to my Cat-Fact website. Click the button to get as many Cat
						facts as you like.
					</Typography>
					Cat Fact:{catFact}
				</p>
			</header>
		</div>
	);
}

export default App;
