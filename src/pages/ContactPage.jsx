import { useCallback, useEffect } from 'react';
import { ContactList } from '../cmps/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { ContactFilter } from '../cmps/ContactFilter';
import { Link } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { loadContacts, setFilterBy } from '../store/actions/contactAction';

export const ContactPage = () => {
  const { contacts } = useSelector((state) => state.contactModule);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
    // return () => {
    //
    // }
  }, []);

  const onChangeFilter = useCallback((filterBy) => {
    dispatch(setFilterBy(filterBy));
    dispatch(loadContacts());
  }, []);

  if (!contacts)
    return (
      <div className='loader-wrapper'>
        <img src={require('../assets/img/loading.gif')} />
      </div>
    );

  return (
    <section className='contact-page'>
      <Link className='add-link' to={'/contacts/edit/'}>
        <PersonAddIcon />
      </Link>
      <ContactFilter onChangeFilter={onChangeFilter} />
      <ContactList contacts={contacts} />
    </section>
  );
};
