import { toGetUser, toGetLoading } from './userSelectors';

describe('SELECTOR TESTS', () => {
  it('return correct user info from state', () => {
    const state = {
      userReducer: {
        userInfo: {
          name: 'joel',
          id: 1234
        }
      }
    };

    expect(toGetUser(state)).toEqual({
      name: 'joel',
      id: 1234
    });
  });

  it('return correct loading info from state', () => {
    const state = {
      loadingReducer: {
        loading: false
      }
    };

    expect(toGetLoading(state)).toEqual(false);
  });
});

