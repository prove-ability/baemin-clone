## baemin-clone

#### 22.01.24

-   기본 설정
-   프로젝트 패키지 매니저 수정
    -   yarn set version berry
-   기본 페이지 추가
    -   고객, 회사, 송장, 미팅

#### 22.01.25

-   vailla-extract theme 에 활용하는 colos(vars) 설정 후 다른 css.ts 파일에서 불러와서 사용시 이슈
-   nextjs dev server 기능 정상 작동하지 않음

```shell
    error - ./.yarn/__virtual__/next-virtual-71f8efa10f/0/cache/next-npm-12.0.8-aa55acca00-947f0295aa.zip/node_modules/next/dist/client/dev/dev-build-watcher.js
Error: Failed to read source code from /Volumes/workspace/crm-cloude/.yarn/__virtual__/next-virtual-71f8efa10f/0/cache/next-npm-12.0.8-aa55acca00-947f0295aa.zip/node_modules/next/dist/client/dev/dev-build-watcher.js
```

#### 22.01.26

-   reset css 추가
-   25일에 있던 이슈는 yarn 1.@.@ 을 사용하니 이슈가 사라짐
-   yarn 버전 변경을 말고 다른 방법을 찾다가 components/button/button.css.ts -> styles/components/button.css.ts 로 하면 정상 작동함 / 아래 context 의 범위가 프로젝트가 아닌 theme 를 정의한 폴더 기준인가..?
    > Ensure this function is called within a .css.ts context, otherwise variable names will be mismatched between files.

#### 22.01.27

-   layout 작업 시작
-   theme 색상 추가

#### 22.01.28

-   nuka-carousel 이슈 - SSR 문제로 client 와 서버간의 tabIndex 불일치 문제로 올해 v5 가 나오면서 수정 될 거 같다고 함 / 기다려봐야지..
    [stackoverflow](https://github.com/FormidableLabs/nuka-carousel/issues/735)
-   vanilla-extract 아래 링크 맞춰서 수정..?
-   테마를 유틸 폴더로 변경 및 각각 css 파일을 컴포넌트 옆으로 변경해보자
-   https://codesandbox.io/s/08gyg?file=/src/global.css.ts

#### 22.02.01

-   vanilla-extract 전체 구조 변경 / style + recipe + globalTheme(vars) 활용
-   롤 듀오 구하는 사이트 방향으로 기획 잡음
-   공톰 컴포넌트 타입 생성시 사용
    https://vanilla-extract.style/documentation/recipes-api/#recipevariants

#### 22.02.01

-   스토리북 설정
-   jest 설정

#### 22.02.02

-   import 이슈로 yarn 버전 변경
    https://github.com/yarnpkg/berry/issues/3687
-   react-hook-form
-   소환사 등록하기 버튼 추가

#### 22.02.03

-   스토리북 완료
-   yarn version set classic
    https://velog.io/@bard/Nextjs-Storybook

#### 22.02.04

-   테마 시스템 색상 변경 - 내일 팔레트를 추가할 듯
-   타이포그래피, 모달, 버튼 -업데이트
