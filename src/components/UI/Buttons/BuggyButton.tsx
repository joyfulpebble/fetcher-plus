import React from "react";

import Button from "./Button";

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
			<Button
				onClick={this.handleClick}
				content="Сломать BCE!!!"
				butonType="default"
				buttonStyle="danger"
				disabled={false}
			/>
		);
	}
}

export default BuggyButton;
