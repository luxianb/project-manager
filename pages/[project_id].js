import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchProjectInfo } from '../src/util/apiFunctions';
import { Content, Main, Page } from '../src/components/containers';
import Navbar from '../src/layouts/Navbar';
import { ProjectList } from '../src/components/cards';
import CreateTaskModal from '../src/components/modals/CreateTaskModal';



export default function ProjectDetailPage(props) {
  const router = useRouter();
  const {project_id} = router.query;
  const [projectInfo, setProjectInfo] = useState({status: 'initial'})
  const [displayModal, setDisplayModal] = useState({type: '', listId: ''})

  useEffect(async() => {
    if(!router.isReady) return;

    const projectData = await fetchProjectInfo(project_id);
    // const {cards, lists, ...restOfData} = projectData;
    
    setProjectInfo({status: 'loaded', ...projectData})
  }, [router.isReady])

  function dismissModal() {
    setDisplayModal({type: '', listId: ''});
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
              onAddTaskClick={() => setDisplayModal({type: 'createTask', listId: list.id})}
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
            <div />
          )}
        </>
      )}
    </Page>
  )
}