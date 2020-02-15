import { fetchUserInfoFromState } from "./userSelectors";

describe('SELECTOR TESTS', () => {
  it('return correct info from state', () => {
    const state = {
      userInfo: {
        name: 'joel',
        id: 1234
      }
    };

    expect(fetchUserInfoFromState(state)).toEqual({
      name: 'joel',
      id: 1234
    });
  });
});
