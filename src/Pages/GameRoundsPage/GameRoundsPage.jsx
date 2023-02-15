// import s from './gameRoundsPage.module.scss';

import questions from 'data/questions';

import { NavLink } from 'react-router-dom';

const GameRoundsPage = () => {
  const roundList = questions.map(({ round, id }) => (
    <li key={id}>
      <NavLink to={id}>{round}</NavLink>
    </li>
  ));
  return <ul>{roundList}</ul>;
};

export default GameRoundsPage;
