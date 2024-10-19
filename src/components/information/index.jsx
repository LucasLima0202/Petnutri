import React from 'react';
import styled from 'styled-components';

const MealPlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  border-radius: 7px;
  width: 90%; /* Ajustado para ocupar 100% da largura disponível */
  margin-bottom: 2.5%; 
  margin-top: 2.5%; 
`;

const DayTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: #F53838;
  margin-bottom: 2.5%; /* Margin ajustado */
`;

const MealGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Layout em coluna única no mobile */
  }
`;

const MealSection = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const MealTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const MealContent = styled.div`
  font-size: 1rem;
  color: #555;
`;

const FoodItem = styled.p`
  margin: 5px 0;

  &.calories {
    font-weight: bold;
  }
`;

// Componente MealPlan
const MealPlan = ({ day, meals }) => {
  return (
    <MealPlanContainer>
      <DayTitle>{day}</DayTitle>
      <MealGrid>
        {meals.map((meal, index) => (
          <MealSection key={index}>
            <MealTitle>
              {meal.title} ({meal.calories} calorias)
            </MealTitle>
            <MealContent>
              <FoodItem>Proteína: {meal.protein}</FoodItem>
              <FoodItem>Carboidrato: {meal.carb}</FoodItem>
              <FoodItem>Vegetais: {meal.vegetables}</FoodItem>
              {meal.fat && <FoodItem>Gordura saudável: {meal.fat}</FoodItem>}
            </MealContent>
          </MealSection>
        ))}
      </MealGrid>
    </MealPlanContainer>
  );
};
export default MealPlan;
