import React from 'react'
import styled from 'styled-components'

const Loading = ({children}) => {
  return (
    <Modal color="white"><span className="flash">{children}</span></Modal>
  )
}



const Modal = styled.div`
  display: grid;
  place-content: center;
  position: fixed;
  z-index: 9999;
  inset: 0; /* top/right/bottom/left */
  width: 100%;
  height: 100%;
  background-color: #8E829B;
  opacity:0.8;
  color: ${({color}) => color || "#fff"};
  font-size: 3em;

  .flash {
    animation: flashing 2s infinite;

    @keyframes flashing {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.2;
      }
    }
  }
`

export default Loading