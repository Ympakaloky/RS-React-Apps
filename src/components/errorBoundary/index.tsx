import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../store/Interface';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    errorMessage: null,
  };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    console.log('getDerivedStateFromError:', error);
    return { hasError: true, errorMessage: error.toString() };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('componentDidCatch:', error, info);
    this.logErrorToServices(error.toString(), info.componentStack || '');
  }

  logErrorToServices = (errorMessage: string, componentStack: string) => {
    console.log('Logging error:', errorMessage, componentStack);
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>{this.props.fallback}</p>
          <button onClick={this.handleReload}>Reload Page</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
