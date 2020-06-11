import React from 'react'
import styled from "styled-components"
import { TiPlus, TiMinus } from "react-icons/ti"
import { GiAnticlockwiseRotation, GiClockwiseRotation } from "react-icons/gi"

const Adjustments = styled.div`
  display: inline-block;
  button {
    display: inline-block;
    align-items: center;
  }
  button:first-of-type {
    margin-right: 10px;
  }
  p {
    display: none;
    padding: 0 10px;
  }
  @media screen and (min-width: 600px) {
    button:first-of-type { margin-right: 0; }
    p { display: inline-block; }
  }
`

function EntryInput(props) {  
  return (
    <div className="entryGrid">
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
          <TiPlus />
        </button>
        <p>Font Size</p>
        <button
          value="font--"
          onClick={(e) => props.handleFontSize(props.outputId, e)}
        >
          <TiMinus />
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
      <Adjustments className="checkbox">
        <label htmlFor={`${props.inputId}-check`}>SHOUT</label>
        <input
          id={`${props.inputId}-check`}
          type="checkbox"
          onClick={(e) =>
            props.handleCapitalise(props.outputId, e.target.checked)
          }
        />
      </Adjustments>
    </div>
  )
}

export default EntryInput
