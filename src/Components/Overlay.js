import React, { useState } from "react"

import Modal from "react-modal"
Modal.setAppElement("#root")

function Overlay(props) {
  const handleTyping = (element, value) => {
    document.getElementById(element).textContent = value
  }

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
        <label htmlFor="topLine">Line One:</label>
        <input
          type="text"
          id="topLine"
          placeholder="Add text to the top"
          onChange={(e) => handleTyping("meme-text-top", e.target.value)}
        />
        <label htmlFor="bottomLine">Line Two:</label>
        <input
          type="text"
          id="topLine"
          placeholder="Add text to the bottom"
          onChange={(e) => handleTyping("meme-text-bottom", e.target.value)}
        />
      </form>
      <div class="meme-image">
        <img src={props.memeUrl} alt="meme to create" />
        <p id="meme-text-top"></p>
        <p id="meme-text-bottom"></p>
      </div>
      <button className="modal-download">download</button>
      <button className="modal-close" onClick={() => props.setIsModalOpen(false)}>x</button>
    </Modal>
  )
}

export default Overlay



      