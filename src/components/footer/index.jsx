import React from "react";
import styled from "styled-components";
import Diag from "./diagonal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Estilos do Footer
const FooterWrapper = styled.div`
  background: linear-gradient(105deg, #5020AB, #7309CA);
  padding-top: 20px;
  padding-bottom: 40px;
  margin-top:-1px;
  color: white;
  overflow:hidden;
  @media (max-width: 468px) {
    margin-top:-1px;
    background:#7309CA;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 468px) {
    justify-content: space-between;

  }
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
  margin-bottom: 30px;

  h4 {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 25px;
    position: relative;

    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 40px;
      background: #fff;
      margin-top: 20px;
    }
    @media (max-width: 368px) {
        width:70%;
      }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      line-height: 36px;

      a {
        color: white;
        font-size: 15px;
        text-transform: capitalize;
        transition: color 0.3s ease;

        &:hover {
          color: #9D6EE4;
        }
       
      }
    }
  }

  @media (max-width: 368px) {
       ul{
        width:70%;
       }

       li{
        width:70%;
       } 
      }
`;

const SocialProfile = styled.div`
  margin-top: 40px;
  display:flex;     
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-right: 10px;

      a {
        display: block;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #7C46C4;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 30px;
        color: white;
        transition: all 0.3s ease;
        font-size:1.3rem;

        &:hover {
          background: #9D6EE4;
          border-color: #9D6EE4;
          color:#ffffff;
        }

        i {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: 368px) {
      ul{ width:20%;
        display:flex;
        gap:1rem;
        flex-direction:row;
        
      }
      a{
        width:15vw !important;
        height:15vw !important;
        display:flex;
        align-items:center;
        justify-content:center;
        svg{
          font-size:6vw ;
        }
      }
      }
`;

const Copyright = styled.div`
  text-align: center;
  gap:0.5%;
  padding-top: 40px;
  width:100%;
  border-top: 1px solid rgba(255, 255, 255, 0.4);
  margin-top: 70px;
  font-size: 15px;
  display:flex;
  justify-content:center;
  a {
    color: #01c7e9;
    transition: color 0.2s ease;

    &:hover {
      color: #9D6EE4;
    }
  }
  @media (max-width: 368px) {
        margin:0;
      }
`;

// Componente Footer
const Footer = () => {
  return (<>
    <Diag></Diag>
    <FooterWrapper>
      <Container>
        <Row>
          <Column>
            <h4>Services</h4>
            <ul>
              <li><a href="#">Lorem Ipsum</a></li>
              <li><a href="#">Simply dummy text</a></li>
              <li><a href="#">The printing and typesetting</a></li>
              <li><a href="#">Standard dummy text</a></li>
              <li><a href="#">Type specimen book</a></li>
            </ul>
          </Column>
          <Column>
            <h4>Page Link</h4>
            <ul>
              <li><a href="#">Lorem Ipsum</a></li>
              <li><a href="#">Simply dummy text</a></li>
              <li><a href="#">The printing and typesetting</a></li>
              <li><a href="#">Standard dummy text</a></li>
              <li><a href="#">Type specimen book</a></li>
            </ul>
          </Column>
          <Column>
            <h4>Subscribe today</h4>
            {/* Adicione um formulário de inscrição aqui */}
            <SocialProfile>
              <ul>
                <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faGooglePlusG}/></a></li>
                <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
              </ul>
            </SocialProfile>
          </Column>
        </Row>
        <Row>
          <Copyright>
            Copyright © 2024 <a href="#">Voxis Communication</a>
          </Copyright>
        </Row>
      </Container>
    </FooterWrapper>
    </>
  );
};

export default Footer;
