import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

export const Search = () => {
  const [input, changeInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={({ target }) => changeInput(target.value)}/>
      <button>Search</button>
    </form>
  );
};
