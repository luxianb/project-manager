import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProjects } from '../util/apiFunctions';
import { Content, Main, Page } from '../components/containers';
import Navbar from '../components/Navbar';
import { ProjectList } from '../components/cards';
import CreateTaskModal from '../components/modals/CreateTaskModal';
import axios from 'axios';
import TaskDetailsModal from '../components/modals/TaskDetailsModal';



export default function ProjectDetailPage(props) {
  const router = useRouter();
  const {project_name} = router.query;
  const [projectInfo, setProjectInfo] = useState({status: 'initial'})
  const [displayModal, setDisplayModal] = useState({type: '', listId: '', selectedCard: ''})

  useEffect(async() => {
    if(!router.isReady) return;

    const projectData = await axios.get(`/api/projects/${project_name}`);
    const res = await fetchProjects();
    console.log(res);
    // const {cards, lists, ...restOfData} = projectData;
    
    setProjectInfo({status: 'loaded', ...projectData.data.data})
  }, [router.isReady])

  function dismissModal() {
    setDisplayModal({type: '', listId: '', selectedCard: ''});
  }

  function handleCardUpdate(updatedCard) {
    const target = projectInfo.cards.indexOf((card) => card.id = updatedCard.id)
    const updatedCards = [...projectInfo.cards];
    console.log(target);

    updatedCards.splice(target, 1)
    setProjectInfo({...projectInfo, cards: [...updatedCards, updatedCard]})
    dismissModal()
  }

  return(
    <Page>
      <Navbar />
      <Main>
        <h1 style={{marginBottom: 24}}>{projectInfo?.name}</h1>
        <Content>

        {projectInfo?.lists?.map((list) => {
          const listCards = projectInfo?.cards.filter((card) => card.idList === list.id);
          return (
            <ProjectList
              key={list.id}
              cards={listCards}
              {...list}
              onTaskCardClick={(cardInfo) => setDisplayModal({...displayModal, type: 'details', selectedCard: cardInfo})}
              onAddTaskClick={() => setDisplayModal({...displayModal, type: 'createTask', listId: list.id})}
            />
          )
        })}
        </Content>

      </Main>
      {displayModal.type && (
        <>
          {displayModal.type === "createTask" && (
            <CreateTaskModal
              closeModal={() => dismissModal()}
              idList={displayModal.listId}
              onCardCreate={(newCard) => {
                setProjectInfo({...projectInfo, cards: [...projectInfo.cards, newCard]});
                dismissModal()
              }}
            />
          )}
          {displayModal.type === 'details' && (
            <TaskDetailsModal
              closeModal={() => dismissModal()}
              cardInfo={displayModal.selectedCard}
              lists={projectInfo?.lists}
              onInfoUpdated={(updatedCard) => handleCardUpdate(updatedCard)}
            />
          )}
        </>
      )}
    </Page>
  )
}