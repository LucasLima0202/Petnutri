import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
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

const Button = ({ title, gradient, onPress }) => {
  return (
    <StyledButton gradient={gradient} onClick={onPress}>
      {title}
    </StyledButton>
  );
};



export default Button;
