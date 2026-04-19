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
  Avatar,
  Grid,
  Alert
} from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import api from "../api";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [adminData, setAdminData] = useState("Loading...");
  const [userData, setUserData] = useState("Loading...");
  const navigate = useNavigate();
  const role = sessionStorage.getItem("role");
  const username = sessionStorage.getItem("user");

  useEffect(() => {
    if (role !== "ADMIN") {
      alert("Access Denied: Admin role required.");
      navigate("/");
    } else {
      fetchAdminData();
      fetchUserData();
    }
  }, [role, navigate]);

  const fetchAdminData = async () => {
    try {
      const res = await api.get("/admin/dashboard");
      setAdminData(res.data.message);
    } catch (err) {
      setAdminData("Access Denied to Admin APIs");
    }
  };

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.message);
    } catch (err) {
      setUserData("Could not fetch user data");
    }
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: 'error.main', mr: 2, width: 56, height: 56 }}>
              <AdminPanelSettingsIcon fontSize="large" />
            </Avatar>
            <Box>
              <Typography variant="h4" fontWeight="bold">Admin Dashboard</Typography>
              <Typography variant="subtitle1" color="textSecondary">Executive Control Panel</Typography>
            </Box>
          </Box>
          <Button variant="contained" color="error" onClick={logout}>Logout</Button>
        </Box>
        
        <Divider sx={{ mb: 4 }} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card elevation={2} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" gutterBottom>Session Details</Typography>
                <Typography variant="body1"><strong>Admin:</strong> {username}</Typography>
                <Typography variant="body1"><strong>Role:</strong> {role}</Typography>
                <Alert severity="info" sx={{ mt: 2 }}>You have full system access.</Alert>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" gutterBottom>System Monitoring</Typography>
              <Paper variant="outlined" sx={{ p: 3, mb: 2, bgcolor: '#fff5f5' }}>
                <Typography variant="subtitle2" color="error" fontWeight="bold">ADMIN ENDPOINT STATUS</Typography>
                <Typography variant="h6">{adminData}</Typography>
                <Button size="small" variant="outlined" color="error" sx={{ mt: 1 }} onClick={fetchAdminData}>
                  Reload Admin Data
                </Button>
              </Paper>

              <Paper variant="outlined" sx={{ p: 3, bgcolor: '#f0f4f8' }}>
                <Typography variant="subtitle2" color="primary" fontWeight="bold">USER ENDPOINT STATUS (Inherited Access)</Typography>
                <Typography variant="h6">{userData}</Typography>
                <Button size="small" variant="outlined" color="primary" sx={{ mt: 1 }} onClick={fetchUserData}>
                  Reload User Data
                </Button>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default AdminDashboard;
