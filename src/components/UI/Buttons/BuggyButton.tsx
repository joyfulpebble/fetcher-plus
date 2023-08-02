import { Component } from "react";
import Button from "./Button";

import type { ElementsT } from "../../../types/elements";

class BuggyButton extends Component<{}, ElementsT.BuggyButtonState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			releaseBugs: false
		};
	}

	handleClick = () => {
		this.setState({
			releaseBugs: true
		});
	};

	render() {
		if (this.state.releaseBugs) {
			throw new Error("Test crash!");
		}

		return (
			<Button
				onClick={this.handleClick}
				content="Сломать BCE!!!"
				buttonStyle="danger"
				disabled={false}
			/>
		);
	}
}

export default BuggyButton;
