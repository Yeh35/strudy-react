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


### Dynamic Component Generation
`App.js` 코드가 조금 안이쁜거 같아서 다듬어보자
참고로 jsx에 `{}`안에 들어가는 것은 JavaScript이다.
```JavaScript
// App.js
import React from 'react';

function Food({name, picture}) {
    console.log(name)
    return <div>
        <h2>I like {name}</h2>
        <img src={picture}/>
    </div> 

}

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];


function App() {
  return (
    <div>
        <h1>Hello!!!</h1>
        {foodILike.map(dish => {
            return <Food name={dish.name} picture={dish.image} />
        })}
    </div>
  );
}

export default App;
```

### map Recap
크롬 콘솔에 다음과 같은 에러가 뜬다.
```
index.js:1 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `App`. See https://fb.me/react-warning-keys for more information.
    in Food (at App.js:50)
    in App (at src/index.js:6)
```
react에서는 모든 element들을 다 다르게 보여야 할 필요가 있다. 
그래서 'key'를 프로프티에 추가하라고 하는 것이다.  

App.js인데 다음과 같이 변경하면 된다.
```JavaScript
import React from 'react';

const foodILike = [
  {
    id : 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id : 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id : 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id : 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id : 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function Food({name, picture}) {
    console.log(name)
    return <div>
        <h2>I like {name}</h2>
        <img src={picture} alt={name} />
    </div> 
}


function App() {
  return (
    <div>
        {foodILike.map(dish => {
            return <Food key={dish.id} name={dish.name} picture={dish.image} />
        })}key
    </div>
  );
}

export default App;
```

우리가 `key`라는 프로프티를 사용하지 않아도 react내부적으로 사용하기 위해서 필요하다.

### Protection with PropTypes
지금까지는 Component에 값이 제대로 안넘어와도 에러를 발생시키지 않았다.
(화면에 이상하게 나오기는 하지만..)

필요한 props가 전달되지 않으면 에러를 발생시키는 것을 해보려고한다.      
먼저 `npm i prop-types`를 콘솔에 입력해 type을 체크해주는 라이브러리를 받자

그다음 import `import PropTypes from 'prop-types';` 하고     
다음과 같이 체크해야하는 값을 넣어주면 된다.
```JavaScript
Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
```
'isRequired'가 있고 없고의 차이는 undefined를 허용하냐 안하냐의 차이이다.   

### Class Components and State
기존에 우리가 했던 만들었던 `function App`을 Function Components라고 부른다.   
이제 그걸 Class Component로 바꿀것이다.
간단하게 다음과 같이 `App.js`를 변경해보자
```JavaScript
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        count: 0
    };
    add = () => {
        console.log("add");
    };
    minus = () => {
        console.log("minus");
    };
    render() {
        return <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minuss</button>
        </div>;
    }
}

export default App;
```

react는 React.Component를 상속 받았을 때 기본적으로 `render` 메소드를 실행하도록 되어 있다.
Function Component이 render 메소드와 동일하다고 할 수 있다.   

왜? Class Component를 사용하냐고 묻는다면 React.Component를 상속받기에 React가 제공하는 기능들을 가져다가 쓸 수 있고 하나로 묶여야 하는 OOP관점에서 코딩할 수 있다.

배우면서 의문인 점이 버튼에 이벤트를 줄때 `this.add`로 하면 클릭할때만 이벤트가 적용되고
`this.add()`를 하면 페이지를 실행하면 바로 실행된다.    
왜 그래야하는지 납득이 되지는 않는다.

그럼 이제 state에 지정된 값을 변경하면 되는 것일까?
여기서 중요한게 `this.state.count += 1`같이 **직접 state를 변경하면 안된다.**   
시도해도 콘솔창에 경고 메시지만 뜰것이다.    

`setState`를 메소드를 사용해야지만 react가 변경을 알아채고 `render`메소드를 실행시켜준다.
그러면 VisualDOM이 화면에서 변경된 부분만 업데이트를 한게된다.

```JavaScript
add = () => {
    this.setState({ count: this.state.count + 1 });
};
minus = () => {
    this.setState({ count: this.state.count - 1 });
};
```
하지만 이 코드에서도 바꿔야 해야하는 것이 있다.   
바로 `this.state.count` state를 바로 가져다 쓴 부분이다.   
코딩을 할때 함수내에서 변수로 받을 수 있는데 전역변수를 가져다 쓰는 것은 좋은 방법이 아니다.    

```JavaScript
add = () => {
    this.setState(current => ({ count: current.count + 1 }));
};
minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
};
```
이런식으로 state를 current라는 매게변수로 받을 수 있다.   


### Component Life Cycle
Componect에는 Life Cycle이라는게 존재한다.    
Life Cycle은 아주 대에에충 설명하면 create -> update -> remove 이런식으로 Componect가 생성되고 사라지는 순서를 나타내는 것을 말한다. 각 단계마다 callback 메소드가 있고 그걸 정의하면 라이프 사이클에 참여할 수 있게 되는 것이다.   
모든 Life Cycle 메소드를 보지는 않을 것이지만 궁금하다면 
여기(https://ko.reactjs.org/docs/react-component.html)를 들어가보면 된다.    

주요하게볼 Life Cycle 메소드는 다음과 같다.
* mounting (태어나는 것)
* updating (업데이트)
* unmounting (죽는것)

`App.js` 소스인데 `constructor`같이 잘 모르는 메소드가 많이 생겼다.  
위에 링크를 들어가보면 Life Cycle 마다 메소드가 호출되는 순서를 알려준다.
```JavaScript
import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    state = {
        count: 0
    };
    constructor(props) {
        super(props);
        console.log("hello");
    };
    componentDidMount() {
        console.log("Mounted");
    };
    componentDidUpdate() {
        console.log("updated");
    };
    componentWillUnmount() {
        console.log("good bye App");
    }
    add = () => {
        this.setState(current => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState(current => ({ count: current.count - 1 }));
    };
    render() {
        console.log("render");
        return <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minuss</button>
        </div>;
    }
}

export default App;
```

다음강의를 위해서 다시 `App.js`을 돌려놓자.

### MAKING THE MOVIE APP
이제부터 본격적으로 Movie App을 만든다.
여기부터는 강의를 따라서...

`npm i axios`를 cmd 창에 입력하여 axios를 받자  
axios는 http 호출을 할 때 사용된다.    

css 적용시킬때는 JavaScript방식으로 
`<h3 class="movie__title" style={{backgroundColor: "red"}}>{title}</h3>`
style을 직접 정해줘도 되지만 그것보다는 **css 파일을 만들고 `import "./Movie.css"` import하는게 더 깔끔하다.** 


`npm i gh-pages` 
gh-pages는 이렇게 만든 App을 Github에 Static 페이지로 띄우는 걸 도와준다.

