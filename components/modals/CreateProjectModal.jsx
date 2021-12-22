import React, { useState } from 'react';
import axios from 'axios';
import { Modal } from '.'
import { Row } from '../containers';

export default function CreateProjectModal(props) {
  const [projectName, setProjectName] = useState('');

  async function createProject() {
    try {
      const res = await axios.post('/api/projects', {name: projectName})
      // console.log(res.data)
      props.onProjectCreated(res.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal style={{gap: 12}} onBackClick={() => props.closeModal()}>
      <h3>Enter project name</h3>
      <input
        placeholder='Project name'
        type='text'
        value={projectName}
        onChange={(e)=> setProjectName(e.target.value)}
        style={{minWidth: 200}}
      />
      <Row style={{gap: 6, justifyContent: 'flex-end'}}>
        <button className='secondary' onClick={() => props.closeModal()}>Back</button>
        <button disabled={!projectName} onClick={createProject}>Create</button>
      </Row>
    </Modal>
  )
}