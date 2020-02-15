import { fetchUser, FETCH_USER } from './actions';

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
});
