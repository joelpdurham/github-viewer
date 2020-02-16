import { FETCH_USER, FETCH_REPOS, RESET_REPOS } from '../actions/actions';
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

  it('can handle fetching user repos', () => {
    const action = {
      type: FETCH_REPOS,
      payload: [
        {
          id: 123,
          name: 'artist-search'
        }
      ]
    };
    const initialState = { repos: null };
    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      repos: [
        {
          id: 123,
          name: 'artist-search'
        }
      ]
    });
  });

  it('can reset repos', () => {
    const action = {
      type: RESET_REPOS,
    };

    const initialState = { 
      repos: [{
        id: 123,
        name: 'artist-search'
      }]
    };

    const newState = userReducer(initialState, action);

    expect(newState).toEqual({
      repos: null
    });
  });
});
