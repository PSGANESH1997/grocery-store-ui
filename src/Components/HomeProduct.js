import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Card = styled.div`
  background: #ffffff;
  color: #000;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  margin: 7px;
  width: 230px;
`;

const Price = styled.p`
  font-size: 1rem; /* Smaller font size */
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
  justify-content: flex-start;
  margin: 0.5rem 0;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const BrandText = styled.span`
  font-size: 0.8rem; /* Smaller size */
  color: #000;
  & > text {
    color: #ffd700; /* Yellow color for McFood */
  }
`;

const HomeProduct = ({
  image,
  typeName,
  title,
  price,
  discountedPrice,
  rating,
}) => {
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
          style={{ width: "100%", height: "200px", borderRadius: "8px" }}
        />
        <ProductInfo>
          <h6>{typeName}</h6>
          <h3>{title}</h3>
          <StarRating>{renderStars()}</StarRating>
          <BrandText>
            By <text>McFood</text>
          </BrandText>
        </ProductInfo>
        <Row>
          <Price>
            <strike>{discountedPrice}</strike> <span>{price}</span>
          </Price>
          <Button>Add to Cart</Button>
        </Row>
      </Card>
    </div>
  );
};

export default HomeProduct;
