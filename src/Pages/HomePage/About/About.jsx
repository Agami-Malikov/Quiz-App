import s from './about.module.scss';

const About = () => {
  return (
    <ul className={s.about}>
      <li className={s.about__item}>
        Пригодятся любые знания: вы точно получите удовольствие от своего
        ума
      </li>
      <li className={s.about__item}>
        Во время игры можно вкусно есть и пить, а еще забыть про телефон на пару
        часов
      </li>
    </ul>
  );
};

export default About;
