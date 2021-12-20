import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';

export const ProjectCard = (props) => {
  return (
    <Link href={`/${props.id}`}>

      <div style={styles.cardContainer}>
        <p>{props.title}</p>
      </div>
    </Link>
  )
}

const TaskCard = (props) => (
  <TaskContainer>
    <p>{props.name}</p>
  </TaskContainer>
)

export const ProjectList = (props) => {
  return (
    <ListContainer>
      <h3>{props?.name}</h3>

      {props.cards.length > 0 && (
        <TaskCardContainer>
        {props.cards.map((card, index, array) => (
          <>
            <TaskCard key={card.id} {...card} />
            {index !== array.length - 1  && (
              <CardSeparator />
            )}
          </>
        ))}
        </TaskCardContainer>
      )}

      <p style={{cursor: 'pointer'}} onClick={() => props.onAddTaskClick()}>Add task +</p>

    </ListContainer>
  )
}

const ListContainer = styled.div`
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
  padding: 12px;
  border-radius: 12px;
  min-width: 300px;
  gap: .5rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;
const TaskCardContainer = styled.div`
  background-color: white;
  /* box-shadow: 0 0 10px rgba(0,0,0,.15); */
  padding: 12px;
  border: 1px solid grey;
  border-radius: 6px;
`;
const TaskContainer = styled.div`
  cursor: pointer;
`
const CardSeparator = styled.div`
  border-bottom: 1px solid grey;
  margin: 12px 0;
`;


const styles = {
  cardContainer: {
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,.15)',
    padding: '6px 12px',
    borderRadius: '6px',
  },
  listContainer: {
    backgroundColor: 'white',
    boxShadow: '0 0 10px rgba(0,0,0,.15)',
    padding: '6px 12px',
    borderRadius: '6px',
  }
}