import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../actions/actions';

export const Search = () => {
  const [input, changeInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUser(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={({ target }) => changeInput(target.value)}/>
      <button>Search</button>
    </form>
  );
};
