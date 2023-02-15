import s from './addUserForm.module.scss';

import avatars from 'data/userAvatars';

import { useState } from 'react';

const AddUserForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    name: '',
    avatar: '',
    rank: '',
    points: 0,
  });

  const [active, setActive] = useState(false);

  const setClassName = () => {
    setActive(prev => !prev);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState({
      name: '',
      avatar: '',
      rank: 'Новичок',
      points: 0,
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const avatarChange = ({ target }) => {
    setState({
      ...state,
      avatar: target,
    });
  };

  const userAvatars = avatars.map(({ url, id }) => (
    <li className={s.form__item} key={id} onClick={avatarChange}>
      <img src={url} alt="" />
    </li>
  ));

  const { name } = state;

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.form__label} htmlFor="name">
        Добавить Игрока
      </label>
      <input
        id="name"
        className={s.form__input}
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может содержать только буквы, апостроф, тире и пробелы. Например, Адриан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян."
        required
      />

      <button className={s.form__button} onClick={handleSubmit} type="button">
        <span>+</span>
      </button>

      <p className={s.form__text} onClick={setClassName}>
        Выбрать Аватар
        <span className={s.form__arrow}></span>
      </p>
      <ul
        className={`${s.form__list} ${active ? s.active : ''}`}
        onChange={handleChange}
        name="avatar"
        id="select"
      >
        {userAvatars}
      </ul>
    </form>
  );
};

export default AddUserForm;
