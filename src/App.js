import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Hello World</h1>
        <p>Loading : {this.props.loading ? "true" : "false"}</p>
        <p>Data : {JSON.stringify(this.props.data)}</p>
        <p>Error : {this.props.error}</p>
        <button onClick={() => this.props.login()}>Login</button>
      </>
    );
  }
}

const middleware = () => {
  return (dispatch) => {
    dispatch({ type: "Login_Start" });
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => dispatch({ type: "Login_Success", payload: json }))
      .catch((err) => dispatch({ type: "Login_Fail", error: "Error.." }));
  };
};

const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(middleware())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
