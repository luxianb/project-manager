import React, { useState } from 'react';
import { Modal } from ".";
import { createCard } from '../../util/apiFunctions';
import { Row } from '../containers';

export default function CreateTaskModal(props) {
  const [form, setForm] = useState({
    name: '',
    desc: '',
    idList: props.idList,
    pos: 'bottom',
    due: '',
  })
  const [error, setError] = useState({name: ''})

  function handleSubmit() {
    if (!form.name) {
      return setError({name: 'Include a task title'});
    } else {
      setError({name: ''})
      handleCreate()
    }
  }

  async function handleCreate() {
    const res = await createCard(form);
    console.log(res)
    props.onCardCreate(res);
  }
  
  function handleChange(event) {
    const {value, id} = event.target;
    setForm({...form, [id]: value});
  }

  return (
    <Modal onBackClick={() => props.closeModal()}>
      <h3>Create task</h3>
      <input
        id="name"
        value={form.name}
        onChange={handleChange}
        placeholder='Task'
      />
      {error.name && (<p>{error.name}</p>)}
      <textarea
        id="desc"
        value={form.desc}
        onChange={handleChange}
        placeholder='Task Description'
      />


      <Row style={{gap: '1rem'}}>  
        <button onClick={() => props.closeModal()}>Back</button>
        <button onClick={() => handleSubmit()}>Create</button>
      </Row>

    </Modal>

  )
}