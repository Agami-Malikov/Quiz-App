import About from './About/About';
import s from './homePage.module.scss';
import Statistic from './Statistic/Statistic';

const HomePage = () => {
  return (
    <>
      <section className={s.home}>
        <div className="container">
          <h1 className="visually-hidden">Домашняя Страница</h1>
          <p className={s.home__text}>
            командная игра, победить в которой помогут эрудиция, логика и
            сообразительность. Quiz - Family ! — хороший способ провести вечер с
            друзьями, размять мозги и получить новые позитивные впечатления.
          </p>
          <Statistic />
          <About />
        </div>
      </section>
    </>
  );
};

export default HomePage;
