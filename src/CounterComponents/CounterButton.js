import React from "react";

/*
  Note the "props" parameter passed in to the Component
  function... this is how we access the properties that are
  set on the component instance by whatever parent component
  is creating a CounterButton.

  When the parent component creates property name/value pairs in
  the opening tag of this component (<CounterButton>), those
  name/value pairs are combined into an object, and that object
  is passed as the only parameter to this component function.

  This allows us to access data that is passed from the parent
  component to the child component, which allows the parent 
  component to "influence" how the child component behaves
  and is rendered (depending on the logic in the child
  component). In this case, the parent <Counter/> component is
  passing 2 properties to instances of the CounterButton component:

      <CounterButton numberFunction={somefunction} buttonLabel="somelabel">...
  
      * numberFunction
      * buttonLabel

  These properties, set on an instance of <CustomButton> in
  the parent <Counter> component, are combined into an object and 
  passed to the CustomButton() function.

  We can name the parameter anything we want. By convention,
  it's typically named "props" (a shortened form of "properties",
  meaning "properties that were set on the component instance by
  the parent.")


  We have no validation here, we are assuming that the component
  instantiator is passing the properties that we need/care about...

  The props.numberFunction property is a function to be called in
  the onClick() event handler... in this case, it's a function
  that modifies the state object, "count", in the parent <Counter/>
  component. When the function is executed in response to a button
  click, it runs the code in the closure created by the Counter()
  component function, and thus has access to all closure variables
  there, including the state variable "count", and the "count" setter
  method, "setCount". So even though the click event is handled by
  this <CounterButton/> component, the event handler executes a 
  function that is scoped to the <Counter/> component. See Counter.js.

  The props.buttonLabel is just the text to display on the button.

  Note that the onClick event handler can just reference the
  function value from props, without creating a different
  anonymous function (or arrow function). In other words, you can
  do this:

    <button onClick={props.numberFunction}...

  without having to do this:

    <button onClick={() => {props.numberFunction()}}...

  Shout out to Sean Hockin for bringing this up!
*/
export default function CounterButton(properties) {
  // The "properties" parameter is an object that contains
  // all of the property name/value pairs that were set
  // in the opening JSX tag for any <CounterButton/> component.
  //
  // It will be like the following object, in our case:
  //
  //    const properties={
  //      numberFunction: ()=>{},
  //      buttonLabel: "something"
  //    }
  //
  // See the <CounterButton/> JSX components in the return()
  // statement of the Counter() component function.
  return (
    <button onClick={properties.numberFunction}>
      {properties.buttonLabel}
    </button>
  );
}

/*
  A React "component function" is just like any other function.
  It can take parameters, perform statements, and return a value.
  We call it a "component function" because if follows certain
  specific conventions:

    * The name of the function must be capitalized
    * The function will be called by React with 0 or 1
      parameter. If there is a parameter defined, it will
      contain an object that has the properties on the JSX
      element that was used to create the component instance.
    * The return value is always JSX syntax.
    * The contents of the function are "pure" in the "functional
      programming" sense - it does not create any side-effects
      by accessing services or resources besides its parameter
      and local variables. Except for code in the useEffect()
      function calls.

  Other than these, React component functions are just like
  any other function. Like the function below, the parameter that
  contains the "properties" can be called anything. Although 
  there is no requirement for the name, it is conventional to
  call it "props" or maybe "properties".

  In addition, the parameter is just a regular JSON object.
  It contains a named property for each of the properties set
  in the opening JSX tag for the component when it is returned
  as part of another component, with the value being the value
  in the name/value pair in the JSX opening tag.
*/
function MyFancyFunction(whateveryoulike) {
  console.log(`do ${whateveryoulike}`);
}

MyFancyFunction("a dance");
