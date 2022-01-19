/* eslint-disable react/prop-types */
import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { caughtError: false };
  }

  static getDerivedStateFromError(error) {
    // Do state changes here to render fallback UI.
    return { caughtError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Do logging or other than rendering logic here.
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.caughtError) {
      // Fallback UI here.
      return <h1>Something went wrong, we are working on it...</h1>;
    }

    return this.props.children;
  }
}
