import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Button } from 'antd-mobile';
import { AppLayout } from '../../components/Layout';
import { NameList } from '../../components/NameList';
import { LoadingState } from '../../components/LoadingState';
import { ErrorState } from '../../components/ErrorState';
import { useNameGeneration } from '../../hooks/useNameGeneration';
import { getDetailPath, ROUTES } from '../../constants';
import './ResultPage.css';

const CACHE_KEY = 'baby_name_result';

function ResultPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = location.state?.params;
  const { loading, error, nameList, generate, setList } = useNameGeneration();
  const hasRequested = useRef(false);

  useEffect(() => {
    if (!params) {
      navigate(ROUTES.HOME, { replace: true });
      return;
    }

    // 防止 StrictMode 下重复调用
    if (hasRequested.current) return;
    hasRequested.current = true;

    // 优先读取缓存，从详情页返回时不重新请求
    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const data = JSON.parse(cached);
        setList(data);
        return;
      } catch {
        sessionStorage.removeItem(CACHE_KEY);
      }
    }

    generate(params).then((result) => {
      sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
    }).catch(() => {});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSelect = (index) => {
    navigate(getDetailPath(index), { state: { nameList } });
  };

  const handleRetry = () => {
    if (params) {
      sessionStorage.removeItem(CACHE_KEY);
      generate(params).then((result) => {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(result));
      }).catch(() => {});
    }
  };

  const handleBack = () => {
    sessionStorage.removeItem(CACHE_KEY);
    navigate(ROUTES.HOME);
  };

  return (
    <AppLayout title="起名结果" showBack>
      <div className="result-page">
        {loading && <LoadingState />}

        {!loading && error && (
          <ErrorState message={error} onRetry={handleRetry} />
        )}

        {!loading && !error && nameList.length > 0 && (
          <>
            <NameList nameList={nameList} onSelect={handleSelect} />
            <div className="result-page-actions">
              <Button fill="outline" color="primary" onClick={handleBack}>
                重新起名
              </Button>
            </div>
          </>
        )}
      </div>
    </AppLayout>
  );
}

export default ResultPage;
