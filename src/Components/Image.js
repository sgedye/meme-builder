import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 10px;
`

export default function Image(props) {
  return (
    <div>
      <StyledImage id={props.id} src={props.src} alt={props.alt} onClick={props.onClick} />
    </div>
  )
}