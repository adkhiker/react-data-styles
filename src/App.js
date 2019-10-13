/*

  This is the main React application component.

  We import from other components, exported as React component
  functions from other JavaScript files:

      * ColorPicker
      * Counter

  Note the releative path to the component module files.
  See https://en.wikipedia.org/wiki/Path_(computing)
*/

import React from "react";
import Counter from "./CounterComponents/Counter.js";
import ColorPicker from "./ColorComponents/ColorPicker.js";

//
// This is an example of a "composed component" -
// A component made up of other, child components.
//
export default function App() {
  return (
    <div>
      <ColorPicker />
      <Counter />
    </div>
  );
}

// See ./CounterComponents/Counter.js and
// ./ColorComponents/ColorPicker.js next.
