import s from './startGameButton.module.scss';

const StartGameButton = ({timerHandler, startGameHandler}) => {
  return (
    <div className={s.startBox} onClick={timerHandler}>
      <button className={s.startBox__btn} onClick={startGameHandler}>
        Начать игру <span className={s.startBox__icon}></span>
      </button>
    </div>
  );
};

export default StartGameButton;
