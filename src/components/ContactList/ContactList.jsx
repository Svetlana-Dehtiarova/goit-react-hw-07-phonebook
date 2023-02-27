import { useSelector } from 'react-redux';
import { selectFilter, selectContacts } from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  return (
    <ul className={css.list}>
      {contacts
        .filter(contact => {
          return filter
            ? contact.name.toLowerCase().includes(filter.toLowerCase())
            : true;
        })
        .map(({ id, name, phone }) => {
          return <ContactItem key={id} id={id} name={name} phone={phone} />;
        })}
    </ul>
  );
};

export default ContactList;
