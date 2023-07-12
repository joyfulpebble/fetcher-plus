import React from "react";

import DangerButton from "./Button";

interface BuggyButtonState {
	releaseBugs: boolean;
}

class BuggyButton extends React.Component<{}, BuggyButtonState> {
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
			<DangerButton
				onClick={this.handleClick}
				content="Сломать BCE!!!"
			>
				Scary Button!
			</DangerButton>
		);
	}
}

export default BuggyButton;
