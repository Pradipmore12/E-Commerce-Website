import React from 'react'
import styled from 'styled-components'
import {ShoppingCartOutlined} from '@material-ui/icons'
import {SearchOutlined} from '@material-ui/icons'
import {FavoriteBorderOutlined} from '@material-ui/icons'


const Info = styled.div`
  opacity: 0;
  height:100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index:3;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:all 0.5s ease;
  cursor: pointer;



`
const Container = styled.div`
flex:1;
margin: 5px;
min-width: 290px;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
background-color: #edfbf4;
position: relative;
&:hover ${Info}{
  opacity:1;
}


    
`
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color:white;
  position: absolute;
  z-index:1;

`

const Image = styled.img`
  height: 75%;
  z-index:2;

`

const Icon = styled.div`
  //opacity:0;
  height: 40px;
  width:40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:white;
  margin: 10px;
  //cursor: pointer;
  transition: all 0.5s ease;
  
  &:hover{
    ///color:white;
    background-color:#e9f5f5;
    transform: scale(1.2);
  }

`


const Product = ({item}) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined/>
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon> 
        <Icon>
          <FavoriteBorderOutlined/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
