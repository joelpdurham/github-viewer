export const getUser = () => {
  return Promise.resolve({
    'login': 'joelpdurham',
    'id': 123456
  });
};

export const getRepos = () => {
  return Promise.resolve([{
    id: 1234,
    name: 'artist-search'
  }]
  );
};

