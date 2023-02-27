import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { Loader } from './Loader/Loader';

import css from './App.module.css';

export function App() {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      <p>Oops... Something went wrong :(</p>;
    }
  }, [error]);

  return (
    <div>
      <h1 className={css.phonBookTitle}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.titleContacts}>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p>Phonebook is empty. Please, add your first contact:)</p>
      )}
      {isLoading && <Loader />}
    </div>
  );
}
