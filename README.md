# 영화 정보 사이트

## 1. 기능 정의

- 해당 사이트는 총 두개의 탭을 가집니다. (`검색`, `즐겨찾기`)

### 1.A. 검색!

<p>
<img src="https://user-images.githubusercontent.com/77876601/177663670-e7b41c0a-d548-4163-8686-869819297fca.jpeg" width="30%">
<img src="https://user-images.githubusercontent.com/77876601/177663688-6f99fe0e-fea4-46a9-b97b-8e438b40f549.jpeg" width="30%">
<img src="https://user-images.githubusercontent.com/77876601/177663692-b47f7fb6-d9db-42fe-ab99-a517cdc3bc7b.jpeg" width="30%">
</p>
                                                                                                                            
- 초기 화면은 검색 탭에서 시작합니다.
- 검색 탭은 상단에 `검색 입력 input` , `검색 button` 의 요소를 가집니다.
- 처음 검색 결과 영역에 (검색되지 않은 초기상태) “검색 결과가 없습니다” 등의 표시를 노출해 주어야 합니다.
- 검색어를 입력한 후 검색을 클릭하면 아래로 검색 결과가 노출됩니다.
- 검색 결과가 없는 경우 "검색 결과가 없습니다.”(위와 동일한 컴포넌트)를 노출해야 합니다.
- 검색 결과의 가장 하단으로 내려온 경우 추가로 데이터를 요청하여 그려줍니다. (`infinity scorll`) (추가구현 사항)

### 1.B. 영화 선택

- 검색해서 출력된 영화 리스트 중 하나를 클릭하면 나오는 상세 페이지 입니다.
- 상세페이지는 각 영화의 간단한 설명등이 포함됩니다.
- 해당 페이지에는 즐겨찾기 `button` 요소를 가집니다.
- 즐겨 찾기를 누르면 즐겨찾기가 다시 누르면 즐겨찾기 취소로 표현되어야 합니다. (icon or 문자열)
<p>
<img src="https://user-images.githubusercontent.com/77876601/177663762-b8d70195-d796-4d15-8b90-6531b958a55f.jpeg" width="30%">
<img src="https://user-images.githubusercontent.com/77876601/177663765-89ab2e8e-28ca-41fa-a2ba-b304dac72255.jpeg" width="30%">
</p>

### 1.C. 즐겨찾기

- 즐겨 찾기 탭을 클릭하면 즐겨찾기로 진입합니다.
- 즐겨찾기 페이지에는 즐겨찾기 된 영화리스트가 보여 집니다. (검색 했을 때와 동일)
<p>
<img src="https://user-images.githubusercontent.com/77876601/177663749-7108db66-a415-4aeb-b42a-1cac8d834f32.jpeg"  width="30%">
<img src="https://user-images.githubusercontent.com/77876601/177663752-5ed781ce-7696-48e7-9a1b-0ef82b10bea0.jpeg"  width="30%">
<img src="https://user-images.githubusercontent.com/77876601/177663754-bd34ec5d-36ec-402a-bac8-f710e512ad6e.jpeg"  width="30%">
</p>
