import React, { useState } from "react"
import Modal from "react-modal"
import { IoMdCloseCircle } from "react-icons/io"

import EntryInput from "./EntryInput"

Modal.setAppElement("#root")

function Overlay(props) {

  const [rotateTop, setRotateTop] = useState(0)
  const [rotateBottom, setRotateBottom] = useState(0)
  // const [offsetX, setOffsetX] = useState(0)
  // const [offsetY, setOffsetY] = useState(0)


  const textInput = (element, target) => {
    document.getElementById(element).textContent = target.value
    const checkBox = document.getElementById(target.id + "-check")
    checkBox.checked = false
  }

  const adjustFontSize = (textToAdjust, adjustor) => {
    let styleFont = parseFloat(
      window.getComputedStyle(textToAdjust, null).getPropertyValue("font-size")
    )
    styleFont += adjustor === "font++" ? 2 : -2
    textToAdjust.style.fontSize = `${styleFont}px`
  }

  const adjustRotation = (textToAdjust, adjustor) => {
    if (textToAdjust.id === "meme-text-top") {
      adjustor === "rLeft"
        ? setRotateTop((prevState) => prevState + 10)
        : setRotateTop((prevState) => prevState - 10)
      textToAdjust.style.transform = `rotate(${rotateTop}deg)`
    } else {
      adjustor === "rLeft"
        ? setRotateBottom((prevState) => prevState + 10)
        : setRotateBottom((prevState) => prevState - 10)
      textToAdjust.style.transform = `rotate(${rotateBottom}deg)`
    }
  }

  const changeCase = (element, checked) => {
    const textToAdjust = document.getElementById(element)
    textToAdjust.textContent = checked 
      ? textToAdjust.textContent.toUpperCase()
      : textToAdjust.textContent.toLowerCase()
  }

  const adjustLine = (element, e) => {
    e.preventDefault()
    const adjustor =
      e.target.value ||
      e.target.parentElement.value ||
      e.target.parentElement.parentElement.value
    const textToAdjust = document.getElementById(element)
    if (adjustor === 'font++' || adjustor === 'font--') {
      adjustFontSize(textToAdjust, adjustor)
    } else if (adjustor === 'rLeft' || adjustor === 'rRight') {
      adjustRotation(textToAdjust, adjustor)
    }
  }
  
  function drawText(canvas, ctx, textId) {
    const element = document.getElementById(textId)
    const fontSize = parseFloat(
      window.getComputedStyle(element, null).getPropertyValue("font-size")
    )
    const rotation = Number(element.style.transform.replace(/[^-0-9]/g, ""))
    ctx.font = `${fontSize}px Impact`
    ctx.fillStyle = "white"
    ctx.shadowColor = "black"
    ctx.shadowBlur = 6
    ctx.translate(canvas.width / 2, canvas.height / 2)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.translate(-canvas.width / 2, -canvas.height / 2)
    ctx.textAlign = "center"
    
    const checkBox = textId === "meme-text-top"
      ? document.getElementById(`topLine-check`)
      : document.getElementById(`bottomLine-check`) 
    const content = checkBox.checked
      ? element.textContent.toUpperCase()
      : element.textContent
    textId === "meme-text-top"
      ? ctx.fillText(content, canvas.width / 2, 100)
      : ctx.fillText(content, canvas.width / 2, canvas.height - 100)
  }

  function createCanvas(e) {
    e.preventDefault()
    const canvas = document.getElementById('memeToDownload')
    const ctx = canvas.getContext("2d")
    
    const img = document.getElementById("meme-image")
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    
    drawText(canvas, ctx, "meme-text-top")
    drawText(canvas, ctx, "meme-text-bottom")

    document.getElementById("gallery-title").textContent = "Your Personal Meme"
    document.getElementById("gallery-body").style.display = "none"
    canvas.style.display = "block"
    document.getElementById('return-to-gallery').style.display = "block"

    props.setIsModalOpen(false)
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
      <h1 id="create-meme">Create a Meme</h1>
      <form className="modal-form">
        <EntryInput
          inputId="topLine"
          outputId="meme-text-top"
          handleTextInput={textInput}
          handleFontSize={adjustLine}
          handleRotation={adjustLine}
          handleCapitalise={changeCase}
        >
          Top Line
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
      <form className="modal-form">
        <EntryInput
          inputId="bottomLine"
          outputId="meme-text-bottom"
          handleTextInput={textInput}
          handleFontSize={adjustLine}
          handleRotation={adjustLine}
          handleCapitalise={changeCase}
        >
          Bottom Line
        </EntryInput>
      </form>
      <button className="modal-download" onClick={(e) => createCanvas(e)}>
        download
      </button>
      <IoMdCloseCircle
        className="modal-close"
        onClick={() => props.setIsModalOpen(false)}
      />
    </Modal>
  )
}

export default Overlay


