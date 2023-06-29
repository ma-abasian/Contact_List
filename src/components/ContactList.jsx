import {ContactItem} from "./ContactItem.jsx";

export const ContactList = ({
                              list,
                              searchTerm,
                              handleDelete
                            }) => (
    <ul className="contact-list__items">
      <li className="contact-list__item title">
        <span className="contact-list__item-slice">Name</span>
        <span className="contact-list__item-slice">Phone</span>
        <span className="contact-list__item-slice">Email</span>
      </li>
      {list
          .filter(({name}) => {
            return name.includes(searchTerm)
          })
          .map(({name, phone, email, id}) => {
                return <ContactItem
                    key={id}
                    name={name}
                    phone={phone}
                    email={email}
                    searchTerm={searchTerm}
                    onDelete={() => handleDelete(id)}
                />
              }
          )}
    </ul>
);

export default ContactList;