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

만들어진 파일들을 보면 
`app.json`이라는 파일이 있는데 이건 expo가 읽어가는 파일이다.
App.js는 React의 Compnect 비슷한게 보인다.  

## 명령어
이 명렁어들은 pakage.json에 가면 `scripts`에 있다.

* `npm run start`를 입력하면 입을 실행해볼 수 있다. 
웹 브라우저가 뜨고 QR 코드가 보일텐데 핸드폰에 Expo앱을 실행하고 찍으면 핸도폰에서 앱이 실행된다.
* `npn run android` or `npn run ios`는 각각의 시뮬레이터를 실행시켜준다.    
* 'npm run eject`도 있는데 실행하게되면 Expo가 감춰놓았던 Native 파일들을 보여준다.   
단, 한번 실행하면 되돌릴 수 없기에 update랑 이것저것들을 혼자서 처리해야한다.    

## reloading
* live reloading
  : 내가 소스를 수정하고 저장하면 연결되어 있는 Expo앱이 실행된 폰에 바로 리프레쉬 된다.
* hot reloading
  : ??

## How does Ract Native Work?
React Natvie는 어떻게 동작할까?? 
웹 기반 웹뷰를 만드는 하이브리드 앱과 비슷하다. 
IOS 또는 Android의 네이티브 엔진에게 자바시크립트를 이용해서 메시지를 보내는 것이다.    
IOS든 Android든 JavaScript 엔진을 가지고 있기에 가능하다. 
`import { StyleSheet, Text, View } from 'react-native';`를 통해 네이티브의 자원을 가져다 쓸 수 있는 것이다.   
이걸 `브릿지`라고 부른다. 
JavaScript와 IOS, Android 같은 Native 앱을 연결 시켜준다.

```JavaScript
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```
브릿지를 React Component처럼 쓰면 된다.
결과적으로 IOS, Android Core로 가지만, 항상 브릿지가 필요하다.   
그래서 느려질 수 밖에 없다. 브릿지에 많은 데이터를 보내면 교통체증처럼 느려진다.    
그래도 우리가 만들려는 앱이 3D 린더링이 필요한 급이 아니라면 괜찮다..   

디자인인 경우 react Native는 CSS엔진을 포함하고 있기에 
```JavaScript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Layouts with Flexbox in React Native
일단 아직은 잘 이해가 되지 않는다.. 
`wight`,`height` 대신 `flex`라는 것을 이용해서 화면을 맞추라고 한다.   
flex는 비율가지고 조정할 수 있지만 권장하는 이유가 납득이 되지는 않는다.

## Expo API
* https://docs.expo.io/versions/latest/
찾아보면 쓸만한 것들이 많다. 
지도쪽에서는 사용자가 특정 지역을 들어오거나 떠날때 알림을 주는 것도 있다.
• Geofencing https://docs.expo.io/versions/v38.0.0/sdk/location/#geofencing-methods

expo 예전 버전에서는 API를 전부 가지고 있었다고 하지만 최근버전부터는 필요한 API만 다음과 같이 Install해서 사용할 수 있다고 한다.
`expo install expo-location` (localtion 관련 API)

GPS 알아내는 방법
```JavaScript
try {
    // 권한 물어보고
    const respoawait = await Location.requestPermissionsAsync();
    console.log(respoawait); 

    // GPS 알아내고
    const {
        coords: {latitude, longitude}
    } = await Location.getCurrentPositionAsync();
} catch (error) {
    Alert.alert("Can't find you", "So sad");
}
```

## 날씨 API
* https://openweathermap.org/

`api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}`
를 사용할 것이다.

통신을 해야하기 때문에 axios를 추가하자 
`npm i axios` 
