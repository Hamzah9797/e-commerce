/* eslint-disable */
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";
import { publicRequest } from "../requestMethod";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { stringify } from "querystring";
import { useTypedActions } from "../hooks/useTypedActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { addToCart } from "../redux/action-creators/cartActions";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  interface Product {
    _id: string | undefined;
    title: string | undefined;
    description: string | undefined;
    img: string | undefined;
    categories: string[] | undefined;
    color: string[] | undefined;
    size: string[] | undefined;
    price: number | undefined;
    inStock: boolean | undefined;
  }

  const [product, setProduct] = useState<Product>();

  const [quantity, setQuantity] = useState(1);

  const [color, setColor] = useState("");

  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      const res = await publicRequest.get(`/products/find/` + id);
      setProduct(res.data);
      try {
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type: string) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const onSizeChange = (e: React.ChangeEvent<HTMLOptionElement>) => {
    setSize(e.target.value);
  };

  const handleClick = () => {
    //update cart
    // addToCart(product._id, quantity);
  };

  const cartProducts = useTypedSelector((state) => state.cart);

  console.log(color, size);

  const addToCart = useTypedActions();

  return (
    <Container>
      <NavBar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.description}</Desc>
          <Price>$ {product?.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product?.size.map((s) => (
                  <FilterSizeOption key={s} onChange={onSizeChange}>
                    {s}
                  </FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button
              onClick={() => addToCart(product._id, quantity, color, size)}
            >
              ADD TO CART
            </Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
