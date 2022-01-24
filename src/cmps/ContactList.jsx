// import { Component } from 'react';
import ContactPreview from './ContactPreview';
import { Link } from 'react-router-dom';

export function ContactList({ contacts }) {
  if (!contacts)
    return (
      <div className='loader-wrapper'>
        <img src={require('../assets/img/loading.gif')} />
      </div>
    );
  return (
    <section className='contact-list'>
      {contacts.map((contact) => (
        <Link to={`/contacts/${contact._id}`} key={contact._id}>
          <ContactPreview contact={contact} key={contact._id} />
        </Link>
      ))}
    </section>
  );
}
