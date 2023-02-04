import React, { Component } from "react";

class Name extends Component {
  state = { name: "Nitish Raj" };

  //     constructor(props) {
  //         super(props);
  //         this.setName = this.setName.bind(this);
  //     }

  setName(name) {
    this.setState({ ...this.state, name: "Amit kumar" });
  }

  testHandler = () => {
    console.log("testHandler");
  };

  render() {
    return (
      <>
        <h1>The name is: {this.state.name}</h1>
        <button
          onClick={() => {
            this.setName("Amit kumar");
            this.testHandler();
          }}
        >
          Click Me!
        </button>
      </>
    );
  }
}

// const Name = () => {
//   const [state, setState] = useState({ name: "Nitish Raj" });

//   let setName = (e) => {
//     setState({ ...state, name: "Amit kumar" });
//   };
//   return (
//     <>
//       <h1>The Name is : {state.name} </h1>
//       <button onClick={setName}>Click Me!</button>
//     </>
//   );
// };

export default Name;
