export const getUser = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json());
};

export const getRepos = userName => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
    .then(res => res.json());
};

