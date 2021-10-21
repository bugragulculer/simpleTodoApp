import React from "react";
import propTypes from 'prop-types';

export default function ListItem(props) {
  const { name, done } = props.todo;
  
  const onSetStatus = (e) => {
    if (e === true) {
      props.uncomplete()
    } else {
      props.complete()
    }
  }

  return (
    <li className='list__wrapper' onClick={() => onSetStatus(done)}>
      <p  className={`item item--${done}`}>{name}</p>
    </li>
  );
}

ListItem.propTypes = {
  todo: propTypes.any,
  complete: propTypes.any,
  uncomplete: propTypes.any,
}