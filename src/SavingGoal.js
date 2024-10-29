import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SavingGoal = () => {
  const totalTarget = 80000;
  const achieved = 45000;
  const achievedPercentage = (achieved / totalTarget) * 100;

  return (
    <Paper
      elevation={2}
      sx={{
        height: 441,
        padding: 4,
        borderRadius: 4,
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Header Row: Saving Goal and Date */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          marginBottom: 6,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Saving Goal
        </Typography>
        <Typography
          variant="body2"
          sx={{
            backgroundColor: "#f5f5f5",
            padding: "4px 8px",
            borderRadius: "4px",
          }}
        >
          10 Jun - 30 Dec
        </Typography>
      </Box>

      {/* Main Content Row: Targets on the Left, Progress Bar on the Right */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          my: 2,
        }}
      >
        {/* Target Details on the Left */}
        <Box sx={{ flex: 1, mr: 2 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2,
              p: 1,
              borderRadius: 2,
              border: "1px solid #e0e0e0",
            }}
          >
            <EmojiEventsIcon fontSize="medium" sx={{ color: "gray" }} />
            <Box sx={{ textAlign: "left", ml: 1 }}>
              <Typography variant="body2" color="textSecondary">
                Target Achieved
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                $101.00
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              p: 1,
              borderRadius: 2,
              border: "1px solid #e0e0e0",
            }}
          >
            <CrisisAlertIcon fontSize="medium" sx={{ color: "gray" }} />
            <Box sx={{ textAlign: "left", ml: 1 }}>
              <Typography variant="body2" color="textSecondary">
                This Month Target
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                $521.00
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Progress Bar on the Right */}
        <Box sx={{ width: 170, textAlign: "center" }}>
          <CircularProgressbarWithChildren
            value={achievedPercentage}
            styles={buildStyles({
              pathColor: "#4caf50",
              trailColor: "#e0e0e0",
            })}
          >
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#4caf50" }}
            >
              {achieved / 1000}k
            </Typography>
          </CircularProgressbarWithChildren>
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            Target vs Achievement
          </Typography>
        </Box>
      </Box>

      {/* Divider */}
      {/* <Divider sx={{ my: 2 }} /> */}

      {/* Footer Row: Add Client Button */}
      <Box sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            borderColor: "green",
            color: "green",
            textTransform: "none",
            fontWeight: "bold",
            marginTop: 6,
          }}
          endIcon={<EditIcon />}
        >
          Add Client
        </Button>
      </Box>
    </Paper>
  );
};

export default SavingGoal;
