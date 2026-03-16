import { useNavigate } from 'react-router';
import { AppLayout } from '../../components/Layout';
import { NameForm } from '../../components/NameForm';
import { ROUTES } from '../../constants';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleSubmit = (params) => {
    // 将表单参数通过路由 state 传递到结果页
    navigate(ROUTES.RESULT, { state: { params } });
  };

  return (
    <AppLayout title="宝宝起名助手">
      <div className="home-page">
        <NameForm onSubmit={handleSubmit} />
      </div>
    </AppLayout>
  );
}

export default HomePage;
