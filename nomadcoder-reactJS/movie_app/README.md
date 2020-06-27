# Movie App

React JS Fundamentals Course (2020 Update!)

## Directories
* public : static 자료(사진, html, 등)가 있는 곳
* src : 소스코드가 있는 곳

## 강의 정리
강의 내용을 들으면서 정리하는 내용

### How does React work?
리엑트는 Virtual DOM이라는 것을 사용한다.    
Virtual DOM이라는 것이 뭐고 왜 사용해야하는지 궁금하다면 
* React and the Virtual DOM (https://www.youtube.com/watch?v=muc2ZF0QIO4)
* 리액트에 대해서 그 누구도 제대로 설명하기 어려운 것 – 왜 Virtual DOM 인가? (https://velopert.com/3236)

두개의 문서를 읽어보면 된다.
`npm start`을 하면 브라우저에서 movie_app이 보인다.
아직 start를 했을때 어떤 작업이 일어나는지는 모르지만 
다음과 같이 뜬다.

```com
 Compiled successfully!

You can now view movie_app in the browser.       

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.219.100:3000  

Note that the development build is not optimized.
To create a production build, use npm run build.
```

`index.html`파일에 `root`라는 ID를 div가 있다.
react는 div안에 Virtual DOM이 html을 작성해준다.   
```html
// index.html
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
<body>
```

어떤 걸 그려주는지 알고 싶으면 
먼저 `index.js`을 보면 
```JavaScript
// index.js
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
```
document의 root라는 곳에 App을 그려주겠다고 나와있다.

`App.js`를 따라서 가보면 
```JavaScript
// App.js
import React from 'react';

function App() {
  return (
    <div>Hello!!!</div>
  );
}

export default App;
```
return으로 `<div>Hello!!!</div>`를 해준다.
결과적으로 사용자에게는 `index.html`이 다음과 깉이 보이게 된다.
```HTML
// index.html
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <div>Hello!!!</div>
    </div>
<body>
```

### Creating your first React Component
`index.js`를 다시보면 
```JavaScript
// index.js
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
```
`<App />`이라는 것을 보고 뭐지 라고 생각했을 것이다.  
이것이 **Component** 이라고 불리는 것이다.
**React는 Component와 함께 동작하며 모든 것이 Component이다.**    
**Component는 HTML을 반환하는 함수**이다.
매중

`App.js`에서 HTML을 반환되는 것을 봤다.
이쯤되면 `function App()`가 Componect라는 것을 짐작할 수 있을 것이다.
```JavaScript
// App.js
import React from 'react';

function App() {
  return (
    <div>Hello!!!</div>
  );
}
```

`<App />`은 우리가 component를 사용하고자 하는 형태이다.
JavaScript도 아니고 HTML도 아닌 그 사이에 있는 조합을 `JSX`라고 부른다.
JSX는 react에서 나온 react에서만 쓰이는 유일한 개념이다. (그외는 나오는 개념은 JavaScript 것이다)   
react를 배우는데 JavaScript를 잘 알고 있다면 JSX만 배우면 된다는 뜻이다.   


#### Componect를 추가하기
src폴더에 `Potato.js`라는 파일과 소스를 추가하면 Potato라는 Componect를 만든다.
```JavaScript
import React from 'react';


function Potato() {
  return (
    <h3>I Love Potato</h3>
  );
}

export default Potato;
```

Potato를 그냥 index.js에 아래와 같이 추가하면 에러가 발생한다.    
```JavaScript
ReactDOM.render(
    <App /><Potato />,
  document.getElementById('root')
);
```
왜냐하면 **react application에는 하나의 component만 rendering되기 때문** 이다.     
왜냐하면 component가 하나의 앱이기 떄문이다.    
index.js는 원래대로 돌려놓고     

App.js파일로 가자
```JavaScript
import React from 'react';
import Potato from './Potato';

function App() {
  return (
    <div>
        <h1>Hello!!!</h1>
        <Potato />
    </div>
  );
}

export default App;
```
Potato를 위와 같이 추가하면 브라우저에는 다음과 같이 출력된다.
```html
// index.html
<body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">
        <div>
            <h1>Hello!!!</h1>
            <h3>I Love Potato</h3>
        </div>
    </div>
<body>
```

### Reusable Components with JSX + Props
jsx에서 두번째로 이해해야하는 것은, **component에 정보를 보낼 수 있다는 것이다.**    
이전에 작업했던 Potato에 관현 것은 다 지우자..    

`App.js`를 다음과 같이 변경하자
```JavaScript
// App.js
import React from 'react';

function Food(props) {
    console.log(props)
    return <h1>I like {props.fav}</h1>
}

function App() {
  return (
    <div>
        <h1>Hello!!!</h1>
        <Food fav="kimchi" />
        <Food fav="rame" />
        <Food fav="chukumi" />
    </div>
  );
}

export default App;
```    
    
콘솔에는 
```cmd
{fav: "chukumi"}
```
이렇게 찍힌다.    

이정도면 어떻게 프로퍼티를 전달하는지 알 수 있다고 생각..


