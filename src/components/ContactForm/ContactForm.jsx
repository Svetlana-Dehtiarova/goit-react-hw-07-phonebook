import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const prop = e.currentTarget.name;
    switch (prop) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'phone':
        setPhone(e.currentTarget.value);
        break;
      default:
        throw new Error('Error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      id: nanoid(),
      name: name,
      phone: phone,
    };
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === data.name.toLowerCase() ||
          contact.phone === data.phone
      )
    ) {
      alert(
        `Name: ${data.name} or number: ${data.phone} is already in phonebook`
      );
      return;
    }

    dispatch(addContact(data));
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={css.inputName}
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.inputNumber}
          value={phone}
          onChange={handleChange}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={css.buttonEditor}>
        Add contact
      </button>
    </form>
  );
}
