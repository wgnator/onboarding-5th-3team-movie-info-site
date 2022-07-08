const LOCAL_STORAGE_KEY = "wanted_movie_info_service";

export const saveToken = (user) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
};

export const getLoggedInUser = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
};

export const removeToken = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
