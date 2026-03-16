import { Routes, Route } from 'react-router';
import { ROUTES } from '../constants';
import { HomePage } from '../pages/HomePage';
import { ResultPage } from '../pages/ResultPage';
import { DetailPage } from '../pages/DetailPage';

function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.RESULT} element={<ResultPage />} />
      <Route path={ROUTES.DETAIL} element={<DetailPage />} />
    </Routes>
  );
}

export default AppRouter;
