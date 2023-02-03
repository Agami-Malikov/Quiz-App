import s from './statistic.module.scss';

const Statistic = () => {
  return (
    <ul className={s.statistic}>
      <li className={s.statistic__item}>
        1000+<span className={s.statistic__text}>раундов</span>
      </li>
      <li className={s.statistic__item}>
        50+<span className={s.statistic__text}>часов</span>
      </li>
      <li className={s.statistic__item}>
        2-15<span className={s.statistic__text}>человек</span>
      </li>
    </ul>
  );
};

export default Statistic;
