import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    padding:"10px",flexDirection:"column"
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit:cover;
  ${mobile({
    height:"40vh"
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;

  ${mobile({
    padding:"0 10px",
    textAlign:"justify"
  })}
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;
const Price = styled.div`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width:50%;
  margin:30px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({
    width:"100%"
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight:200;
margin-right:10px;
`;
const FilterColor = styled.div`
  width:20px;
  height: 20px;
  border-radius: 50%;
  margin: 0px 5px;
  cursor:pointer;
  background-color: ${props=>props.color};
  transition:all 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
`;
const FilterSize = styled.select`
  //width:80pxpx;
  margin:0 5px;
  padding:5px;
`;
const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width:50%;
${mobile({
    width:"100%"
  })}
  
  
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;

`


const Amount = styled.span`
  width:30px;
  height:30px;
  border-radius:10px;
  border:1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:0 5px;

`
const Button = styled.button` 
  padding: 15px;
  border:2px solid teal;
  background-color: white;
  cursor:pointer;
  font-weight: 600;

  &:hover{
    background-color: #f8f4f4;
  }
`
const Cursor = styled.div`
  cursor: pointer;
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.pinimg.com/originals/06/a8/bb/06a8bb0b4838da62c0b89d843e0fd920.jpg"></Image>
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit </Title>
          <Desc>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
            nihil doloremque necessitatibus delectus, enim nisi suscipit qui
            illum hic sed beatae tempora similique eos at autem voluptatibus!
            Incidunt, molestias porro!
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Cursor><Remove/></Cursor>
              <Amount>1</Amount>
              <Cursor><Add/></Cursor>
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
