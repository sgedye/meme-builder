import React from 'react'

import styled from "styled-components"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import { GiAnticlockwiseRotation, GiClockwiseRotation } from "react-icons/gi"

const Adjustments = styled.div`
  display: inline-block;
  button {
    display: inline-block;
    align-items: center;
  }
  p {
    display: inline-block;
  }
`


function EntryInput(props) {  
  return (
    <div id="entryGrid">
      <label htmlFor={props.inputId}>{props.children}</label>
      <input
        type="text"
        id={props.inputId}
        placeholder="Add text to the top"
        onChange={(e) => props.handleTextInput(props.outputId, e.target.value)}
      />
      <Adjustments id="font-sizing">
        <button
          value="+"
          onClick={(e) => props.handleFontSize(props.outputId, e)}
        >
          <FaChevronUp />
        </button>
        <p>Font Size</p>
        <button
          value="-"
          onClick={(e) => props.handleFontSize(props.outputId, e)}
        >
          <FaChevronDown />
        </button>
      </Adjustments>
      <Adjustments id="rotation">
        <button
          value="0"
          onClick={(e) => props.handleRotation(props.outputId, e)}
        >
          <GiAnticlockwiseRotation />
        </button>
        <p>Rotate</p>
        <button
          value="3"
          onClick={(e) => props.handleRotation(props.outputId, e)}
        >
          <GiClockwiseRotation />
        </button>
      </Adjustments>
    </div>
  )
}

export default EntryInput
