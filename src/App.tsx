import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Counter from "./feat/counter/counter";
import About from "./feat/about/about";
import Contact from "./feat/contact/contact";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Counter</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Counter />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
