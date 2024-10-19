import React from 'react';
import styled from 'styled-components';

// Styled Components
const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 7px;
  max-width: 90%;
  margin: 20px auto;
  margin-bottom: 2.5%;
  margin-top: 2.5%;
  
@media (max-width: 468px) {
  padding:15px;
    background-color: transparent;

  margin-top:5%;
  margin-bottom:5%;
}
`;

const NotesTitle = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: #F53838;
  margin-bottom: 5%;
`;

const NotesContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px; /* Espaçamento entre as seções */
`;

const NoteSection = styled.div`
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  flex: 1; /* Faz as seções ocuparem espaço igual */
`;

const NoteTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const NoteContent = styled.p`
  font-size: 1rem;
  color: #555;
`;

// Componente GeneralNotes
const GeneralNotes = ({ title, notes }) => {
  return (
    <NotesContainer>
      <NotesTitle>{title}</NotesTitle>
      <NotesContentWrapper>
        {notes.map((note, index) => (
          <NoteSection key={index}>
            <NoteTitle>{note.title}</NoteTitle>
            <NoteContent>{note.content}</NoteContent>
          </NoteSection>
        ))}
      </NotesContentWrapper>
    </NotesContainer>
  );
};

export default GeneralNotes;
