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

To start a new project you can use the command : 

```
npm init
```

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
