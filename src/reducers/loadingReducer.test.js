import { LOADING_ON } from '../actions/actions';

describe('LOADING TEST', () => {
  it('handls turing loading on', () => {
    const action = {
      type: LOADING_ON
    };

    const initialState = { loading: false };
    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      laoding: true
    });
  });
});
