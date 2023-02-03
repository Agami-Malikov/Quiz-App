import { Suspense ,lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'))
const PlayPage = lazy(() => import('Pages/PlayPage/PlayPage'));
const ScoresPage = lazy(() => import('Pages/ScoresPage/ScoresPage'));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/scores" element={<ScoresPage />} />
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;