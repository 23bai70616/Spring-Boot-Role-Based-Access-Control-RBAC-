import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("user");

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  // Don't show navbar on login page
  if (location.pathname === "/") return null;

  return (
    <AppBar position="static" sx={{ mb: 4, background: 'linear-gradient(45deg, #1976d2 30%, #21CBF3 90%)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <SecurityIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontWeight: 'bold', display: { xs: 'none', md: 'flex' } }}
          >
            RBAC Secure Portal
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
              Logged in as: <strong>{username}</strong> ({role})
            </Typography>
            
            <Button color="inherit" onClick={() => navigate("/user")}>Dashboard</Button>
            
            {/* Role-Based UI Control: Only show Admin link if role is ADMIN */}
            {role === "ADMIN" && (
              <Button 
                variant="contained" 
                color="secondary" 
                onClick={() => navigate("/admin")}
                sx={{ fontWeight: 'bold' }}
              >
                Admin Panel
              </Button>
            )}

            <Button color="inherit" variant="outlined" sx={{ borderColor: 'rgba(255,255,255,0.5)' }} onClick={logout}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
