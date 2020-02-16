import { FETCH_USER } from '../actions/actions';
import { userReducer } from './userReducer';


describe('REDUCER TEST', () => {
  it('handles fetching user info', () => {
    const action = {
      type: FETCH_USER,
      payload: {
        id: 123,
        name: 'joelpdurham'
      }
    };
    const initialState = { userInfo: null };
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      userInfo: {
        id: 123,
        name: 'joelpdurham'
      }
    });
  });
});
