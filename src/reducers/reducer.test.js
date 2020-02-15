import { changeInput } from '../actions/actions';
import { reducer } from './reducer';

describe.skip('REDUCER TEST', () => {
  it('handle search term change', () => {
    const action = changeInput('j');
    const initialState = { searchTerm: '', };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({ searchTerm: 'j' });
  });
});
