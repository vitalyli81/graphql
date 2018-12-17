import fetch from 'cross-fetch';

export const findDependencies = (list) => {
  const all = list.map((item) => {
    return fetch(item)
      .then(resp => resp.json())
      .then(json => json);
  })
  return Promise.all(all);
};
