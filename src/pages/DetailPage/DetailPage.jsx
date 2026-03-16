import { useParams, useNavigate, useLocation } from 'react-router';
import { AppLayout } from '../../components/Layout';
import { NameDetail } from '../../components/NameDetail';
import { ErrorState } from '../../components/ErrorState';
import { useNameDetail } from '../../hooks/useNameDetail';
import { ROUTES } from '../../constants';
import './DetailPage.css';

function DetailPage() {
  const { index } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const nameList = location.state?.nameList || [];
  const { detail, notFound } = useNameDetail(nameList, index);

  // 如果没有数据（刷新页面导致 state 丢失），引导回首页
  if (nameList.length === 0) {
    return (
      <AppLayout title="名字详情" showBack>
        <ErrorState
          message="数据已过期，请重新起名"
          onRetry={() => navigate(ROUTES.HOME)}
        />
      </AppLayout>
    );
  }

  if (notFound) {
    return (
      <AppLayout title="名字详情" showBack>
        <ErrorState
          message="未找到该名字"
          onRetry={() => navigate(-1)}
        />
      </AppLayout>
    );
  }

  return (
    <AppLayout title={detail.fullName} showBack>
      <div className="detail-page">
        <NameDetail detail={detail} />
      </div>
    </AppLayout>
  );
}

export default DetailPage;
