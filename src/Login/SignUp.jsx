import React from "react";
import { Link } from "react-router-dom";
import {
  Text,

  Box,

  Input,

} from "@chakra-ui/react";
import "./Signin.css";
const SignUp = () => {
  return (
    <div>
      <Box className="login-box">
        <h2>Login</h2>
        <form>
          <Box className="user-box">
            <Input type="text" name="" required="" />
            <label>UserName</label>
          </Box>
          <Box className="user-box">
            <Input type="text" name="" required="" />
            <label>Email</label>
          </Box>
          <Box className="user-box">
            <Input type="password" />
            <label>Password</label>
          </Box>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
          <Link to={'/SignIn'}>or Login</Link>
        </form>
        <Text>Coded by Soufiane Khalfaoui Hassani</Text>
      </Box>
    </div>
  );
};

export default SignUp;
