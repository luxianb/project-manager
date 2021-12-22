import React from 'react';
import Link from 'next/link'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row } from '../containers';

export const CreateProjectButton = (props) => {
  return (
    <AddProjectContainer {...props}>
      <p style={{fontSize: 30}}>+</p>
      <p>Create a project</p>
    </AddProjectContainer>
  )
}

export const ProjectCard = (props) => {
  return (
    <Link href={`/${props.slug}`}>
      <CardContainer>
        <Row style={{ alignItems: 'center', gap: '.5rem' }}>
          <ProjectIconContainer>
            <FontAwesomeIcon icon="folder" style={{ height: 20 }} />
          </ProjectIconContainer>
          <h4>{props.title}</h4>
        </Row>
      </CardContainer>
    </Link>
  )
}

const TaskCard = (props) => (
  <TaskContainer {...props}>
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
            <div key={card.id}>
              <TaskCard
                onClick={() => props.onTaskCardClick(card)}
                {...card}
              />
              {index !== array.length - 1 && (
                <CardSeparator />
              )}
            </div>
          ))}
        </TaskCardContainer>
      )}

      <p style={{ cursor: 'pointer' }} onClick={() => props.onAddTaskClick()}>Add task +</p>

    </ListContainer>
  )
}


const ProjectCardBase = styled.div`
  padding: 12px;
  border-radius: 12px;
  min-width: 300px;
  min-height: 100px;
  gap: .5rem;
  display: flex;
  flex-direction: column;
  height: fit-content;
  cursor: pointer;
  box-sizing: border-box;
  @media(max-width: 425px) {
    width: 100%;
    height: 100px;
  }
`;
const CardContainer = styled(ProjectCardBase)`
  background-color: white;
  box-shadow: 0 0 10px rgba(0,0,0,.15);
`;
const AddProjectContainer = styled(ProjectCardBase)`
  border: 1px dashed #b0bec5;
  color: #b0bec5;
  justify-content: center;
  align-items: center;
`;
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
`;
const CardSeparator = styled.div`
  border-bottom: 1px solid grey;
  margin: 12px 0;
`;
const ProjectIconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  background-color: rgba(48, 79, 254, .1);
  color: rgba(48, 79, 254, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
