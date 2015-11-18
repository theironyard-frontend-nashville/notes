// import our third party libraries
import React from 'react';
// Define the new counter component
class Counter extends React.Component {
  // Render is called automatically
   render() {

    // This will render a div that lists the count of items that was passed in.
    // the count is available as props. the app component is now sending this property in.
     return (
       <div>
         <span>{this.props.count}</span> Items.
       </div>
     )
   }
 }

 export default Counter;
