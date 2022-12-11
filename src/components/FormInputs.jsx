import React from 'react'

const FormInputs = (props) => {
  const [focused, setFocused] = React.useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };
  return (
    <div className='formInput'>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className='errorMessage'>{errorMessage}</span>
    </div>
  )
}

export default FormInputs