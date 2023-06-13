import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full">
      <img className="w-[65%]" src="https://picsum.photos/800/600" alt="" />
      <div className="flex flex-col items-center w-[35%]  text-center pt-16">
        <h2 className="mb-5 w-full text-2xl font-semibold">Login</h2>
        <TextField
          className="w-[90%]"
          sx={{ marginBottom: "12px" }}
          id="outlined-basic"
          label="Email Address*"
          variant="outlined"
        />
        <TextField
          sx={{ marginBottom: "12px" }}
          className="w-[90%]"
          id="outlined-basic"
          label="Password*"
          variant="outlined"
        />
        <Button
          onClick={() => {
            navigate("/home");
          }}
          className="w-[90%]"
          sx={{ marginBottom: "12px" }}
          variant="contained"
        >
          Login
        </Button>
        <h3 className="text-left w-full p-6">
          Don't have an account?{" "}
          <span
            onClick={() => {
              navigate("/register");
            }}
            className="underline cursor-pointer"
          >
            Sign Up
          </span>{" "}
        </h3>
        <h3>Copyright © Your Website 2023.</h3>
      </div>
    </div>
  );
};

export default Login;
