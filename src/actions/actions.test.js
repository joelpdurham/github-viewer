import { fetchUser, FETCH_USER, fetchRepos, FETCH_REPOS } from './actions';

jest.mock('../services/getUser.js');

describe('ACTION TESTS', () => {
  it('Call the fetch user action', () => {
    const dispatch = jest.fn();
    const action = fetchUser('joelpdurham');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_USER,
          payload: {
            login: 'joelpdurham',
            id: 123456
          }
        });
      });
  });

  it('Call the fetch repo action', () => {
    const dispatch = jest.fn();
    const action = fetchRepos('joelpdurham');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: FETCH_REPOS,
          payload: [{
            name: 'artist-search',
            id: 1234
          }]
        });
      });
  });
});
