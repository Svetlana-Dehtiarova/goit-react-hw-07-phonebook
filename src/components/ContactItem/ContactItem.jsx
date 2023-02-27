import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

import css from './ContactItem.module.css';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const contactsDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li id={id} className={css.item}>
      <p className={css.contact}>
        {name}............
        {phone}
      </p>
      <button
        className={css.btn}
        type="submit"
        onClick={() => contactsDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
