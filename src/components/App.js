import React from 'react';
import { Search } from '../components/Search';
import { User } from './User';
import { Loading } from './Loading';
import { useSelector } from 'react-redux';
import { toGetLoading } from '../selectors/userSelectors';

export default function App() {
  const loading = useSelector(toGetLoading);
  return (
    <>
      { loading ? <Loading /> : <></> }
      <Search /> 
      <User />
    </>
  );
}
