import s from './gameRoundsPage.module.scss';
import questions from 'data/questions';

import { Link } from 'react-router-dom';

const roundList = () => {
  const roundList = questions.map(({ id, round, questions }) => (
    <li className={s.roundList__item} key={id}>
      <Link to={`/play/${id}`}>{round}</Link>
    </li>
  ));
  return <ul className={s.roundList}>{roundList}</ul>;
};

export default roundList;
