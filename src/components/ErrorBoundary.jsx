import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error:", error, "Info:", info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", color: "red" }}>
          <h2>Something went wrong.</h2>
          <p>Please check browser console for details.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;