function ContactPreview({ contact }) {
  const imgUrl = `https://i.pravatar.cc/120?u=${contact.imgNum}`;

  return (
    <section className='contact-preview'>
      <img src={imgUrl} alt='' />
      <div className='contact'>
        <h3>{contact.name}</h3>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
      </div>
    </section>
  );
}

export default ContactPreview;
