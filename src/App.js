import React, { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { ResponsiveContainer } from "recharts";
import Headers from "./Headers";
import SavingGoal from "./SavingGoal";
import "./App.css";
import ProductShow from "./ProductShow";
import SalesChart from "./SalesChart";
import Footer from "./Footer";

function App() {
  const [dashboard, setDashboard] = useState(false);
  return (
    <Box sx={{ bgcolor: "#f0f2f5", minHeight: "100vh", padding: 4 }}>
      <div className="header-style">
        <Headers setDashboard={setDashboard} />
      </div>
      {dashboard ? (
        <div>
          <ProductShow />
        </div>
      ) : (
        // Main Content
        <Grid container spacing={3} style={{ marginLeft: "10px" }}>
          {/* Saving Summary */}
          <Grid item xs={12} md={8}>
            <Paper elevation={2} sx={{ padding: 0, borderRadius: 2 }}>
              {/* <Typography variant="h6" fontWeight="bold">
                Saving Summary
              </Typography> */}
              <ResponsiveContainer width="100%" height={440}>
                <SalesChart />
              </ResponsiveContainer>
            </Paper>
          </Grid>
          <SavingGoal />

          {/* Expense Goals by Catgory */}
          <Grid item xs={11.5}>
            <Footer />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default App;
