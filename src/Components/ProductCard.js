import React from "react";
import styled from "styled-components";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Card = styled.div`
  background: #ffffff;
  color: #000;
  padding: 1rem;
  border-radius: 3px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: left;
  margin: 7px;
  width: 230px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const DiscountLabel = styled.span`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #ff5722;
  color: #fff;
  padding: 0.3rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

const BestDealLabel = styled.span`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #ff8c00;
  color: #fff;
  padding: 0.3rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

const Price = styled.p`
  font-size: 0.9rem;
  color: #ff5722;
`;

const Button = styled.button`
  background-color: #ffa500;
  color: #fff;
  padding: 0.5rem 0.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; // Space between icon and text
  margin-top: auto; // Pushes button to the bottom if space allows
  &:hover {
    background-color: #ff8c00;
  }
`;

const StarRating = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const ProductInfo = styled.div`
  font-size: 13px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
`;

const BrandText = styled.span`
  font-size: 0.8rem;
  color: #000;
  & > text {
    color: #ffd700;
  }
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  border-radius: 5px;
  width: 100%;
  height: 6px;
  overflow: hidden;
`;

const Progress = styled.div`
  background-color: #ffa500;
  height: 100%;
  width: ${({ soldPercentage }) => `${soldPercentage}%`};
`;

const ProductCard = ({
  image,
  typeName,
  title,
  price,
  discountedPrice,
  rating,
  discount,
  bestDeal,
  sold,
  totalStock,
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

  const soldPercentage = (sold / totalStock) * 100;

  return (
    <div className="product-card">
      <Card>
        {discount && <DiscountLabel>Save {discount}%</DiscountLabel>}
        {bestDeal && <BestDealLabel>Best Deal</BestDealLabel>}
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "160px",
            borderRadius: "8px",
          }}
        />
        <ProductInfo>
          <h6>{typeName}</h6>
          <h3>{title}</h3>
          <StarRating>{renderStars()}</StarRating>
          <BrandText>
            By <text>McFood</text>
          </BrandText>
        </ProductInfo>
        <Price>
          <strike>{discountedPrice}</strike> <span>{price}</span>
        </Price>
        <ProgressBar>
          <Progress soldPercentage={soldPercentage} />
        </ProgressBar>
        <p style={{ fontSize: "0.8rem", color: "#555" }}>
          Sold: {sold}/{totalStock}
        </p>
        <Button>
          <ShoppingCartIcon fontSize="small" /> Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductCard;
