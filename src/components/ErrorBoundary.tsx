import React from "react";
import type { ElementsT } from "../types/elements";

class ErrorBoundary extends React.Component<any, ElementsT.ErrorBoundaryStateI> {
	constructor(props: {}) {
		super(props);
		this.state = {
			error: false
		};
	}

	static getDerivedStateFromError() {
		return {
			error: true
		};
	}

	render() {
		if (this.state.error) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
