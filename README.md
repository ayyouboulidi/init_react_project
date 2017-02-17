# Start with ReactJS
This Repo is a guide for beginners in React or for whoever wants to start learning React and build their first App.

**_P.S : You can clone this repos for a basic project with routers._**

This will be organized as following:

- [Requirements](#requirements)
- [Introduction to React](#introduction-to-React)
- [Virtual DOM](#virtual-dom)
- [Init a new project](#init-a-new-project)
  - [Available Scripts](#available-scripts)
- [Transpiler](#transpiler)
- [Task runners](#task-runners)
- [First component](#first-component)
  - [Import and Export](#import-and-export)
  - [Props](#props)
  - [State](#state)
  - [Component LifeCycle](#component-lifecycle)
- [Router](#router)
- [What's next](#whats-next)

# Requirements

-To start coding with react we need absolutly [node][5] and [npm][6] installed on our laptop.

-A minumum knowledge of ES6 (ECMAScript2015) (for more information on [ES6][1] )

-[JSX][7] is required.

# Introduction to React
React is a great JS library to create UI. It is a library that you can add to an existing project or can create a new SPA from scratch.

**But what makes ReactJS a great library?**

- React makes wrinting JavaScript easier with the **JSX**, helps you mix HTML and JS in one file with ease and clearly.
```jsx
import React from 'react';

class Sum extends React.Component {
  render() {
    return (
      <div>2+3 = {2+3}</div>
    );
  }
}
```

- Components are the future of the web.
React is based on components development. It gives you the hand to create your very basic component and integrate them in whatever component you want.

_child component_
```jsx
import React from 'react';

export class Title extends React.Component {
  render() {
    return (
      <div>My_Title</div>
    );
  }
}
```

_Parent component_
```jsx
import React from 'react';
import Title from './Title'

class Header extends React.Component {
  render() {
    return (
      <header>
        <Title />
      </header>
    );
  }
}
```

- React is very efficient with the Virtual DOM (Cf. Virtual DOM)

- React is Awesome for SEO (Search Engine Optimization)
One of the biggest issues with JavaScript frameworks is that they are not exactly search engine friendly. Although there have been some improvements in this area, search engines generally have trouble reading JavaScript-heavy applications.

React stands out from the crowd because you can run React on the server, and the virtual DOM will be rendered and returned to the browser as a regular web page. No need for PhantomJS and other tricks!

# Virtual DOM

React creates its own virtual DOM where your components actually live. This approach gives you enormous flexibility and amazing gains in performance because React calculates what changes need to be made in the DOM beforehand and updates the DOM tree accordingly. This way, React avoids costly DOM operations and makes updates in a very efficient manner.

There are other libraries of _DOM Manipulation_ as **EmberJS** and **Incremental DOM** that you can check. Those libraries focus on the performance and those three are the moste popular. In this article I will only talk about the Virtual DOM used by React.

_Virtual DOM_ is the name React developers gave to their DOM manipulation engine. Virtual DOM provides a series of Javascript calls that tell the library how to build an **in-memory DOM** tree and how to update it when data bound to it changes. The central piece of Virtual DOM is its **smart diffing algorithm**: once the differences in the model have been mapped to the in-memory copy of the DOM, the algorithm finds the **minimum number of operations required to update the real DOM**. This results in two copies of the in-memory DOM being present during the diffing process.

For more details about how React build their Virtual DOM I recommend this Article [Diff Algorithm][8]

# Init a new project

Hallelujah!<br>
We do not need to configure everything with react anymore. The **Create React App** is the solution.

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

WELL, to create a new app you should execute the following commands :

```
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```
After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
Let us explain what does each folder/file stand for.
- node_modules
It is here where all project dependencies are installed.
- package.json
It is the file that contain all our basic conf and the dependencies that ```npm install``` will run and install in our node_modules.
- public
It is the folder where we have all our public elements needed by the App (images,favicon...) and the index.html which is our Entry Point.
- src
It is the folder where we can edit and add files/folders to our source code.

### _Available Scripts_

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

For more details please reffer to [Official Doc](https://github.com/facebookincubator/create-react-app/blob/master/README.md)

# Transpiler

Transpilers are tools that help transpile our code from ES6 to ES5 so the Browsers can support our code.<br>
**Babel** is the most common transpiler that is used nowadays.<br>

Before the _Create React App_ we used to configure it manually with a task runner as _Webpack_ or _Gulp_ or _Grunt_...<br>
But not anymore, it's configure automatically (But we still have the hand over the automation so we can change the configuration as we want).

#### Example

```JSX
[1,2,3].map(n => n + 1);
```
After the Babel transpilation (So the browser can understand it)

```JSX
"use strict";

[1, 2, 3].map(function (n) {
  return n + 1;
});
```

# Task runners

Task runners are a set of tools to make build operation clean and well documented. They provide helpers to manage operations on the project file system via the command line.

There are multiples task runners that we can configure manually : _GruntJS_ _Webpack_ _GulpJS_ _CakeJS_ _BroccoliJS_ and many others...

Unless you want to configure a complex one manually, Now **Create-react-app** and the **Angular2-cli** configure it for you so you don't need to loose time. (it's really a pain in the ass if you want to adapt it for a complex architecure)<br>

_P.S: both CreateReactApp and Angular2CLI are using Webpack for the moment, but it can be changed at any moment._

# First component

Now you have an idea about all what surround react and what you need to know about its environment, let's create our first component.<br>

Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

a simple component is like that :

```JSX
import React, { Component } from 'react';

export default class MyFirstComponent extends Component{
  render(){
    return(
      <div>
        This is my first component
      </div>
  );
  }
}
```
### Import and Export

This component can be used wherever we want and whenever we want with a simple import as following :

```JSX
import MyFirstComponent from '_Relative_Path_To_Your_JS_File';
```
_Important : To use a component in another file, the class should be marked as **export**_

And we can call it in our Render function like that :

```JSX
<MyFirstComponent/>;
```
_Important : The name of the component should be in **Capital Letter**._

### Props

You can pass parameters (called **Props**) from the parent to your component if you need to.

```JSX
<MyFirstComponent componentOrder="first"/>;
```

And access it in the component itself.

```JSX
export default class MyFirstComponent extends Component{
  render(){
    return(
      <div>
        This is my {this.props.componentOrder} component
      </div>
  );
  }
}
```
### State
For Data that won't be changed, we use always ```props``` as passing parameters to children components. Those are data that are fixed throughout the lifetime of a component.
But, for data that is going to change, we have to use ```state```.

**State** is an object that contains all our data that will change throughout the LifeCycle of the component.

Here is an example on how we add a state to a component.
(let's imagine that we'll a variable that will calculate the number of clicks on the div)

```JSX
export default class MyFirstComponent extends Component{
  constructor(){
    super()
    this.state={
      clickNumber : 0
    }
  }

  divClicked(){
    this.state.clickNumber++
    setState(this.state)
  }

  render(){
    return(
      <div onClick={this.divClicked.bind(this)}>
        This is my first component.
        Clicked {this.state.clickNumber} time
      </div>
  );
  }
}
```
Let's explain this code.
We have the state of _clickNumber_ initiated to 0; So once the component is mounted, it will display something like :

```
        This is my first component.
        Clicked 0 time
```
We added an mouse click on the div. That means each time we click on our div, it will execute the function ```divClicked```. The execution will update the state of our component to 1,2,3... each click.
What is particular in the React and the State is that the change of the state means re-execute the render method.
So each click will re-render the the component and we will see something like :

```
        This is my first component.
        Clicked 1 time
```
...

_PS: You should keep in mind that setState is asynchronous and if you do not use it as it should that can give you some weird behaviors :)_

### Component LifeCycle
Component LifeCycle is the component lifecyle. Wow, Very clear I know :).

Each component in React has a life cycle, from the stage ```ComponentWillMount``` to ```ComponentWillUnmount```.<br>
There are multiple methods that are implemented to handle the component lifecyle. The name of each one is really significant.<br>

The ```componentWillMount``` is executed before rendering, on both server and client side.

The ```componentDidMount``` is executed after first render only on the client side. This is where AJAX requests and DOM or state updates should occur. This method is also used for integration with other JavaScript frameworks and any functions with delayed execution like setTimeout or setInterval. We are using it to update the state so we can trigger the other lifecycle methods.

The ```componentWillReceiveProps``` is invoked as soon as the props are updated before another render is called.

The ```shouldComponentUpdate``` should return true or false value. This will determine if component will be updated or not. This is set to true by default. If you are sure that component doesn't need to render after state or props are updated, you can return false value.

The ```componentWillUpdate``` is called just before rendering.

The ```componentDidUpdate``` is called just after rendering.

The ```componentWillUnmount``` is called after the component is unmounted from the dom.

Using an example will be more clear.<br>
In our example we are setting initial state in constructor function. The setNewnumber is used to update the state. All the lifecycle methods are inside Content component.


App.js
```JSX
import React from 'react';

class App extends React.Component {
   constructor() {
      super();
      this.state = {
         data: 0
      }
   };

   setNewNumber() {
      this.state.data++
      this.setState(this.state)
   }

   render() {
      return (
         <div>
            <button onClick = {this.setNewNumber.bind(this)}>INCREMENT</button>
            <Content myNumber = {this.state.data}></Content>
         </div>
      );
   }
}

class Content extends React.Component {

   componentWillMount() {
      console.log('Component WILL MOUNT!')
   }

   componentDidMount() {
      console.log('Component DID MOUNT!')
   }

   componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
   }

   shouldComponentUpdate(newProps, newState) {
      return true;
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
   }

   componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
   }

   render() {
      return (
         <div>
            <h3>{this.props.myNumber}</h3>
         </div>
      );
   }
}

export default App;
```

index.js

```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

ReactDOM.render(<App/>, document.getElementById('app'));

setTimeout(() => {
   ReactDOM.unmountComponentAtNode(document.getElementById('app'));}, 10000);
```

After the initial render, we will get a button which called **increment** and **0** because we have setted the value in the state to **0**.

Only ```componentWillMount``` and ```componentDidMount``` will be logged in console since we didn't update anything yet.<br>
  - We will see in our console in this order :  ```Component Will Mount!``` then ```Component Did Mount```.<br>
When we click **INCREMENT** button, the update will occur and other lifecycle methods will be triggered.<br>
  -  We will see in our console in this order :  ```Component Will RECEIVE PROPS!``` then ```Component WILL UPDATE``` then ```Component Did Update!```.<br>

After ten seconds, the component will unmount and the last event will be logged in console.<br>
  - We will see in our console :  ```Component Will Unmount!``` .<br>

# Router

What are Routers ?
In a SPA (Single Page Application) we need to redirect the user on a route (About, Profile, Settings, Home,..) that are seen by the user as different pages. From the developper' point of view, they are the same page, it is only the root component that change according to the router.

In react, to work with routers, we need a react module ```react-router``` which should be installed and "configured" (it is not really a configuration) but there are specific steps that should be done.

To install react router it is too simple :

```
  npm install --save react-router
```
To add routers to your project, you can start with a file where you will define all your routes as following :

```JSX
import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
```
I will explain do not worry :)

We have installed **react-router** and our routes are OF COURSE nothing but other components :) (Everything in react is a component).<br>
Each route is considered as a parent component (that can contains other components) .

We should import them and use them in our Route components as :
```JSX
<Route path="/" component={App} />
```

The ```path``` prop is what is add to the URL and what we can call to redirect the page to what we want.<br>
The ```component``` prop is the component that will be displayed once we have been redirected to the specific route.

Once the ```Routes.js``` is created; We should call this component in our Entry Point ```index.js```.

```JSX
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
```
Sure you are wondering how can we call a specific route from a component ? Well it is easy :).<br>
You need to import a specific component from reat-router.
```JSX
 import {Link} from 'react-router'
```
And you can use that in your component to call a specific route as following:
```JSX
 <Link to="/_The_Name_Of_Your_Route"></Link>
```
In my example I have created three routes ```/About```,```/``` and if it is something different that those two it will return my Undefined Page; That is the meaning of ```/*```.

I think that's all what you should know aboutn **routers** :)

# What's next

The next step will be to learn how to handle **States** and learn **Observables**. [RxJS][4] / [Flux][3] / [Redux][2]

[1]: https://github.com/bevacqua/es6 "ES6"
[2]: https://github.com/reactjs/redux "Redux"
[3]: https://github.com/facebook/flux "Flux"
[4]: https://github.com/ReactiveX/rxjs "RxJS"
[5]: https://github.com/nodejs/node "node"
[6]: https://github.com/npm/npm "npm"
[7]: https://github.com/jsx/JSX "JSX"
[8]: https://calendar.perfplanet.com/2013/diff/ "Diff Algorithm"
