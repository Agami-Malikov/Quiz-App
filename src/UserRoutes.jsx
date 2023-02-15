import questions from 'data/questions';

import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('Pages/HomePage/HomePage'));
const PlayPage = lazy(() => import('Pages/PlayPage/PlayPage'));
const ScoresPage = lazy(() => import('Pages/ScoresPage/ScoresPage'));
const Game = lazy(() => import('Pages/PlayPage/Game/Game'));
const UserRoutes = () => {

  
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />}>
          {questions.map(({ id,questions }) => (
            <Route key={id} path={id} element={<Game questions={questions} />} />
          ))}
          {/* <Route path="round" element={<GameRoundsPage />} /> */}
        </Route>
        <Route path="/scores" element={<ScoresPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
