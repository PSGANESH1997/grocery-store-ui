import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiShoppingCart } from "react-icons/fi";
import HomeProduct from "./HomeProduct"; // Assuming ProductCard is already created
import { RotatingLines } from "react-loader-spinner"; // Importing RotatingLines

// Dummy data - in a real app, this would be fetched from an API
const initialProducts = [
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
    image: "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
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
    image: "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
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
    image: "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
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
    image: "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
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
    image: "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
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
    image: "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
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
    image: "https://m.media-amazon.com/images/I/31n+3fjNM1L._SY300_SX300_.jpg",
    typeName: "vegetables",
    title: "Garlic 1kg",
    price: "$1",
    discountedPrice: "$1.99",
    rating: 4.1,
  },
];

const ProductGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 20px;
`;

const LoadingIndicator = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px 0;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 70px); /* Adjust for any fixed header */
`;

const Home = () => {
  const [products, setProducts] = useState(initialProducts.slice(0, 5)); // Load initial products
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    setProducts(initialProducts.slice(0, 10));
    // eslint-disable-next-line
  }, []);

  // Function to load more products
  const loadMoreProducts = () => {
    setLoading(true); // Set loading to true when fetching products
    const nextProducts = initialProducts.slice(
      products.length,
      products.length + 15
    );
    if (nextProducts.length === 0) {
      setHasMore(false); // No more products to load
    } else {
      setProducts((prev) => [...prev, ...nextProducts]);
    }
    // setLoading(false); // Set loading to false after fetching
  };

  // if (loading) {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, "4000");
  // }

  // Infinite scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 100 &&
        hasMore
      ) {
        setLoading(true);
        loadMoreProducts();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [hasMore]);

  return (
    <CenteredContainer style={{ marginTop: "70px" }}>
      <ProductGrid>
        {products.map((product, index) => (
          <HomeProduct
            key={index}
            image={product.image}
            typeName={product.typeName}
            title={product.title}
            price={product.price}
            discountedPrice={product.discountedPrice}
            rating={product.rating}
            icon={<FiShoppingCart />}
          />
        ))}
      </ProductGrid>
      {loading && ( // Show the loading indicator while loading
        <LoadingIndicator>
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
          />
        </LoadingIndicator>
      )}
    </CenteredContainer>
  );
};

export default Home;
