import React, { useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { ResponsiveContainer } from "recharts";
import Headers from "./Headers";
import SavingGoal from "./SavingGoal";
import "./App.css";
import ProductShow from "./ProductShow";
import SalesChart from "./SalesChart";
import Footer from "./Footer";
import Home from "./Components/Home";

function App() {
  const [dashboard, setDashboard] = useState(false);
  return (
    <div className="over-all-component">
      <Box sx={{ bgcolor: "#f0f2f5", minHeight: "100vh", padding: 4 }}>
        <div className="header-style">
          <Headers setDashboard={setDashboard} />
        </div>
        {dashboard === "Products" ? (
          <div>
            <ProductShow />
          </div>
        ) : dashboard === "Home" ? (
          <Home />
        ) : (
          // Main Content
          <Grid
            container
            spacing={2.5}
            style={{ marginLeft: "10px", marginTop: "70px", width: "100%" }}
          >
            {/* Sales Chart and Saving Goal in the same row */}
            <Grid item xs={12} md={6.8}>
              <Paper elevation={2} sx={{ padding: 0, borderRadius: 2 }}>
                <ResponsiveContainer width="100%" height={440}>
                  <SalesChart />
                </ResponsiveContainer>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4.7}>
              <Paper elevation={2} sx={{ padding: 0, borderRadius: 2 }}>
                <ResponsiveContainer width="100%" height={440}>
                  <SavingGoal />
                </ResponsiveContainer>
              </Paper>
            </Grid>

            {/* Expense Goals by Category */}
            <Grid item xs={11.5}>
              <Footer />
            </Grid>
          </Grid>
        )}
      </Box>
    </div>
  );
}

export default App;
