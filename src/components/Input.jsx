import React from 'react'

const Input = ({ type, name, placeholder, value, onChange }) => {
  return (
    <input
      className="w-full p-2 border rounded"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...(type !== 'checkbox' ? { required: true } : {})}
    />
  )
}

export default Input
