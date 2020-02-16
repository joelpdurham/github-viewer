import { useState } from 'react';
import { fetchUser } from '../actions/actions';
import { useDispatch } from 'react-redux';

export const useFetchUser = () => {
  const dispatch = useDispatch();
  const [input, changeInput] = useState('');
  
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchUser(input));
  };

  return { input, changeInput, handleSubmit };
};
