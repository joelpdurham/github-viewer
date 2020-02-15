import { LOADING_ON, LOADING_OFF } from '../actions/actions';
import { loadingReducer } from './loadingReducer';

describe('LOADING TEST', () => {
  it('handls turing loading on', () => {
    const action = {
      type: LOADING_ON
    };

    const initialState = { loading: false };
    const newState = loadingReducer(initialState, action);

    expect(newState).toEqual({
      loading: true
    });
  });

  it('handles tunring loading off', () => {
    const action = {
      type: LOADING_OFF
    };

    const initialState = { loading: true };
    const newState = loadingReducer(initialState, action);

    expect(newState).toEqual({
      loading: false
    });
  });
});
