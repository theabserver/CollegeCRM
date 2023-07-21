import React, { useState, useEffect, useMemo } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import { connect } from "react-redux";
import getUser from "../Actions/users";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

let Login = ({ getUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const loading = useSelector((state) => state.loading);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const hasUser =
    localStorage.getItem("user") &&
    localStorage.getItem("usertoken").length > 0;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Login credentials:", formData);
    getUser(formData);
    setFormData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    console.log(`User status: ${hasUser}`);
  }, [hasUser]);

  return (
    <>
      {hasUser && <Navigate to="/" />}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              loading={loading}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

const mapDispatchToProps = {
  getUser: getUser,
};

export default Login = connect(null, mapDispatchToProps)(Login);
