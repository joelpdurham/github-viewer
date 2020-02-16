import { useDispatch, useSelector } from 'react-redux'
import { fetchRepos } from '../actions/actions';
import { toGetUser } from '../selectors/userSelectors';

export const useFetchRepos = () => {
  const dispatch = useDispatch();
  const user = useSelector(toGetUser);
  
  const handleClick = () => {
    dispatch(fetchRepos(user.login));
  };

  return { handleClick };
}