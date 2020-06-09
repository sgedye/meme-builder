import React, { useState } from "react"
import Instructions from './Instructions'
import Gallery from './Gallery'
import Overlay from './Overlay'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [memeUrl, setMemeUrl] = useState("")

  const imageClicked = (id) => {
    setMemeUrl(id)
    setIsModalOpen(true)
  }

  return (
    <div id="app">
      <Instructions />
      <Gallery imageClicked={imageClicked} />
      <Overlay
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        memeUrl={memeUrl}
      />
    </div>
  )
}

export default App;
