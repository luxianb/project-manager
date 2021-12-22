import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Modal } from ".";
import { Col, Row } from "../containers";
import { updateCard } from '../../util/apiFunctions'

export default function TaskDetailsModal(props) {
  const [state, setState] = useState(props.cardInfo);
  console.log(state);

  function handleChange(event) {
    const { id, value } = event.target;
    setState({ ...state, [id]: value })
  }

  async function handleUpdate() {
    const {name, desc, idList, id} = state;
    const updatedCard = await updateCard(id, {name, desc, idList});
    console.log(updatedCard);
    props.onInfoUpdated(updatedCard);
  }

  return (
    <Modal style={{ gap: 6, minWidth: 300 }} onBackClick={props.closeModal}>
      <Row style={{ gap: 3, justifyContent: 'space-between' }}>
        <input
          id="name"
          value={state.name}
          onChange={handleChange}
        />
        <FontAwesomeIcon icon='times' onClick={props.closeModal} style={{cursor: 'pointer', height: '1rem'}}/>
      </Row>
        <select value={state.idList} onChange={(e) => setState({...state, idList: e.target.value})} style={{width: 'fit-content'}}>
          {props.lists.map((listItem) => (
            <option key={listItem.id} value={listItem.id}>{listItem.name}</option>
          ))}
        </select>
      <Col>
        <label htmlFor="desc" style={{fontSize: '.8rem'}}>Description</label>
        <textarea
          id='desc'
          value={state.desc}
          onChange={handleChange}
          style={{minHeight: "4rem"}}
        />
      </Col>
      <Row style={{justifyContent: 'flex-end'}}>
        <button onClick={handleUpdate}>Update</button>
      </Row>
    </Modal>
  )
}