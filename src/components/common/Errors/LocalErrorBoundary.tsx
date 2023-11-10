import { ErrorBoundary } from 'react-error-boundary';
import WrongAccessFallback from '../../../pages/Errors/WrongAccessFallback';

const LocalErrorBoundary = ({ children }: any) => {
  return <ErrorBoundary FallbackComponent={WrongAccessFallback}>{children}</ErrorBoundary>;
};

export default LocalErrorBoundary;
