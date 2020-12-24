import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";

const Login = (props) => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const server_login = () => {
    console.log(loginData);

    axios
      .post("https://whispering-scrubland-94560.herokuapp.com/login", loginData)
      .then(
        (response) => {
          console.log(response.data);
        },
        (e) => {
          console.log(e);
        }
      );
  };

  let loginData = {
    email: "",
    password: "",
  };

  const handlePassword = (event) => {
    let password = event.target.value;
    loginData["password"] = password;
    console.log(loginData);
  };

  const handleEmail = (event) => {
    let email = event.target.value;
    loginData["email"] = email;
  };

  return (
    <Fragment>
      <h2>Login Screen</h2>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={handleEmail}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            onChange={handlePassword}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
      </Form>
      <div className="text-center">
        <Button color="primary" onClick={server_login}>
          Sumbit
        </Button>
        <Link to="/home-money-management/register">
          <Button color="warning ml-2">Register</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Login;
