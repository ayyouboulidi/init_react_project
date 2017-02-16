# Start with ReactJS
This Repo is a guide for the bigenners in React or for who want to start learning React and build their first App.

This will be organized as following:

- [Requirements](#requirements)
- [Introduction to React](#introduction-to-React)
- [Virtual DOM](#virtual-dom)
- [Init a new project](#init-a-new-project)
- [Transpiler](#transpiler)
- [Task runners](#task-runners)
- [First component](#first-component)
- [Rooter](#rooter)
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

Create React App is divided into two packages:

* `create-react-app` is a global command-line utility that you use to create new projects.
* `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

To resume to create a new app you should execute the following commands :

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

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

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

# Transpiler

# Task runners

# First component

# Rooter

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
