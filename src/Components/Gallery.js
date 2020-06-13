import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import Image from './Image'

const Container = styled.main`
  display: inline-block;
  width: 100vw;
  height: auto;
  margin: 0 auto;
  @media screen and (min-width: 600px) {
    width: 70vw;
    margin-left: 30vw;
  }
`
const Title = styled.h1`
  margin: 20px 0;
  width: 100%;
  text-align: center;
  font-size: 3em;
  text-shadow: -1px -1px floralwhite, 3px 5px 5px floralwhite;
`
const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Canvas = styled.canvas`
  display: none;
  margin: 20px auto;
`

const Button = styled.button`
  display: none;
  margin: 0 auto;
`

function Gallery(props) {
  
  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').then(response => 
      response.json().then(blob => {
        const ids = [...Array(12)].map(entry => Math.floor(Math.random() * 100))
        while ((new Set(ids)).size < 12) {
          const tempId = Math.floor(Math.random() * 100)
          if (!ids.includes(tempId)) {
            ids.push(tempId)
          }
        }
        const imgs = blob.data.memes.filter((value, index) => ids.includes(index))
        setGalleryImages(imgs)
      })
    )
  },[])

  const returnToGallery = () => {
    console.log(document.getElementById('memeToDownload'))
    document.getElementById("gallery-title").textContent = "Image Gallery"
    document.getElementById("gallery-body").style.display = "flex"
    document.getElementById("return-to-gallery").style.display = "none"
    document.getElementById("memeToDownload").style.display = "none"
  }

  return (
    <Container id="gallery">
      <Title id="gallery-title">Image Gallery</Title>
      <Pictures id="gallery-body">
        {
          galleryImages.map(item => {
            return (
              <Image
                key={item.id}
                id={item.id}
                src={item.url}
                alt={item.name}
                onClick={() => props.imageClicked(item.url)}
              />
            )
          })
        }
      </Pictures>
      <Canvas id="memeToDownload" width="600" height="400"></Canvas>
      <Button id="return-to-gallery" onClick={returnToGallery}>Return to Gallery</Button>
    </Container>
  )
}

export default Gallery