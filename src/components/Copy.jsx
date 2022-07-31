import React from 'react'
import styled from 'styled-components'


const Container = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #bebebe;
    margin:0px;
    
    
`
const Copy = () => {
  return (
    <Container>
        Copyright &copy; 2022 @PradipMore.
    </Container>
  )
}

export default Copy