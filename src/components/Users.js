import React from 'react';
import { useSelector } from 'react-redux';
import { getUsers } from '../services/getUsers';

export const User = () => {
  const user = useSelector(getUsers);

  return (
    <>
      <h1>This is a user</h1>
      <p>{user.name}</p>
    </>
  );
};
