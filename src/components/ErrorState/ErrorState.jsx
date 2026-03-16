import { Button } from 'antd-mobile';
import './ErrorState.css';

function ErrorState({ message, onRetry }) {
  return (
    <div className="error-state">
      <div className="error-state-icon">😥</div>
      <p className="error-state-message">{message}</p>
      {onRetry && (
        <Button color="primary" onClick={onRetry}>
          重新尝试
        </Button>
      )}
    </div>
  );
}

export default ErrorState;
