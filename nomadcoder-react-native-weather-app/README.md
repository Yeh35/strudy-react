# [React Native로 날씨앱 만들기](https://nomadcoders.co/react-native-fundamentals)


## 환경 설정
1. node.js 설치 확인 `node -v`
2. npm 설치확인 `npm -v`
3. android or ios
    * android: android studio
    * ios : 몰라.
4. 핸드폰에서 쉽게 태스트를 하고 싶다면 **Expo** 에 가입하고 앱으로 설치
5. React Native 공식문서에 가서 설명보기 (https://reactnative.dev/docs/environment-setup#docsNav)
    * npm install -g expo-cli

아님. [윈도우(Windows)에 react native 개발 환경 구축하기](https://dev-yakuza.github.io/ko/react-native/install-on-windows/#%EA%B0%9C%EC%9A%94) 여길 참고


## expo와 react native의 차이
expo는 create-react-app과 같은 것이다.   
리엑트 네이티브를 위한 설정 파일 같은 것을 셋업 시켜준다.   
만약 리엑트 네이티브를 수정도르 작업하고 싶다면 `React Native CLI`를 사용하면 된다.   
`React Native CLI`는 리엑트 네이티브에서 더 많은 컨트롤을 하고 싶을 떄 하면 된다.    
React Native는 컴파일 결과로 native앱이 나오기 때문에 필요에 따라서 결국 각 native의 파일들 혹은 소스코드를 만질 수도 있다.
하지만 expo는 native file들을 전부 숨기고 관리해준다.   
단점으로는 native file들을 크게 제어 할 수는 없다.
추가로 Window 개발환경이지만 Expo를 사용하면 IOS도 빌드 할 수 있다.   

Expo 사이트 (https://expo.io/dashboard/)


## Creating the Project
프로젝트를 만들려면 `expo init [프로젝트명]`를 하면 된다.

window 같은 경우 스크립트 보안정책이라면서 실행이 안될텐데   
1. PowerShell을 관리자 모드 실행
2. `ExecutionPolicy` 입력해서 현재 정책 확인 (아마도 'Restricted')
3. `Set-ExecutionPolicy Unrestricted` 허용하기 위해서 입력 
2. `ExecutionPolicy` 입력해서 현재 정책 확인 ('Unrestricted'로 변경되어 있을 꺼임)


