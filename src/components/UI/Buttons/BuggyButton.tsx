import React from "react";

import DangerButton from "./DangerButton";

interface BuggyButtonState {
  releaseBugs: boolean;
}

class BuggyButton extends React.Component<any, BuggyButtonState> {
  constructor(props: BuggyButtonState) {
    super(props);
    this.state = {
      releaseBugs: false,
    };
  }

  handleClick = () => {
    this.setState({
      releaseBugs: true,
    });
  };

  render() {
    if (this.state.releaseBugs) {
      throw new Error("Test crash!");
    }

    return (
      <DangerButton variant="outlined" onClick={this.handleClick} color="error">
        Scary Button!
      </DangerButton>
    );
  }
}

export default BuggyButton;