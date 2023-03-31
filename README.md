<!-- Please update value in the {}  -->

<h1 align="center">Markdown Previewer</h1>

<div align="center">
   Completed to earn Front End Development Libraries certification from <a href="https://www.freecodecamp.org/" target="_blank">freeCodeCamp</a>.
</div>

<div align="center">
  <h3>
    <a href="https://gpapillera.github.io/markdown-previewer-react/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/gpapillera/markdown-previewer-react">
      Solution
    </a>
    <span> | </span>
    <a href="https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](/Untitled.gif)

> This repository houses the project I worked on for [freeCodeCamp](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer). I hosted my example on [github-pages](https://github.com/gitname/react-gh-pages) Just click the "Demo" link [above](#top).

 This app manages the rendering of Markdown content as HTML in a preview panel using **React's state** and **effect hooks**. The main functionality of the code is to allow the user to type Markdown text into a text area, which is then rendered in real-time as HTML in a preview panel next to it.

 Here is an overview of the basic principles in React that are being used in this code:

 1. **State** - React provides the `useState` hook to manage state in a component. In this code, there are three states being used: `markdown`, `history`, and `currentStep`. `markdown` holds the current Markdown text that the user has entered, `history` is an array that stores the previous states of the markdown state, and `currentStep` keeps track of the current step in the history array.

 2. **Effect** - React provides the `useEffect` hook to perform side effects in a component. In this code, `useEffect` is used to update the preview panel whenever the markdown state changes. It also sets the focus on the text area using the `textareaRef` reference variable.

 3. **Ref** - React provides the `useRef` hook to create a reference to a DOM element in a component. In this code, `useRef` is used to create a reference to the text area element so that it can be focused on in the `useEffect` hook.

 4. **Event handling** - React provides a way to handle events in a component. In this code, there are several **event handlers** defined to handle different user interactions, such as `handleUndo`, `handleRedo`, `handleReset`, `handleChange`, and `handleKeyPress`. These functions use the `useState` hook to update the markdown, history, and `currentStep` states as needed.

 5. **Rendering** - React provides a way to render the UI of a component. In this code, the UI is defined using JSX syntax. The `MarkdownPreviewer` function returns a div element that contains several child elements, including two columns that hold the text area and preview panel, respectively. There are also buttons that allow the user to undo, redo, reset, or erase their text, which trigger the event handlers defined earlier.

 6. **Third-party libraries** - In this code, the `marked` and `highlight.js` libraries are used to convert Markdown text to HTML and to highlight syntax in code blocks, respectively. These libraries are imported at the top of the file and their functions are called within the useEffect hook to update the preview panel.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- IDE: [Visual Studio Code](https://code.visualstudio.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries) project. The [project](https://www.freecodecamp.org/learn/front-end-development-libraries#front-end-development-libraries-projects) was to build an application to complete the given user stories.

- [x] **User Story #1**:\
  I can see a `textarea` element with a corresponding `id="editor"`.

- [x] **User Story #2**:\
  I can see an element with a corresponding `id="preview"`.

- [x] **User Story #3**:\
  When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.

- [x] **User Story #4**:\
  When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type (HINT: You don't need to parse Markdown yourself - you can import the Marked library for this: https://cdnjs.com/libraries/marked).

- [x] **User Story #5**:\
  When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a **heading element** (H1 size), a **sub heading element** (H2 size), a **link**, **inline code**, a **code block**, a **list item**, a **blockquote**, an **image**, and **bolded text**.

- [x] **User Story #6**:\
  When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.

- [x] **User Story #7**:\
  Optional Bonus (you do not need to make this test pass): My markdown previewer interprets carriage returns and renders them as `br` (line break) elements.


## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For exmpale -->

- [Steps to replicate a design with React.js](https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-markdown-previewer)
- [Node.js](https://nodejs.org/)
- [Marked - a markdown parser](https://github.com/chjj/marked)
- [git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [ChatGPT](https://chat.openai.com/chat)

## Contact

- Website [My Portfolio.com](https://gpapillera.github.io/MyPortfolio/)
- GitHub [@gpapillera](https://github.com/gpapillera)
- Twitter [@gppllr](https://twitter.com/gppllr)
