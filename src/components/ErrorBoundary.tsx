import React from "react";

type ErrorBoundaryStateT = {
	error: boolean;
};

class ErrorBoundary extends React.Component<any, ErrorBoundaryStateT> {
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
