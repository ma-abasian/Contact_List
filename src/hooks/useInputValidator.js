import {useState} from "react";


export const useInputValidator = () => {
  const [isValid, setIsValid] = useState([false, false, false])
  const validateEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const validatePhone = /^\d{4}\d{3}\d{4}$/
  let newValid = []
  const inputValidator = (title, term) => {
    switch (title) {
      case "Email":
        if (!term[title.toLowerCase()] || !term[title.toLowerCase()].trim().match(validateEmail)) {
          document.getElementById(title.toLowerCase()).classList.remove("hidden");
          newValid = isValid.map((valid, index) => {
            if (index === 0) valid = false
            return valid
          })
          setIsValid(newValid)
        } else {
          document.getElementById(title.toLowerCase()).classList.add("hidden");
          newValid = isValid.map((valid, index) => {
            if (index === 0) valid = true
            return valid
          })
          setIsValid(newValid)
        }
        break
      case "Phone":
        if (!term[title.toLowerCase()] || !term[title.toLowerCase()].trim().match(validatePhone)) {
          document.getElementById(title.toLowerCase()).classList.remove("hidden");
          newValid = isValid.map((valid, index) => {
            if (index === 1) valid = false
            return valid
          })
          setIsValid(newValid)
        } else {
          document.getElementById(title.toLowerCase()).classList.add("hidden");
          newValid = isValid.map((valid, index) => {
            if (index === 1) valid = true
            return valid
          })
          setIsValid(newValid)
        }
        break
      default:
        if (!term[title.toLowerCase()]) {
          document.getElementById(title.toLowerCase()).classList.remove("hidden");
          newValid = isValid.map((valid, index) => {
            if (index === 2) valid = false
            return valid
          })
          setIsValid(newValid)
        } else {
          document.getElementById(title.toLowerCase()).classList.add("hidden");
          newValid = isValid.map((valid, index) => {
            if (index === 2) valid = true
            return valid
          })
          setIsValid(newValid)
        }
    }
  }

  return {
    inputValidator,
    valid: isValid[0] && isValid[1] && isValid[2]
  }
};

