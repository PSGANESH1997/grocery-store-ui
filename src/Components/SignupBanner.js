import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const SignupBanner = () => {
  return (
    <Box
      style={{
        marginTop: "15.5px",
        height: "373px",
        backgroundColor: "rgb(171 113 58)",
        padding: "20px",
        borderRadius: "8px",
      }}
      display="flex"
      flexDirection="column"
      gap="10px"
    >
      <Typography variant="h6" gutterBottom>
        10% OFF
      </Typography>
      <Typography variant="body2" gutterBottom>
        For new member signup at the first time
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        sx={{
          bgcolor: "white",
          color: "white",
          borderRadius: "4px",
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        sx={{
          bgcolor: "white",
          borderRadius: "4px",
        }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: "#ff8c00",
          "&:hover": {
            backgroundColor: "#e07b00",
          },
        }}
      >
        Register Now
      </Button>
    </Box>
  );
};

export default SignupBanner;
