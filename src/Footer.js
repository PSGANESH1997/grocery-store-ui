import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { FaPen } from "react-icons/fa";

const categoriesData = [
  { name: "Housing", amount: "$101.00" },
  { name: "Food", amount: "$101.00" },
  { name: "Transportation", amount: "$101.00" },
  { name: "Entertainment", amount: "$101.00" },
  { name: "Shopping", amount: "$101.00" },
  { name: "Others", amount: "$101.00" },
];

const Footer = () => {
  const [activeCategory, setActiveCategory] = useState(0); // Set default to index 0 (Housing)

  const handleCardClick = (index) => {
    setActiveCategory(index); // Set the clicked box as active
  };

  return (
    <Box
      sx={{
        marginLeft: "10px",
        backgroundColor: "#fffff",
        marginBottom: "25px",
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Expenses Goals by Category
      </Typography>
      <Grid container spacing={2}>
        {categoriesData.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              onClick={() => handleCardClick(index)} // Handle click event
              sx={{
                backgroundColor:
                  activeCategory === index ? "#00C39A" : "#ffffff",
                color: activeCategory === index ? "#ffffff" : "#000000",
                boxShadow: 3,
                borderRadius: "10px",
                cursor: "pointer", // Add a pointer cursor to indicate clickability
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                  }}
                >
                  <Typography variant="body1" fontWeight="bold">
                    {category.name}
                  </Typography>
                  <IconButton
                    sx={{
                      color: activeCategory === index ? "#ffffff" : "#000000",
                    }}
                  >
                    ...
                  </IconButton>
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", marginBottom: "15px" }}
                >
                  {category.amount}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderTop: "1px solid #dcdcdc",
                    paddingTop: "10px",
                    border: "1px solid",
                    borderColor:
                      activeCategory === index ? "#ffffff" : "#000000",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    width: "400px",
                    margin: "0 auto",
                  }}
                >
                  <IconButton
                    sx={{
                      color: activeCategory === index ? "#ffffff" : "#000000",
                      fontSize: "12px",
                      marginRight: "5px",
                    }}
                  >
                    <FaPen />
                  </IconButton>
                  <Typography variant="body2">Adjust</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Footer;
