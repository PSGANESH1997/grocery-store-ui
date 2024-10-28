import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./Components/ProductCard";
import Banner from "./Components/Banner";
import FooterGrid from "./Components/FooterGrid";
import CountDown from "./Components/CountDown";
import SignupBanner from "./Components/SignupBanner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@mui/material";

const AppContainer = styled.div`
  background-color: #37612a;
  color: #ffffff;
  font-family: Arial, sans-serif;
  padding: 2rem;
`;

const ProductSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 2rem;
`;

const DailyDealsSection = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  background: #335f33;
  border-radius: 10px;
  text-align: center;
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  text-align: start;
`;

const ProductCardWrapper = styled.div`
  margin: 10px;
`;

function ProductShow() {
  // Define state to keep track of the selected tab
  const tabs = ["Featured", "Popular", "New"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const products = [
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
  ];

  const productsCard = [
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <AppContainer>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCardWrapper key={index}>
            <ProductCard
              image={product.image}
              title={product.title}
              price={product.price}
              discountedPrice={product.discountedPrice}
              rating={product.rating}
            />
          </ProductCardWrapper>
        ))}
      </Slider>

      <Banner />

      <DailyDealsSection>
        <HeaderRow>
          <h2>Daily Best Sells</h2>
          {/* Navigation Tabs */}
          <Box display="flex" gap={3} alignItems="center">
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
          <CountDown />
        </HeaderRow>

        <ProductSection>
          {productsCard.map((product, index) => (
            <ProductCardWrapper key={index}>
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
                rating={product.rating}
              />
            </ProductCardWrapper>
          ))}
          <SignupBanner />
        </ProductSection>
      </DailyDealsSection>

      <FooterGrid />
    </AppContainer>
  );
}

export default ProductShow;
