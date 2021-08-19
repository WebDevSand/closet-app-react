import React, { useState, useContext } from "react";
import { Typography, TextField, Button, Paper, Slide } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context";

const Login = () => {
  // states for username and password fields
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");
  const [errorUser, setErrorUser] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [errorUserMsg, setErrorUserMsg] = useState("");
  const [errorPassMsg, setErrorPassMsg] = useState("");
  const ErrorMsg = "Must be at least 4 characters";
  // state for animation
  const [load, setLoad] = useState(true);
  // importing login function
  const { login } = useContext(UserContext);
  // used to navigate on login
  const history = useHistory();
  return (
    <Slide direction="right" in={load} mountOnEnter unmountOnExit>
      <Paper className="margin10 compCenter">
        <form>
          <Typography variant="h3" component="h3">
            Login
          </Typography>
          <div className="margin50">
            <TextField
              variant="outlined"
              error={errorUser}
              helperText={errorUserMsg}
              label="Username:"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
          <div className="margin50">
            <TextField
              variant="outlined"
              type="password"
              error={errorPass}
              helperText={errorPassMsg}
              label="Password:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{ marginBottom: 10 }}
            onClick={(e) => {
              e.preventDefault();
              if (userInput.length < 4 && password.length < 4) {
                setErrorUser(true);
                setErrorPass(true);
                setErrorUserMsg(ErrorMsg);
                setErrorPassMsg(ErrorMsg);
              } else if (userInput.length < 4) {
                setErrorUser(true);
                setErrorUserMsg(ErrorMsg);
              } else if (password.length < 4) {
                setErrorPass(true);
                setErrorPassMsg(ErrorMsg);
              } else {
                setLoad(false);
                setTimeout(() => {
                  login(userInput);
                  history.push("/addGarm");
                }, [500]);
              }
            }}
          >
            Log In!
          </Button>
        </form>
      </Paper>
    </Slide>
  );
};

export default Login;
