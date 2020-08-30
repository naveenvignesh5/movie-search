const ROOT_KEY = "movie-search";

export const setItem = (key, obj) => {
  localStorage.setItem(`${ROOT_KEY}_${key}`, JSON.stringify(obj));
};

export const getItem = (key) => {
  let dataString = localStorage.getItem(`${ROOT_KEY}_${key}`);

  let data = {};

  try {
    data = JSON.parse(dataString);
  } catch (err) {}

  return data;
};
