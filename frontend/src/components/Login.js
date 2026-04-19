import React, { useState } from "react";
import { 
  Container, 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper, 
  Alert,
  Fade
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    
    // Create Basic Auth token
    const token = btoa(`${username}:${password}`);
    
    try {
      // Use the profile endpoint to verify credentials
      const res = await axios.get("http://localhost:8081/api/user/profile", {
        headers: { Authorization: `Basic ${token}` }
      });

      if (res.status === 200) {
        const userData = res.data;
        const username_from_db = userData.username;
        const roles = userData.roles || [];
        
        sessionStorage.setItem("user", username_from_db);
        sessionStorage.setItem("auth", token);
        
        // Determine primary role
        let role = "USER";
        if (roles.includes("ROLE_ADMIN")) {
          role = "ADMIN";
        } else if (roles.includes("ROLE_USER")) {
          role = "USER";
        }
        
        sessionStorage.setItem("role", role);

        if (role === "ADMIN") {
          navigate("/admin");
        } else {
          navigate("/user");
        }
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response && err.response.status === 403) {
        setError("Access Denied: You do not have permission to access the system.");
      } else if (err.response && err.response.status === 401) {
        setError("Invalid username or password");
      } else {
        setError("Connection error: Make sure the backend (8081) is running.");
      }
    }

  };

  return (
    <Container maxWidth="xs">
      <Fade in={true} timeout={1000}>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper elevation={6} sx={{ p: 4, width: '100%', borderRadius: 3 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
              <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" fontWeight="bold">
                Sign In
              </Typography>
            </Box>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

            <Box component="form" onSubmit={handleLogin} noValidate>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                variant="outlined"
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
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, py: 1.5, borderRadius: 2, fontWeight: 'bold' }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Box>
      </Fade>
    </Container>
  );
}

export default Login;
