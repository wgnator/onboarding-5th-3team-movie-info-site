# 영화 정보 사이트

## 아키텍쳐 개선 버젼 by wgnator

- 영화 데이터는 앱을 감싸는 Main component 에서 useMovieModel 훅의 movies 상태변수와 이를 변경하기 위한 getMovies, getMoviesByIds, searchMovies 세가지 상태변경 함수를 가져옵니다.
- Main 은 하위 컴퍼넌트인 Navigation에는 상태변경 함수들을, Contents 에는 상태변수를 전달합니다.
- 경로(라우터)를 통한 페이지 변경은 Login / MainPage 전환에만 활용합니다.
