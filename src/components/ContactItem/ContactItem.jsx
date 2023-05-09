import PropTypes from 'prop-types';
import { ListItem, InfoContainer, InfoItemContainer, Data, DeleteBtn } from './ContactItem.styled';

function ContactItem({ contacts, onDeleteContact }) {
    return (
        <>
            {contacts.map(({ id, name, number }) => (
                <ListItem key={id}>
                    <InfoContainer>
                        <InfoItemContainer>
                            <Data>{name}</Data>
                        </InfoItemContainer>
                        <InfoItemContainer>
                            <Data>{number}</Data>
                        </InfoItemContainer>
                    </InfoContainer>
                    <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
                        Delete contact
                    </DeleteBtn>
                </ListItem>
            ))}
        </>
    );
}


export default ContactItem;

ContactItem.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};