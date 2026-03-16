import { NavBar } from 'antd-mobile';
import { useNavigate } from 'react-router';
import './AppLayout.css';

/**
 * 全局布局组件
 * 提供顶部导航栏和内容区域
 */
function AppLayout({ title, showBack = false, children }) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="app-layout">
      <NavBar
        onBack={showBack ? handleBack : undefined}
        back={showBack ? '' : null}
      >
        {title}
      </NavBar>
      <div className="app-layout-content">
        {children}
      </div>
    </div>
  );
}

export default AppLayout;
