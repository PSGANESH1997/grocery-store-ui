import React, { useEffect, useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  TextField,
  Avatar,
  Button,
} from "@mui/material";
import { Search, Notifications, Settings } from "@mui/icons-material";

function Headers({ setDashboard }) {
  const tabs = [
    "Home",
    "Dashboard",
    "Balances",
    "Transactions",
    "Expenses",
    "Goals",
    "Products",
  ];
  // Define state to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState(tabs[5]);

  useEffect(() => {
    if (selectedTab === tabs[6]) {
      setDashboard(selectedTab);
    } else if (selectedTab === tabs[1]) {
      setDashboard(selectedTab);
    } else {
      setDashboard(selectedTab);
    }
    // eslint-disable-next-line
  }, [selectedTab]);

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{
        width: "99%",
        marginTop: "0.3px",
        backgroundColor: "#f5f5f5",
        borderRadius: 40,
        paddingY: 0.6,
        paddingX: 2,
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo and App Name */}
        <Box display="flex" alignItems="center">
          <Avatar
            sx={{
              bgcolor: "green",
              width: 36,
              height: 36,
              marginRight: 1,
            }}
          >
            EP
          </Avatar>
          <Typography variant="h6" fontWeight="bold" color="primary">
            EPaisa
          </Typography>
        </Box>

        {/* Navigation Tabs */}
        <Box display="flex" gap={1} alignItems="center">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={selectedTab === tab ? "contained" : "text"}
              color={selectedTab === tab ? "success" : "inherit"}
              onClick={() => setSelectedTab(tab)} // Update the selected tab on click
              sx={{
                borderRadius: 20,
                textTransform: "none",
                fontWeight: selectedTab === tab ? "bold" : "normal",
                backgroundColor:
                  selectedTab === tab ? "#2ecc71" : "transparent",
                color: selectedTab === tab ? "white" : "inherit",
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor:
                    selectedTab === tab ? "#27ae60" : "transparent",
                },
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>

        {/* Search, Notifications, and Profile */}
        <Box display="flex" alignItems="center" gap={2}>
          <TextField
            placeholder="Search here..."
            variant="outlined"
            size="small"
            sx={{
              bgcolor: "white",
              borderRadius: 5,
              width: 150,
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              },
            }}
            InputProps={{
              startAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
          />
          <IconButton color="inherit">
            <Settings />
          </IconButton>
          <IconButton color="inherit">
            <Notifications />
          </IconButton>
          <Avatar
            src="/path/to/profile-image.jpg"
            alt="Profile Picture"
            sx={{
              width: 36,
              height: 36,
              bgcolor: "green",
              border: "2px solid white",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Headers;
