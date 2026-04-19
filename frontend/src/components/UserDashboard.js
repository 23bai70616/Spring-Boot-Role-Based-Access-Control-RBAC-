import React, { useState, useEffect } from "react";
import { 
  Container, 
  Typography, 
  Button, 
  Box, 
  Paper, 
  Divider,
  Card,
  CardContent,
  Avatar
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import api from "../api";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const [message, setMessage] = useState("Loading...");
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("user");

  useEffect(() => {
    if (!role) {
      navigate("/");
    } else {
      fetchData();
    }
  }, [role, navigate]);

  const fetchData = async () => {
    try {
      const res = await api.get("/user/profile");
      setMessage(res.data.message);
    } catch (err) {
      setMessage("Error fetching profile data. Make sure you have the USER role.");
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'success.main', mr: 2 }}>
              <PersonIcon />
            </Avatar>
            <Typography variant="h4" fontWeight="bold">User Dashboard</Typography>
          </Box>
          <Button variant="outlined" color="error" onClick={logout}>Logout</Button>
        </Box>
        
        <Divider sx={{ mb: 4 }} />

        <Card variant="outlined" sx={{ mb: 4, bgcolor: '#f5f5f5' }}>
          <CardContent>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Session Info
            </Typography>
            <Typography variant="body1"><strong>Username:</strong> {username}</Typography>
            <Typography variant="body1"><strong>Role:</strong> {role}</Typography>
          </CardContent>
        </Card>

        <Typography variant="h5" gutterBottom>Profile Data from API</Typography>
        <Paper variant="outlined" sx={{ p: 2, bgcolor: '#e8f5e9', borderLeft: '5px solid #4caf50' }}>
          <Typography variant="body1">{message}</Typography>
        </Paper>

        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="success" onClick={fetchData}>
            Refresh Profile Data
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default UserDashboard;
