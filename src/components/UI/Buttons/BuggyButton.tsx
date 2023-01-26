import React from "react";
import CustomButton from "./CustomButton";

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
      <CustomButton variant="outlined" onClick={this.handleClick} color="error">
        Scary Button!
      </CustomButton>
    );
  }
}

export default BuggyButton;