import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { TextField } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginURL = process.env.REACT_APP_URL + "/auth/login";
  const notify = () => toast.success("Logged in successfully");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(loginURL, {
        email,
        password,
      });
      const data = await res.data;
      localStorage.setItem("token", data.access_token);
      notify();
      {
        props.onClose();
      }
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.error);
    }
  };
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form onSubmit={handleLogin}>
          <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
            Login
          </DialogTitle>
          <DialogContent>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                type="email"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                required
                type="password"
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button type="submit" autoFocus>
              Login
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

export default Login;
