/*
  This file used to contain ALL of our 
  component code. This app is simple enough
  that it was fine to be all in one file.

  But to demonstrate the use of import/export
  with modules, we have broken the individual
  components out into their own "module" files.

  A module is a JavaScript source file that
  "exports" something. Things that can be exported
  from a module include:

      * functions
      * objects
      * constants/variables
      * ... any JavaScript thing, really
  
  You can access things that are exported from
  a module by using the "import" statement, as
  shown below. We used it to import the React
  system, and one of it's Hooks (useState) before.
  We also imported ReactDOM, which renders our 
  main component.

  Somebody - some *developer* - created the "react"
  module code, and "exported" its functionality so that
  we can import it. We can do the same thing!

  Modules that we create can export [any JavaScript thing.]
  Modules that we create can export [any function.]
  Modules that we create can export [React Component Functions!]

  Below, we are importing our own React Component, "App",
  from the "App.js" file.

  There are 2 types of "exports":

      * named
      * default
  
  See the App.js and utils.js files for examples of each, and
  an explanation of the difference.

  Note that the variable name used in the "import" statement is
  arbitrary for "default" exports - you can make it be whatever
  you want (like SuperDuperAppComponent from "App.js" below.)

  Note that the variable name used  in the "import" statement
  for "named" exports **must match the name of the export** in
  the module file (like "add" from "utils.js" below.)

  Module import/export is a feature of ES6 JavaScript - it is
  not a feature/function of React.

  See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
  See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

*/

import React from "react";
import ReactDOM from "react-dom";

//
// "default" import - the var name doesn't have to match the
// default export object name in the module. Either of the
// statements below will work.
//
//import App from "./App.js";
import SuperDuperAppComponent from "./App.js";

//
// "named" import - the var name MUST match the export object
// name in th emodule. The "myAddFunction" import statement
// below will NOT work - there is no named export in the
// utils.js file!
//
import { add } from "./utils.js";
import { multiply } from "./utils.js";
// import { myAddFunction } from "./utils.js"

import "./styles.css";

console.log(add(1, 2, 3));
console.log(multiply(1, 2, 3));

//
// the index.js file still renders the main component
// (a.k.as the "React app component")
//
const rootElement = document.querySelector("#root");
ReactDOM.render(<SuperDuperAppComponent />, rootElement);

// See App.js next...
