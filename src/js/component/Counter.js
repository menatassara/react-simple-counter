import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Counter = props => {
	return (
		<div className="container">
			<div className="counter-box p-2 display-2 d-flex justify-content-center text-white fw-bolder">
				<div>
					<i className="far fa-clock"></i>
				</div>
				<div>[props.dg6 % 10]</div>
				<div>[props.dg5 % 10]</div>
				<div>[props.dg4 % 10]</div>
				<div>[props.dg3 % 10]</div>
				<div>[props.dg2 % 10]</div>
				<div>[props.dg1 % 10]</div>
			</div>
		</div>
	);
};

let SecondsCounter = 0;
setInterval(function() {
	const digit1 = Math.floor(SecondsCounter);
	const digit2 = Math.floor(SecondsCounter / 10);
	const digit3 = Math.floor(SecondsCounter / 100);
	const digit4 = Math.floor(SecondsCounter / 1000);
	const digit5 = Math.floor(SecondsCounter / 10000);
	const digit6 = Math.floor(SecondsCounter / 100000);
	SecondsCounter++;
	ReactDOM.render(
		<Counter
			dg1={digit1}
			dg2={digit2}
			dg3={digit3}
			dg4={digit4}
			dg5={digit5}
			dg6={digit6}
		/>,
		document.querySelector("#app")
	);
}, 1000);

export default Counter;
