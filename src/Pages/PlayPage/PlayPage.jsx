import s from './playPage.module.scss';

import AddUserForm from 'components/AddUserForm.jsx/AddUserForm';
import UserList from 'shared/components/UserList/UserList';

import { addUser } from 'redux/items/items-operations';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';

import RoundsList from 'shared/components/RoundsList/RoundsList';

const PlayPage = () => {
  const dispatch = useDispatch();

  const onAddUser = data => {
    const action = addUser(data);
    dispatch(action);
  };

  return (
    <>
      <section className={s.game}>
        <div className={s.game__window}>
          <div className="container">
            <div className={s.game__info}>
              <UserList />
              <AddUserForm onSubmit={onAddUser} />
            </div>
              <RoundsList />
          </div>
        </div>
        <Outlet />
      </section>
    </>
  );
};

export default PlayPage;
