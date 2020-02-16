export const getUser = searchTerm => {
  return fetch(`https://api.github.com/users/${searchTerm}`)
    .then(res => res.json());
};

export const getRepos = userName => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json());
};

