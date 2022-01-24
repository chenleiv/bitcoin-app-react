import { useEffect, useState } from 'react';

export const ContactFilter = (props) => {
  const [filterBy, setFilterBy] = useState({
    term: '',
  });

  useEffect(() => {
    props.onChangeFilter(filterBy);
  }, [filterBy]);

  const handleChange = ({ target }) => {
    const value = target.value === 'number' ? +target.value : target.value;
    setFilterBy(value);
    setFilterBy((prevFilterBy) => ({ ...prevFilterBy, term: value }));
  };
  return (
    <section className='contact-filter'>
      <label htmlFor='Search'>
        <input
          autoFocus
          onChange={handleChange}
          type='text'
          name='contact'
          id='contact'
          placeholder='Search by Name / Phone'
        />
      </label>
    </section>
  );
};
