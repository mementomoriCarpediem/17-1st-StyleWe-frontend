# Style ‘We’ 프로젝트 Front-end/Back-end 소개

![대표이미지](https://media.vlpt.us/images/mementomori/post/d38e8e72-342a-46c7-bfa6-ae0bb116bb92/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-02-17%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.40.17.png)

## 스타일쉐어 클론코딩 프로젝트

> 짧은 프로젝트 기간동안 개발에 집중해야 하므로 디자인/기획 부분만 클론했습니다.
> 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 프론트엔드와 백앤드 연결을 통하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 1. 프로젝트 선정이유

> 스타일쉐어는 약 700만이 넘는 MZ세대들의 패션/뷰티 스타일을 공유하는 SNS와 온라인 쇼핑몰이 결합된 형태로,
> 사용자가 작성한 게시물인 피드가 SNS 게시물임과 동시에 사이트에서 구매한 상품의 후기도 될 수 있다는 특징을 갖고 있습니다.
> 사용자의 피드와 상품 상세 페이지간 유기적 연결에 중점을 두고 이 프로젝트를 진행했습니다.

### 2. 개발 인원 및 기간

1. 개발 기간 : 2021/02/15 ~ 2021/02/26 (약 12일간)
2. 개발 인원 : 프론트엔드 3명, 백엔드 3명

### 3. 팀 소개

1. 팀명 : Style 'We'
2. 팀원
   - Front-End : 유승현(PM), 박정현, 박경토
   - Back-End : 강승연, 심규보, 남채린

### 4. 데모 영상(링크) : https://drive.google.com/file/d/1-yQxb6fVL7KY29i3dajLNLSoZQaLSqI9/view?usp=sharing


## 적용 기술 및 구현 기능

### 1. 적용 기술

- Front-End : `React.js`, `Sass(Scss)`, `React Slick`, `React-router-dom`
- Back-End : `Python`, `Django web framework`, `Bcrypt`, `My SQL`
- 협업에 사용 된 툴 : `Git Hub`, `Slack`, `Trello`, `Google Calender`
- Common : `RESTful API`

### 2. 구현 기능

#### Front-End

> 커뮤니티 메인페이지, 피드 상세페이지, 상품 디테일 페이지 등 대부분의 페이지는 map 함수를 활용하여 백엔드와 데이터 통신을 통하여
> 데이터를 불러오도록 설계하였습니다.

1. 커뮤니티 메인페이지 **(담당: 박정현)**

   > 스타일쉐어는 `커뮤니티`, `스토어` 두개의 메인페이지를 보유하고 있으며, 사용자가 `styleshare.kr` 접근 시 커뮤니티 메인 페이지로 랜딩됩니다.
   >
   > - 구현 기능
   >
   > 1. 무한 스크롤 기능
   > 2. TOP 버튼 구현 (스크롤바 위치에 따른 Display On/Off 기능 추가)
   > 3. 모달창을 활용한 새 글 작성 기능 구현
   > 4. 비정형 정렬
   > 5. 조건부 렌더링

2. 피드 상세 페이지커뮤니티 메인페이지 **(담당: 박정현)**

   > 메인페이지에서 보이는 피드를 클릭하였을 때 보이는 피드 디테일 페이지 구현
   >
   > - 구현 기능
   >
   > 1. 모달창을 활용한 피드 디테일 페이지 구현
   > 2. 맵함수를 활용한 댓글 기능 구현
   > 3. 상품 배너 클릭시 해당 상품 상세페이지 이동 구현
   > 4. 상품 페이지 내 후기 클릭시 해당 피드 상세 페이지 이동 

3. 상품 상세 페이지

   > 사용자 피드를 통하여 이동 할 수 있는 상품 상세페이지 구현
   >
   > - 구현 기능
   >
   > 1. React Slick을 활용하여 구매 후기 슬라이드 기능 구현
   > 2. 옵션 드롭다운 기능 구현
   > 3. 구매 수량 카운팅 기능 구현
   > 4. 맵 함수를 활용한 컴포넌트화 + 동적라우팅 활용

4. 로그인/회원가입 페이지

   > 로그인/회원가입 페이지 구현
   >
   > - 구현 기능
   >
   > 1. Link 기능을 활용한 로그인/회원가입 페이지 전환
   > 2. fetch 함수를 활용하여 백엔드와 통신 -> LocalStorage에 토큰 생성 테스트 완료

5. 그 외 (네비게이션 바, 푸터)
   > 공통으로 사용되는 네비게이션 바, 푸터 기능 구현
   >
   > - 구현 기능
   >
   > 1. 맵 함수를 활용하여 네비게이션 바 카테고리 목록 구현

#### Back-End

1. 회원가입 시 기입된 정보를 규칙에 맞게 거르고, 입력 받은 정보로 새 사용자를 생성하는 기능의 api 구현.
2. 데이터베이스에 비밀번호를 저장할 때 보안을 위해 bcrypt로 암호화함.
3. 로그인시 사용자 여부를 판단할 수 있는 access token을 발급하여 로그인 유지 기능을 구현할 수 있도록 함.
4. 각 기능에 접근시 인가 여부를 판별하는 함수를 구현함.
5. 메인 페이지에 필요한 최신순 피드 리스트와 그에 들어갈 작성자, 글 내용, 이미지 url, 좋아요 개수, 댓글 정보를 응답하는 api 구현.
6. 피드 상세 페이지에 필요한 작성자, 글 내용, 이미지 url, 좋아요 개수, 댓글 리스트 정보를 응답하는 api 구현.
7. 피드 수정과 삭제 기능을 하는 api 구현.
8. 상품 상세 페이지에 필요한 상품, 옵션, 이미지 url, 좋아요 순 후기 리스트 정보를 응답하는 api 구현.

## Reference

> 이 프로젝트는 스타일쉐어 사이트를 참조하여 학습목적으로 만들었습니다.
> 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
> 이 프로젝트에서 사용하고 있는 사진은 https://unsplash.com/ 의 사진입니다.
