/*

  This is the ColorPicker component module. We export
  the ColorPicker component function as the default export.

  See Counter.js for more information on passing props and
  event handler methods to child components in order to share
  parent state data with children.

  In this component, we see an example of iterating over a
  collection of data (an array of objects) in order to create
  an arbitrary number of components. In this case, we want to
  create multiple "ColorButton" components, one for each object
  in the array found in the ../data.js file. Each object in the
  array specifies a "value" and "color" property, which can be
  used to style the button, and set state when the button is 
  clicked.

  The array is a named export in the file ../data.js, so we need
  to use the named import syntax, below. We import the array
  into a variable with a name that matches the export: buttonDataArray.

*/
import React, { useState } from "react";
import ColorButton from "./ColorButton.js";
import { buttonDataArray } from "../data.js";

export default function ColorPicker(props) {
  //
  // our color state data - when this changes, our UI changes.
  //
  const [color, setColor] = useState("Red");

  //
  // The following code supports dynamically altering the
  // style on a JSX component.
  //
  // Default JSX components, like their HTML element counterparts,
  // can have a "style" attribute or property, for inline CSS styles.
  // The value of the "style" attr is an object, which is converted
  // into inline CSS syntax when JSX is transpiled to JavaScript.
  //
  // In this case, we are using it to style the color of a label,
  // so "color" is the only property of the attribute we are using.
  //
  // We use the inline style on the <span /> that contains the
  // color word based on our state, below (see line 104);
  //
  const style = {
    color: "#E62739" // <--- this is red, basically
  };

  //
  // This if{} statement just changes the hex color value in the
  // styles{} object based on our state.
  //
  // Note that this if{} statement isn't comprehensive...
  // It only has 4 colors in it, while our data.js file
  // has 5, and could potentially have more.
  //
  // STRETCH: Can you think of a way to dynamically allow
  // text color based on the state value?
  //
  // Hint: buttonDataArray
  //
  if (color.toUpperCase() === "GREEN") {
    style.color = "#57e278";
  } else if (color.toUpperCase() === "PINK") {
    style.color = "#e257c1";
  } else if (color.toUpperCase() === "BLUE") {
    style.color = "#2e6cd3";
  } else {
    style.color = "#E62739"; // <--- this is red, basically
  }

  //
  // The following Array.map() function iterates over the buttonDataArray
  // object that we imported from ../data.js, and creates an array of
  // new <ColorButton/> components (one for each original array element).
  //
  // To add this array of components to our JSX below, you must include
  // it in curly braces {}.
  //
  // This is because the "list" is actually an Array - that's what
  // Array.map() returns - and an Array is a JavaScript object, and accessing
  // JavaScript things in JSX must be done through curly braces (this is called
  // "JavaScript interpolation".)
  //
  // See https://reactjs.org/docs/lists-and-keys.html
  //
  const colorButtons = buttonDataArray.map(buttonDataObject => (
    <ColorButton buttonData={buttonDataObject} setColor={setColor} />
  ));

  console.log(colorButtons);

  return (
    <div className="counter">
      <p className="click_desc">
        {`Color: `}
        <span style={style}>{color}</span>
      </p>
      <div className="button_container">
        {/*
          The following colorButtons list of components must be surrounded in
          curly braces {} to be included in JSX... because it is a JavaScript
          object (it's an array... that's what Array.map() returns!). 
          See the console.log(colorButtons) output above.

          Note that I have separated the code that makes the list from the
          location where the list is included. It makes this <div/> cleaner,
          but in practice, you would probably put the Array.map() call right here,
          and include it in {}. I separated them to emphasize the concept...
        */}
        {colorButtons}
      </div>
    </div>
  );

  //
  // The following commented-out code is a static way of creating the <ColorButton/>
  // components we want, rather than reading them from data.js.
  //

  // return (
  //   <div>
  //     <p>
  //       {`Color: `}
  //       <span className="picker-choice">{color}</span>
  //     </p>
  //     <div className="button-container">
  //       <ColorButton
  //         color={"Blue"}
  //         setColor={setColor}
  //         label="blue heart"
  //         buttonValue="💙"
  //       />
  //       <ColorButton
  //         color={"Green"}
  //         setColor={setColor}
  //         label="green heart"
  //         buttonValue="💚"
  //       />
  //       <ColorButton
  //         color={"Pink"}
  //         setColor={setColor}
  //         label="Pink heart"
  //         buttonValue="💗"
  //       />
  //     </div>
  //   </div>
  // );
}
