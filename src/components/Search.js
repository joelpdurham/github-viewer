import React from 'react';
import { useFetchUser } from '../hooks/useFetchUser';

export const Search = () => {
  const { input, changeInput, handleSubmit } = useFetchUser();

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={({ target }) => changeInput(target.value)}/>
      <button>Search</button>
    </form>
  );
};
