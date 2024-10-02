import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.color || '#fff'};
  cursor: pointer;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 10px;
  transition: all 0.4s ease-in-out;

  ${({ gradient }) => gradient}

  &:hover {
    background-position: 100% 0;
  }

  &:focus {
    outline: none;
  }

  
`;

const Button = ({ title, gradient, onPress, color,children  }) => {
  return (
    <StyledButton gradient={gradient} onClick={onPress} color={color}>
      {title}{children}
    </StyledButton>
  );
};



export default Button;
