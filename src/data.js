/*

  This is an array of objects that contain data for
  rendering buttons in our color picker app.

  If you add or remove elements to/from this list,
  you will see the change in the app.

  See ColorPicker.js for more info. It uses Array.map()
  to create an array of <ColorButton /> components that
  are returned as part of the <ColorPicker /> component.

  This array is exported as a named export. It could
  just as well have been exported as a default export.

*/

export const buttonDataArray = [
  {
    value: "💙",
    color: "Blue"
  },
  {
    value: "💚",
    color: "Green"
  },
  {
    value: "💗",
    color: "Pink"
  },
  {
    value: "💜",
    color: "Purple"
  },
  {
    value: "💛",
    color: "Yellow"
  }
];
