import React from 'react';
import propTypes from 'prop-types';

export default function Form(props) {
  return (
    <form onSubmit={props.onSubmit} className='form__wrapper'>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Enter Task..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: propTypes.any,
  value: propTypes.any,
  onChange: propTypes.any,
}