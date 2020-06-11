import React, { useState } from "react"
import EntryInput from "./EntryInput"

import Modal from "react-modal"

Modal.setAppElement("#root")






function Overlay(props) {

  // const [offsetX, setOffsetX] = useState(0)
  // const [offsetY, setOffsetY] = useState(0)


  const textInput = (element, value) => {
    document.getElementById(element).textContent = value
  }

  const adjustFontSize = (textToAdjust, adjustor) => {
    let styleFont = parseFloat(
      window.getComputedStyle(textToAdjust, null).getPropertyValue("font-size")
    )
    styleFont += adjustor === "+" ? 2 : -2
    textToAdjust.style.fontSize = `${styleFont}px`
  }
  const adjustRotation = (textToAdjust, adjustor) => {
    let rotation = window.getComputedStyle(textToAdjust, null).getPropertyValue("transform")
    if (rotation === 'none') {
      rotation = 'rotate(10deg)'
    }
    console.log(rotation, typeof(rotation))
  }

  // transform: rotate(10deg);


  const adjustLine = (element, e) => {
    e.preventDefault()
    const adjustor =
      e.target.value ||
      e.target.parentElement.value ||
      e.target.parentElement.parentElement.value
    const textToAdjust = document.getElementById(element)
    if (adjustor === '+' || adjustor === '-') {
      adjustFontSize(textToAdjust, adjustor)
    } else if (adjustor === '0' || adjustor === '3') {
      adjustRotation(textToAdjust, adjustor)
    }
  }





//   setTimeout(() => {
//     dragElement();
//   }, 2000);

//   function dragElement() {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     document.getElementById("meme-text-bottom").onMouseDown = dragMouseDown;

//     function dragMouseDown(e) {
//       e = e || window.event;
//       e.preventDefault();
//       e.nativeEvent.srcElement.draggable = true
//       // get the mouse cursor position at startup:
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       document.onmouseup = closeDragElement;
//       // call a function whenever the cursor moves:
//       document.onmousemove = elementDrag;
//     }

//     function elementDrag(e) {
//       e = e || window.event;
//       e.preventDefault();
//       // calculate the new cursor position:
//       pos1 = pos3 - e.clientX;
//       pos2 = pos4 - e.clientY;
//       pos3 = e.clientX;
//       pos4 = e.clientY;
//       // set the element's new position:
//       document.getElementById("meme-text-bottom").style.top = (document.getElementById("meme-text-bottom").offsetTop - pos2) + "px";
//       document.getElementById('meme-text-bottom').style.left = (document.getElementById("meme-text-bottom").offsetLeft - pos1) + "px";
//     }

//     function closeDragElement() {
//       // stop moving when mouse button is released:
//       document.onmouseup = null;
//       document.onmousemove = null;
//     }
//   }







//   // const xxx = document.querySelector('.meme-text')
//   // xxx.onmousedown = //

//   // const handleMouseEvents = () => {

//   // }

//   // const handleMouseDown = (e) => {
//   //   console.log(e, e.value)
//   // }
// // onMouseDown = { event => this.handleMouseDown(event, ‘top’) }
//   // onMouseUp = { event => this.handleMouseUp(event, ‘top’) }

//   const mouseDown = e => {
//     e.preventDefault()
//     console.log(e.target, e.nativeEvent)
//     // const selectedText = e.target
//     // setTimeout(() => {
//     //   selectedText.style.display = "none"
//     // }, 1110)
//   }

//   const mouseMove = e => {
//     const {target, clientWidth, clientHeight} = document.getElementById('meme-image')
//     setOffsetX(Math.floor((e.nativeEvent.offsetX / clientWidth) * 100))
//     setOffsetY(Math.floor((e.nativeEvent.offsetY / clientHeight) * 100))
//     console.log(document.getElementById('meme-image'), document.getElementById('meme-image').clientHeight)

//     console.log(document.getElementById('meme-image').nextSibling)


//     console.log(offsetX, offsetY)
//     console.log(clientWidth, clientHeight)
//       // console.log(e.nativeEvent.srcElement)
//       // // e.nativeEvent.target = document.getElementById('meme-image')
//       // console.log(e.nativeEvent.target)
//       e.nativeEvent.srcElement.draggable = true
//       // console.log(e.nativeEvent)
//       // console.log(e.nativeEvent.target)
//       // console.log(e.nativeEvent.srcElement.draggable)
//   }

//   const mouseUp = e => {
//     e.preventDefault()
//     console.log(offsetX, offsetY)
//   }

  return (
    <Modal
      className="modal"
      isOpen={props.isModalOpen}
      onRequestClose={() => props.setIsModalOpen(false)}
      style={{
        overlay: { backgroundColor: "grey" },
        // content: { color: "purple" },
      }}
    >
      <h1>Create a Meme</h1>
      <form className="modal-form">
        <EntryInput
          inputId="topLine"
          outputId="meme-text-top"
          handleTextInput={textInput}
          handleFontSize={adjustLine}
          handleRotation={adjustLine}
        >
          Top Line
        </EntryInput>
        <EntryInput
          inputId="bottomLine"
          outputId="meme-text-bottom"
          handleTextInput={textInput}
          handleFontSize={adjustLine}
          handleRotation={adjustLine}
        >
          Bottom Line
        </EntryInput>
      </form>
      <div className="meme-image-div">
        <img id="meme-image" src={props.memeUrl} alt="meme to create" />
        <p
          id="meme-text-top"
          className="meme-text" /*onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove}*/
        ></p>
        <p
          id="meme-text-bottom"
          className="meme-text" /*onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove}*/
        ></p>
      </div>
      <button className="modal-download">download</button>
      <button
        className="modal-close"
        onClick={() => props.setIsModalOpen(false)}
      >
        x
      </button>
    </Modal>
  )
}

export default Overlay


