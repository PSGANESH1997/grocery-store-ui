import React, { useState } from "react";
import styled from "styled-components";
import ProductCard from "./Components/ProductCard";
import Products from "./Components/Products";
import Banner from "./Components/Banner";
import FooterGrid from "./Components/FooterGrid";
import CountDown from "./Components/CountDown";
import SignupBanner from "./Components/SignupBanner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { IconButton } from "@mui/material";

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
  // justify-content: space-between;
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
      typeName: "vegetables",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      typeName: "vegetables",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      typeName: "Vegetables",
      title: "Potatoes 1kg",
      type: "Fruits",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      typeName: "Fruits",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      typeName: "Vegetables",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      typeName: "Vegetables",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      typeName: "Vegetables",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      typeName: "vegetables",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      typeName: "vegetables",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      typeName: "Vegetables",
      title: "Potatoes 1kg",
      type: "Fruits",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      typeName: "Fruits",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      typeName: "Vegetables",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      typeName: "Vegetables",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      typeName: "Vegetables",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      typeName: "vegetables",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      typeName: "vegetables",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      typeName: "Vegetables",
      title: "Potatoes 1kg",
      type: "Fruits",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      typeName: "Fruits",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      typeName: "Vegetables",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      typeName: "Vegetables",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      typeName: "Vegetables",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      typeName: "vegetables",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      typeName: "vegetables",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      typeName: "Vegetables",
      title: "Potatoes 1kg",
      type: "Fruits",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      typeName: "Fruits",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      typeName: "Vegetables",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      typeName: "Vegetables",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      typeName: "Vegetables",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      typeName: "vegetables",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      typeName: "vegetables",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      typeName: "Vegetables",
      title: "Potatoes 1kg",
      type: "Fruits",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      typeName: "Fruits",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      typeName: "Vegetables",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      typeName: "Vegetables",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      typeName: "Vegetables",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      typeName: "vegetables",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      typeName: "vegetables",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      typeName: "Vegetables",
      title: "Potatoes 1kg",
      type: "Fruits",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      typeName: "Fruits",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
    },
    {
      image:
        "https://www.seekpng.com/png/full/915-9159355_broccoli-nutrition.png",
      typeName: "Vegetables",
      title: "Broccoli 1kg",
      price: "$1.50",
      discountedPrice: "$2.99",
      rating: 5,
    },
    {
      image: "https://specialtyproduce.com/sppics/601.png",
      typeName: "Vegetables",
      title: "Green Beans 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
      typeName: "Vegetables",
      title: "Carrot 250g",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4,
    },
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      typeName: "vegetables",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      typeName: "vegetables",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
    },
  ];
  const productsCard = [
    {
      image:
        "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
      typeName: "Vegetables",
      title: "Radish 500g",
      price: "$2",
      discountedPrice: "$3.99",
      rating: 4,
      discount: 50, // 50% discount
      sold: 30, // 30 items sold
      stock: 50, // 50 items in stock
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
      typeName: "Vegetables",
      title: "Garlic 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.1,
      discount: 20, // 20% discount
      sold: 40, // 40 items sold
      stock: 50, // 50 items in stock
    },
    {
      image:
        "https://m.media-amazon.com/images/I/31WtrNh0M8L._SX300_SY300_QL70_FMwebp_.jpg",
      typeName: "Vegetables",
      title: "Potatoes 1kg",
      price: "$1",
      discountedPrice: "$1.99",
      rating: 4.5,
      discount: 15, // 15% discount
      sold: 20, // 20 items sold
      stock: 50, // 50 items in stock
    },
    {
      image:
        "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
      typeName: "Vegetables",
      title: "Tomato 200g",
      price: "$0.30",
      discountedPrice: "$0.99",
      rating: 3.5,
      discount: 10, // 10% discount
      sold: 25, // 25 items sold
      stock: 50, // 50 items in stock
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

  const handlePrevious = () => {
    console.log("Previous clicked");
  };

  const handleNext = () => {
    console.log("Next clicked");
  };

  return (
    <AppContainer style={{ marginTop: "75px" }}>
      <Slider {...settings}>
        {products.map((product, index) => (
          <ProductCardWrapper key={index}>
            <Products
              image={product.image}
              typeName={product.typeName}
              title={product.title}
              price={product.price}
              discountedPrice={product.discountedPrice}
              rating={product.rating}
            />
          </ProductCardWrapper>
        ))}
      </Slider>

      <Banner />

      <DailyDealsSection style={{ margin: "0px" }}>
        <HeaderRow>
          <h3
            style={{
              marginLeft: "20px",
              fontSize: "20px",
              marginRight: "30px",
            }}
          >
            Daily Best Sells
          </h3>
          {/* Navigation Tabs */}
          <Box display="flex" gap={2} alignItems="center">
            {tabs.map((tab) => (
              <Button
                key={tab}
                color={selectedTab === tab ? "success" : "inherit"}
                onClick={() => setSelectedTab(tab)} // Update the selected tab on click
                sx={{
                  borderRadius: 20,
                  textTransform: "none",
                  fontWeight: selectedTab === tab ? "bold" : "normal",
                  color: selectedTab === tab ? "#f19f09" : "#fffff",
                  fontSize: "1rem",
                  backgroundColor: "#37612a",
                }}
              >
                {tab}
              </Button>
            ))}
          </Box>
          <CountDown />
          {/* Arrow Icons for Navigation */}
          <Box
            display="flex"
            alignItems="center"
            gap={1}
            ml="auto"
            sx={{ marginRight: "20px" }}
          >
            <IconButton
              onClick={handlePrevious}
              sx={{
                border: "1px solid white",
                fontSize: "10px",
                color: "#ffffff",
                backgroundColor: "#ee490e",
                padding: "15px",
                width: "12px",
                height: "12px",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                border: "1px solid white",
                fontSize: "10px",
                color: "#ffffff",
                backgroundColor: "#ee490e",
                padding: "15px",
                width: "12px",
                height: "12px",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </HeaderRow>

        <ProductSection>
          {productsCard.map((product, index) => (
            <ProductCardWrapper key={index}>
              <ProductCard
                image={product.image}
                typeName={product.typeName}
                title={product.title}
                price={product.price}
                discountedPrice={product.discountedPrice}
                rating={product.rating}
                discount={product.discount}
                sold={product.sold}
                totalStock={product.stock}
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
