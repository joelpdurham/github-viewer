export const getUsers = searchTerm => {
  return fetch(`https://api.github.com/users/${searchTerm}`)
    .then(res => res.json());
};
