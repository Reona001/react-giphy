import '../assets/stylesheets/application.scss';

// 1. specify where (which page) you want to add react

import ReactDOM from "react-dom";
import React from "react"; //importing the jsx capability
import App from './components/App';

const root = document.querySelector("#root");
console.log(root);

// ReactDOM.render("Some Stuff", root);
// it gives us a react dom object we can access!

// ReactDOM.render(<h1>Hello World</h1>, root);
// you can directly render out html element in JSX
// This means we can render whole components
// 2 syntaxes available function and

// const Hello = (props) => {
//   const { name, flag } = props;
//   return (
//   <div>
//     <h1>Hello {name}!!! {flag}!!!</h1>;
//   </div>
//   );
// };

// ReactDOM.render(<Hello name="Gary" flag="flag" />, root);



// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props;
//     return (
//       <div>
//         <h1>Hello {name}!!! {flag}!!!</h1>;
//       </div>
//     );
//   }
// }


// ReactDOM.render(<Hello name="Dave" flag="flag" />, root);


ReactDOM.render(<App />, root);


//Other topics
//Effect hook
//Use Effect
//React Router
//Redux vs React
//React Native for mobile apps
