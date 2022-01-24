import { contactService } from '../services/contactService';
import { Link } from 'react-router-dom';
import { addMove } from '../store/actions/userAction';
import { useDispatch } from 'react-redux';
import { TransferFunds } from '../cmps/TransferFunds';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import { AiOutlineEdit } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export const ContactDetailsPage = (props) => {
  const [contact, setContact] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    getContact();
  }, [props.match.params.id]);

  const onTransferCoins = (contact, amount) => {
    dispatch(addMove(contact, amount));
    props.history.push('/homepage');
  };

  const getContact = async () => {
    const id = props.match.params.id;
    const contact = await contactService.getContactById(id);
    setContact(contact);
  };

  if (!contact)
    return (
      <div className='loading'>
        <img src={require('../assets/img/loading.gif')} />
      </div>
    );
  return (
    <section className='contact-details-page'>
      <Link className='edit' to={`/contacts/edit/${contact._id}`}>
        <AiOutlineEdit />
      </Link>
      <Link className='back' to={'/contacts'}>
        <MdOutlineKeyboardBackspace />
      </Link>
      <div className='contact-details-preview'>
        <img src={`https://i.pravatar.cc/120?u=${contact.imgNum}`} alt='' />
        <h1>{contact.name}</h1>
        <div>{contact.email}</div>
        <div>{contact.phone}</div>
        <TransferFunds contact={contact} onTransferCoins={onTransferCoins} />
      </div>
    </section>
  );
};

// const mapDispatchToProps = {
//   addMove,
// };

// export const ContactDetailsPage = connect(null, mapDispatchToProps)(_ContactDetailsPage);
