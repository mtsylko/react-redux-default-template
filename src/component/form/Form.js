import React from 'react'

const Form = ({ onSubmit, children }) => {
  return <form method='POST' onSubmit={ onSubmit }>
    {children}
  </form>;
};

export default Form;