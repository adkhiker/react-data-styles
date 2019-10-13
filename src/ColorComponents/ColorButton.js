import React from "react";

//
// Pretty straightforward... we call the state var setter
// directly when this button is clicked, using the color
// value that is passed in with props.
//
// This is another method to allow children to modify
// state data created by a parent component.
//
// With the <Counter /> component, we passed in a custom
// method that is defined in the parent component function,
// and that uses the setter method to change the state.
//
// In this case, we pass the actual setter method to the
// child, with the value that it should set the state var
// to.
//
//
export default function ColorButton(props) {
  return (
    <button
      className="color_button"
      onClick={() => props.setColor(props.buttonData.color)}
    >
      {/*
        Note that the example during the lecture, when I typed
        it, had a "role" property, and an "aria-label" property...
        These are properties/attributes that are for assisting
        screen readers, as part of the ARIA standard, in interpreting
        what the element is for. This is a span element, but
        is being used to contain an image, like an <img/> tag,
        so with the role property, we can tell screen readers
        how to actually interpret the tag. (Screen readers are
        software systems that read the display out loud for
        people who are visually impaired.) I took the attributes
        out to keep the code clean and focused...
      */}
      <span>{props.buttonData.value}</span>
    </button>
  );
}
