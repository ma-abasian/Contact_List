import React from 'react';
import clsx from 'clsx'

const Input = ({
                 title,
                 value,
                 onChange,
                 blur
               }) => (
    <input
        onBlur={() => blur(title)}
        onChange={
          ({target}) => onChange(target.value, title)
        }
        value={value}
        className={clsx(
            "input",
            {"search": title === "Search"}
        )}
        placeholder={title}
    />
)

export default Input;