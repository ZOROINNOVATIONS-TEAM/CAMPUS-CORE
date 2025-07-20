// src/components/ErrorBoundary.jsx
import React from "react";

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("Chart rendering error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 text-sm text-red-600 bg-red-50 rounded">
          Something went wrong with the chart.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;