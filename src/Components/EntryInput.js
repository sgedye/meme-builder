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
    <div class="entryGrid">
      <label htmlFor={props.inputId}>{props.children}</label>
      <input
        type="text"
        id={props.inputId}
        placeholder="Add text to the top"
        onChange={(e) => props.handleTextInput(props.outputId, e.target)}
      />
      <Adjustments id="font-sizing">
        <button
          value="font++"
          onClick={(e) => props.handleFontSize(props.outputId, e)}
        >
          <FaChevronUp />
        </button>
        <p>Font Size</p>
        <button
          value="font--"
          onClick={(e) => props.handleFontSize(props.outputId, e)}
        >
          <FaChevronDown />
        </button>
      </Adjustments>
      <Adjustments id="rotation">
        <button
          value="rRight"
          onClick={(e) => props.handleRotation(props.outputId, e)}
        >
          <GiAnticlockwiseRotation />
        </button>
        <p>Rotate</p>
        <button
          value="rLeft"
          onClick={(e) => props.handleRotation(props.outputId, e)}
        >
          <GiClockwiseRotation />
        </button>
      </Adjustments>
      <Adjustments>
        <input
          id={`${props.inputId}-check`}
          type="checkbox"
          onClick={e => props.handleCapitalise(props.outputId, e.target.checked)}
        />
      </Adjustments>
    </div>
  )
}

export default EntryInput
