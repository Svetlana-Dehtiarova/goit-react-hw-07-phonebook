import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.length ? (
        contacts.map(({ id, name, phone }) => (
          <ContactItem key={id} id={id} name={name} phone={phone} />
        ))
      ) : (
        <p className={css.text}>
          Unfortunately, there are no contacts with such parameters...
        </p>
      )}
    </ul>
  );
};

export default ContactList;
