import "./App.css";
import Login from "./components/Login.js";
import Register from "./components/Register";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import Success from "./components/Success";

function App() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (data) => {
    console.log(data);
    setState({ email: data["email"], password: data["password"] });
  };

  return (
    <Router>
      <main className="container">
        <Route path="/home-money-management/user" component={Success} exact />
        {state.email !== "" ? (
          <Redirect to="/home-money-management/user" />
        ) : (
          <Fragment>
            <Route
              path="/home-money-management"
              component={() => Login(handleLogin)}
              exact
            />
            <Route
              path="/home-money-management/register"
              component={Register}
              exact
            />
          </Fragment>
        )}
      </main>
    </Router>
  );
}

export default App;
