import { List } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { deleter } from 'redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(state => state.filter.value);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ContactListItem
          onDeleteBtbClick={() => dispatch(deleter(contact.id))}
          key={contact.id}
          contact={contact}
        ></ContactListItem>
      ))}
    </List>
  );
};
