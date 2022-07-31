import { Facebook, Instagram, LinkedIn, LocationOn, MailOutline, Phone, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'


const Container = styled.div`
    display: flex;
    ${mobile({
    flexDirection:"column"
  })}

`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`
const Logo =styled.h1`

`
const Desc =styled.p`
    margin:20px 0px;
    text-align:justify;
`
const SocialContainer =styled.div`
    display: flex;

`
const SocialIcon =styled.div`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #${props=>props.color};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right:20px;
    cursor: pointer;
    transition:all 0.2s ease-out;
    
    &:hover{
        transform:scale(1.1);
    }

`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  })}
`

const Title = styled.h3`
    margin-bottom: 30px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;


`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

`
const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({
    backgroundColor:"#fff8f8"
  })}
`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: column;
//align-items: center;
justify-content: center;
`
const Cursor = styled.div`
    cursor: pointer;
    margin-bottom:5px;
    
`
const Payment = styled.img`
 width: 70%;
 cursor: pointer;
 margin-left: -5px;
`
//const ContactItem = styled.div``





const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>PM Kart</Logo>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio inventore veritatis ratione, in at quam reiciendis maxime neque pariatur eius ullam ipsum blanditiis earum aperiam asperiores repellat itaque quae corrupti. Eius, eligendi veniam.
            </Desc>
            <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="ff1493">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="385999">
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Cursor><LocationOn/></Cursor>
                    201 ,Moonlight Apartment ,Ratnagiri , Maharashtra ,India 415605
            </ContactItem>
            <ContactItem>
            <Cursor><Phone/></Cursor>
                +91 7020174337
            </ContactItem>
            <ContactItem>
                <Cursor><MailOutline/></Cursor>
                pradipmorepm15@gmail.com
            </ContactItem>
            <Payment src="http://waterfeaturepros.com/wp-content/uploads/2020/10/product-pages-1536x269.png"></Payment>
        </Right>
        

    </Container>
  )
}

export default Footer