import React from "react";
import styled from "styled-components";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DiscountIcon from "@mui/icons-material/Discount";

const Banner = () => {
  return (
    <Container>
      <Card bgColor="#09900d">
        <IconWrapper>
          <LocalShippingIcon style={{ fontSize: "20px", color: "white" }} />
        </IconWrapper>
        <TextWrapper>
          <Title>Free delivery over $50</Title>
          <Description>
            Shop $50 product and get free delivery anywhere.
          </Description>
          <Button>Shop Now →</Button>
        </TextWrapper>
        <ImageWrapper>
          <Image
            src={"https://www.shadowfax.in/home/delivery_boy_mobile.webp"}
            alt="delivery"
          />
        </ImageWrapper>
      </Card>
      <Card bgColor="#b24a4a">
        <IconWrapper>
          <DiscountIcon style={{ fontSize: "20px", color: "white" }} />
        </IconWrapper>
        <TextWrapper>
          <Title>Organic Food</Title>
          <Description>Save up to 60% off on your first order</Description>
          <Button>Order Now →</Button>
        </TextWrapper>
        <ImageWrapper>
          <Image
            src={
              "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg"
            }
            alt="delivery"
          />
        </ImageWrapper>
      </Card>
    </Container>
  );
};

// Styling for the main container
const Container = styled.div`
  display: flex;
  margin-top: 25px;
  gap: 20px;
  justify-content: center;
  background-color: #37612a;
  padding: 20px;
  height: 310px;
`;

// Styling for each card component
const Card = styled.div`
  background-color: ${({ bgColor }) => bgColor || "#333"};
  border-radius: 10px;
  color: white;
  display: flex;
  padding: 20px;
  align-items: center;
  width: 50%;
  position: relative;
`;

// Icon wrapper styling
const IconWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  padding: 10px;
`;

// Wrapper for text content inside each card
const TextWrapper = styled.div`
  margin-left: 60px;
`;

// Title text styling
const Title = styled.h2`
  font-size: 20px;
  margin-top: 40px;
  margin-bottom: 40px; /* Set equal spacing */
`;

// Description text styling
const Description = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  margin-bottom: 40px; /* Set equal spacing */
`;

// Button styling
const Button = styled.button`
  background-color: #5d4a17;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  width: 120px;
  height: 40px;
  margin-bottom: 15px; /* Set equal spacing */

  &:hover {
    text-decoration: underline;
  }
`;

// New ImageWrapper styling
const ImageWrapper = styled.div`
  position: absolute;
  right: 1px;
  width: 200px;
  height: 310px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Image styling
const Image = styled.img`
  max-width: 100%;
  height: 270px;
`;

export default Banner;
