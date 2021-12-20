import React, { useEffect, useState } from "react";
import { Modal } from ".";
import { Row } from "../containers";

export default function TaskDetailsModal(props) {
  const [state, setState] = useState({});

  function handleChange(event) {
    const {id, value} = event.target;
    setState({...state, [id]: value})
  }

  useEffect(() => {}, [])
  return (
    <Modal>
      <Row>
        <input
          id="name"
          value={state.name}
          onChange={handleChange}
        />
      </Row>
      <label htmlFor="desc">Description</label>
      <textarea
        id='desc'
        value={state.desc}
        onChange={handleChange}
      />
    </Modal>
  )
}