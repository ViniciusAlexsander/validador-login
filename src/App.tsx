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

const theme = createTheme();

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (
      !EmailValidator.isValid(email) &&
      !PasswordValidator.isValid(password)
    ) {
      window.alert("Email e senha inválidos");
    } else if (!EmailValidator.isValid(email)) {
      window.alert("Email inválido");
    } else if (!PasswordValidator.isValid(password)) {
      window.alert("Senha invalida");
    } else {
      window.alert("Email e senha válidos");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
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
            <Typography variant="h6" gutterBottom>
              Requisitos de senha:
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Mais que 8 caracteres
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Uma letra maiúscula
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Uma letra minúscula
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Um número
            </Typography>
            <Typography variant="body1" gutterBottom>
              - Um caractere especial
            </Typography>
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
