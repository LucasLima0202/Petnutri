import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import Sep from "../sep";

// Estilos do Footer
const FooterWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;
  margin-top: -1px;
  color: #222222;
  overflow: hidden;
  @media (max-width: 468px) {
    margin-top: -1px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top:2%;
  padding: 0 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const SocialProfile = styled.div`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 10px;

    li a {
      display: block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10%;
      color: #F53838;
      transition: all 0.3s ease;
      font-size: 1.3rem;

      &:hover {
        background: #F53838;
        border-color: #F53838;
        color: #ffffff;
      }
    }
  }
`;

const AnotherInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  p{
    color: #F53838;
    &:hover {
      color: #E55050;
    }
  }

  li a {
      display: block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10%;
      color: #F53838;
      transition: all 0.3s ease;
      font-size: 1.3rem;

 
    }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 10px;

    p {
      margin: 0;

    }
  }
`;

const Copyright = styled.div`
  font-size: 15px;

  a {
    color: #606464;
    text-decoration: none;

 
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Componente Footer
const Footer = () => {
  return (
    <FooterWrapper>
     <Sep/>
      <Container>
        <Row>
          <Copyright>
            <span>Criado por Fernanda Lima - 2024</span>
          </Copyright>
          
         
  
          <AnotherInfo>
            <p>Pet Nutrição</p>
            <ul>
              <li><a href="#"><FontAwesomeIcon icon={faSquarePhone} /></a></li>
              <p>(31) 9 9554-3483</p>
            </ul>
          </AnotherInfo>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
