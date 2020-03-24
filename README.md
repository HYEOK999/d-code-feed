# d.code PC 웹사이트 패션 피드 구현

----------

## 주제 

- 디코드 PC 웹사이트의 패션 피드를 구현 
- JSON 데이터 사용 

<br/>

### 테크스택

- ES2015+
- ReactJS 16.8+
- Redux , Redux-saga
- Ducks Pattern
- CRA

<br/>

### 화면구성 

- 패션피드목록 
- 패션피드상세

<br/>

### [Day01 : - 초기 셋팅 하기 -](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md)

**목차**

1. [프로젝트 생성](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a1)
2. [라이브러리 인스톨하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a2)
3. [nvm 설정파일 생성하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a3)
4. [package.json 설정 추가하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a4)
5. [prettier 설정파일 생성하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a5)
6. [라우터 설정하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a6)
7. [pages 폴더 만들고 컴포넌트 설정하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a7)
8. [Redux 셋팅하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a8)
9. 상위 컴포넌트에 Provider 셋팅 하기
   - redux 모듈 작성하기
     - create 함수 작성하기
     - combineReducer 작성하기
     - rootSaga 작성하기
10. [index.js Reset.css 적용하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day1.md#a11)

<br/>

### [Day02 : - header 꾸미기, Store에 feed 저장 테스트 - ](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md)

**목차**

1. [라이브러리 인스톨하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a2)
2. [전역적으로 사용할 Icons 파일 작성하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a6)
3. [Feed.jsx 에 Header 컴포넌트 추가하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a1)
4. [Header 폴더 및 파일 스트럭쳐 구성하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a3)
   - [Styles.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a4)
   - [HeaderLogo.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a5)
   - [MainMenu.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a7)
   - [Member.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a8)
   - [index.jsx (Feed - Header 컴포넌트)](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a9)
5. [Feed List 데이터를 받아서 Redux Store 저장 테스트 하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a10)
   - [modules/feed.js 작성하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a11)
   - [Combine Reducer에 리듀서 추가하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a12)
   - [Root Saga에 사가함수 추가하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a13)
   - [Container, Test Component 작성하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day2.md#a14)

<br/>

### [Day03 : - Head 작성 및 Feed List 목록 구현 - ](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md)

**목차**

1. [라이브러리 인스톨하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a1)
2. Head 작성하기
   - [Feed page에 Head 컴포넌트 삽입하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a3)
3. [파일 정리하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a4)
4. FeedList 폴더 및 파일 스트럭쳐 구성하기
   - [Styles.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a6)
   - [index.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a7)
   - [MainTitle.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a8)
   - [FeedHeader.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a9)
   - [FeedContent.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a10)
   - [FeedFooter.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day3.md#a11)

<br/>

### [Day04 : - FeedList 일부 수정 및 FeedDetail 구현1 -](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md)

**목차**

1. [FeedList useEffect 수정](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md#a1)
2. [FeedList Link 태그 수정](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md#a2)
3. [HOC 작성](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md#a3)
4. [Detail 관련 Redux 추가하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md#a4)
5. [FeedDetailContainer 만들기 + 좋아요 로직 구성](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md#a5)
6. [Detail에서 사용할 Icon 추가하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md#a6)
7. [Detail에서 사용할 logo Img 추가하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md#a7)
8. [FeedDetail 페이지 추가하기](https://github.com/HYEOK999/d-code-feed/blob/master/Day4.md#a8)

<br/>

### [Day05 : - FeedDetail 완성 -](https://github.com/HYEOK999/d-code-feed/blob/master/Day5.md)

**목차**

- FeedDetail 폴더 및 파일 스트럭쳐 구성하기
  - [Styles.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day5.md#a2)
  - [index.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day5.md#a6)
  - [FeedDetailImg.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day5.md#a3)
  - [FeedDetailHeader.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day5.md#a4)
  - [FeedDetailContent.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day5.md#a5)
  - [FeedComment](https://github.com/HYEOK999/d-code-feed/blob/master/Day5.md#a6)
  - [FeedCommentContent.jsx](https://github.com/HYEOK999/d-code-feed/blob/master/Day5.md#a7)

