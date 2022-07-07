const LOCAL_STORAGE_KEY = "wanted_movie_info_service";

export const saveToken = ({ email }) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ email }));
};

export const getToken = () => {
  // 앱 내에서 로그인한 유저의 정보를 불러올 때 사용
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
};
