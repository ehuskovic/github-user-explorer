import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/github-logo.png'


const Header = () => {

    const HeaderComponent = styled.div`
        text-align: center;
        background-color: #2f323a;
  `

    const ColorParagraph = styled.div`
    background-color: #88f0ac;
    width: 100%;
    padding: 0.5%;
  `

  const HeaderParagraphs = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: center;
    width: 100%;
    font-size: 25px;
`
    const Text = styled.p`
    text-align: center;
    color: white;
`
const HeaderImg = styled.img`
width: 50px;
height: 50px;
text-align: center;
padding: 15px;
`
    return(
        <HeaderComponent>
            <ColorParagraph></ColorParagraph>
            <HeaderParagraphs>
                <Text><span style={{fontWeight: 'bold'}}>Github</span> Search</Text>
                <HeaderImg src={logo}></HeaderImg>
            </HeaderParagraphs>
        </HeaderComponent>

    );
}

export default Header;