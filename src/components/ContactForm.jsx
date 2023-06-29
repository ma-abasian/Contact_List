import Input from "./Input.jsx";
import {useState} from "react";
import {useInputValidator} from "../hooks/useInputValidator.js";


const ContactForm = ({onContactAdd, onSearch, searchTerm}) => {

  const [term, setTerm] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const {inputValidator, valid} = useInputValidator();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (valid) {
      onContactAdd(term)
      setTerm({
        name: '',
        phone: '',
        email: '',
      })
    } else {
      alert("Fill all field correctly")
    }
  }

  const handleChange = (value, title) => {
    setTerm((prevTerm) => {
          return {
            ...prevTerm,
            [title.toLowerCase()]: value.trimStart()
          }
        }
    )

    setTerm((prevState) => {
      inputValidator(title, prevState)
      return prevState
    })
  }


  const handleBlur = (title) => {
    if (title !== "Search") inputValidator(title, term)
  }

  return (
      <form onSubmit={handleSubmit} className="flex justify-between mb-10">
        <div className="flex-col">

          <div className="flex pb-3 justify-between">
            <div>
              <Input
                  title="Name"
                  value={term.name}
                  onChange={handleChange}
                  blur={handleBlur}
              />
              <div className="h-3">
                <p
                    id="name"
                    className="pl-2 hidden text-red-500 font-medium text-xs"
                >
                  Please fill this field
                </p>
              </div>
            </div>
            <div>
              <Input
                  title="Phone"
                  value={term.phone}
                  onChange={handleChange}
                  blur={handleBlur}
              />
              <div className="h-2">
                <p
                    id="phone"
                    className="pl-2 hidden text-red-500 font-medium text-xs"
                >
                  {!term.phone ? "Please fill this field" : "Enter valid phone number"}
                </p>
              </div>
            </div>
            <div>
              <Input
                  blur={handleBlur}
                  title="Email"
                  value={term.email}
                  onChange={handleChange}
              />
              <div className="h-3">
                <p
                    id="email"
                    className="pl-2 hidden text-red-500 font-medium text-xs"
                >
                  {!term.email ? "Please fill this field" : "Enter valid email"}
                </p>
              </div>
            </div>
          </div>

          <div className="flex">
            <Input
                title="Search"
                blur={handleBlur}
                onChange={onSearch}
                value={searchTerm}
            />
            <button
                className="btn"
                disabled={!term.name || !term.phone || !term.email}
                type="submit"
            >
              Add +
            </button>

          </div>
        </div>
      </form>
  );
};

export default ContactForm;