import { contactService } from '../services/contactService';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

export const ContactEditPage = (props) => {
  // const [contact, setContact] = useState(null);
  const [contact, handleChange, setContact] = useForm(null);

  useEffect(() => {
    (async () => {
      try {
        const contactId = props.match.params.id;
        const contact = contactId
          ? await contactService.getContactById(contactId)
          : contactService.getEmptyContact();
        setContact(contact);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const onSaveContact = async (ev) => {
    ev.preventDefault();
    await contactService.saveContact({ ...contact });
    props.history.push('/contacts');
  };

  if (!contact)
    return (
      <div className='loader-wrapper'>
        <img src={require('../assets/img/loading.gif')} />
      </div>
    );
  return (
    <section className='edit-form'>
      <Link className='back' to={`/contacts/?${contact._id}`}>
        <MdOutlineKeyboardBackspace />
      </Link>
      <form onSubmit={onSaveContact} className='edit-form flex'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Write contact name'
          value={contact.name}
          onChange={handleChange}
        />
        <label htmlFor='phone'>phone</label>
        <input
          type='text'
          name='phone'
          id='phone'
          placeholder='Write contact phone'
          value={contact.phone}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Write contact email'
          value={contact.email}
          onChange={handleChange}
        />

        <button>Save</button>
      </form>
    </section>
  );
};
