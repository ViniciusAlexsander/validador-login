import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import EmailValidator from "./Validators/Email/email";
import PasswordValidator from "./Validators/Password/password";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const theme = createTheme();


function App() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);

  const [messageError, setMessageError] = useState("");


  const handleSubmit = () => {
    if (
      !EmailValidator.isValid(email) &&
      !PasswordValidator.isValid(password)
    )
      setMessageError("Email e senha inválidos");
    else if (!EmailValidator.isValid(email))
      setMessageError("Email inválido");
    else if (!PasswordValidator.isValid(password))
      setMessageError("Senha invalida");
    else
      setMessageError("Login feito com sucesso !!!");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh"
      }} >
        <CssBaseline />
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
            {messageError}
          </MuiAlert>
        </Snackbar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
