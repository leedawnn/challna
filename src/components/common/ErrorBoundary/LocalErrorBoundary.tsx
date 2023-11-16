import { ErrorBoundary } from 'react-error-boundary';
import WrongAccessFallback from '../ErrorFallback/WrongAccessFallback';

const LocalErrorBoundary = ({ children }: any) => {
  return <ErrorBoundary FallbackComponent={WrongAccessFallback}>{children}</ErrorBoundary>;
};

export default LocalErrorBoundary;
