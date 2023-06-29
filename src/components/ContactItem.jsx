export const ContactItem = ({
                              name,
                              phone,
                              email,
                              onDelete,
                              searchTerm
                            }) => {

  const index = name.indexOf(searchTerm.trim())

  return (
      <li className="contact-list__item">
          <span className="contact-list__item-slice">
            <span>{name.slice(0, index)}</span>
            <span className="find">{name.slice(index, index + searchTerm.length)}</span>
            <span>{name.slice(index + searchTerm.length)}</span>
          </span>
          <span className="contact-list__item-slice pl-2">
            {phone}
          </span>
          <span className="contact-list__item-slice pl-5">
            {email}
          </span>
          <button title="Delete Item" onClick={onDelete}>❌</button>
      </li>
  );
};