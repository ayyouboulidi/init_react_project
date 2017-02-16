# Start with ReactJS
This Repo is a guide for beginners in React or for whoever wants to start learning React and build their first App.

**_P.S : You can clone this repos for a basic project with rooters._**

This will be organized as following:

- [Requirements](#requirements)
- [Introduction to React](#introduction-to-React)
- [Virtual DOM](#virtual-dom)
- [Init a new project](#init-a-new-project)
- [Transpiler](#transpiler)
- [Task runners](#task-runners)
- [First component](#first-component)
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
We donnot need to configure everything with react anymore. The **Create React App** is the solution.

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
### Import/Export

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
On going....

### Component LifeCycle


# Router

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
