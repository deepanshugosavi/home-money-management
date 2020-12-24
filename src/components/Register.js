import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Example = (props) => {
  useEffect(() => {
    document.title = "Register";
  }, []);

  let registerData = {
    email: "",
    password: "",
  };
  const handlePassword = (event) => {
    let password = event.target.value;
    registerData["password"] = password;
    console.log(registerData);
  };
  const handleEmail = (event) => {
    let email = event.target.value;
    registerData["email"] = email;
  };
  return (
    <Fragment>
      <h2>Register Screen</h2>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            onChange={handleEmail}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
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
        <Button color="primary">Sumbit</Button>
        <Link to="/home-money-management">
          <Button color="warning ml-2">login Screen</Button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Example;
