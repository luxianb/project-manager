import React from 'react';
import styled from 'styled-components';

export const Modal = (props) => (
  <ModalBase onClick={props.onBackClick}>
    <ModalCard onClick={(e) => e.stopPropagation()}>
      {props.children}
    </ModalCard>
  </ModalBase>
);

const ModalBase = styled.div`
  background-color: rgba(0,0,0,.1);
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalCard = styled.div`
  max-width: 300px;
  background-color: white;
  border-radius: 6px;
  padding: 6px;
  z-index: 11;
  display: block;
  position: relative;
`

