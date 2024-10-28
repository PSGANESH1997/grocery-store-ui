import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const data = [
  {
    category: "Top Sells",
    items: [
      {
        image:
          "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
      {
        image:
          "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
      {
        image:
          "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$2.99",
        rating: 4,
      },
    ],
  },
  {
    category: "Top Rated",
    items: [
      {
        image:
          "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
      {
        image:
          "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
      {
        image:
          "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$3.99",
        rating: 4,
      },
    ],
  },
  {
    category: "Trending Items",
    items: [
      {
        image:
          "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
      {
        image:
          "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
      {
        image:
          "https://www.onezeros.in/cdn/shop/products/radish-white-onezeros-in-35305091530950.png?v=1722187808&width=713",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
    ],
  },
  {
    category: "Recently Added",
    items: [
      {
        image:
          "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
      {
        image:
          "https://individualfitnessllc.com/wp-content/uploads/2022/04/health-benefits-of-carrots.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
      {
        image:
          "https://m.media-amazon.com/images/I/41NQU28BzEL._SY300_SX300_QL70_FMwebp_.jpg",
        name: "Orange 1kg",
        price: "$2",
        originalPrice: "$5.99",
        rating: 4,
      },
    ],
  },
];

const FooterGrid = () => {
  return (
    <Container>
      {data.map((section, index) => (
        <Section key={index}>
          <CategoryTitle>{section.category}</CategoryTitle>
          {section.items.map((item, idx) => (
            <Item key={idx}>
              <ImageContainer>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "55px",
                    borderRadius: "8px",
                  }}
                />
              </ImageContainer>
              <Info>
                <ItemName>{item.name}</ItemName>
                <Rating>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      color={i < item.rating ? "#ffc107" : "#e4e5e9"}
                    />
                  ))}
                </Rating>
                <PriceContainer>
                  <Price>{item.price}</Price>
                  <OriginalPrice>{item.originalPrice}</OriginalPrice>
                </PriceContainer>
              </Info>
            </Item>
          ))}
        </Section>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #335f33;
  padding: 20px;
  color: #fff;
  font-family: Arial, sans-serif;
`;

const Section = styled.div`
  width: 20%;
`;

const CategoryTitle = styled.h3`
  text-align: start;
  font-weight: bold;
  margin: 0px 0px 10px 10px;
  color: #ffffff;
  position: relative;
  padding-bottom: 9px;

  &::after {
    content: "";
    display: block;
    width: 15%;
    height: 4px;
    background-color: #ffe600;
    position: absolute;
    bottom: 0;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  background-color: #335f33;
  border-radius: 8px;
`;

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const Info = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`;

const Rating = styled.div`
  display: flex;
  margin: 5px 0;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
`;

const Price = styled.span`
  color: #ffe600;
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 5px;
`;

const OriginalPrice = styled.span`
  color: #ccc;
  font-size: 0.9rem;
  text-decoration: line-through;
`;

export default FooterGrid;
