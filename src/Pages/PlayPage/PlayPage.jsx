import AddUserForm from 'components/AddUserForm.jsx/AddUserForm';
import s from './playPage.module.scss';
import UserList from 'shared/components/UserList/UserList';
import { addUser } from 'redux/items/items-operations';
import { useDispatch } from 'react-redux';

const PlayPage = () => {
  const dispatch = useDispatch();

  const onAddUser = data => {
    const action = addUser(data);
    dispatch(action);
  };

  return (
    <>
      <section className={s.game}>
        <div className="container">
          <div className={s.game__window}>
            <div className={s.game__info}>
              <UserList />
              <AddUserForm onSubmit={onAddUser} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlayPage;
