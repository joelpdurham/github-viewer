import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos, turnRepoViewOn, turnRepoViewOff } from '../actions/actions';
import { toGetUser, toGetRepos } from '../selectors/userSelectors';

export const useFetchRepos = () => {
  const dispatch = useDispatch();
  const user = useSelector(toGetUser);
  const repos = useSelector(toGetRepos);

  const showRepos = () => {
    if(!repos) dispatch(fetchRepos(user.login));
    dispatch(turnRepoViewOn());
  };

  const hideRepos = () => {
    dispatch(turnRepoViewOff());
  };

  return { showRepos, hideRepos, repos };
};
