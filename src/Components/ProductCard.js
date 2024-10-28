import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Card = styled.div`
  background: #ffffff;
  color: #000;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 7px;
`;

const Price = styled.p`
  font-size: 1.2rem;
  color: #ff5722;
  margin: 0.5rem 0;
`;

const Button = styled.button`
  background-color: #ffa500;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #ff8c00;
  }
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
`;

const ProductCard = ({ image, title, price, discountedPrice, rating }) => {
  // Function to display stars based on rating
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} color="#FFD700" />);
      } else if (i - rating === 0.5) {
        stars.push(<FaStarHalfAlt key={i} color="#FFD700" />);
      } else {
        stars.push(<FaRegStar key={i} color="#FFD700" />);
      }
    }
    return stars;
  };

  return (
    <div className="product-card">
      <Card>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "300px", borderRadius: "8px" }}
        />
        <h3>{title}</h3>
        <StarRating>{renderStars()}</StarRating>
        <Price>
          <strike>{discountedPrice}</strike> <span>{price}</span>
        </Price>
        <Button>Add to Cart</Button>
      </Card>
    </div>
  );
};

export default ProductCard;
