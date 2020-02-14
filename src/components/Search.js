import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeInput } from '../actions/actions';

export const Search = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useSelector(state => state);

  return (
    <input type="text" value={searchTerm} onChange={() => dispatch(changeInput())} />
  );
};
