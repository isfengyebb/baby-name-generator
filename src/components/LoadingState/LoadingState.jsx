import { SpinLoading } from 'antd-mobile';
import './LoadingState.css';

function LoadingState({ text = '正在为宝宝精心起名中...' }) {
  return (
    <div className="loading-state">
      <div className="loading-state-ornament">
        <span className="loading-state-char">名</span>
      </div>
      <SpinLoading color="primary" style={{ '--size': '36px' }} />
      <p className="loading-state-text">{text}</p>
      <div className="loading-state-dots">
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span className="loading-dot" />
      </div>
    </div>
  );
}

export default LoadingState;
