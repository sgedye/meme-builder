import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { IoMdRefresh } from "react-icons/io";

import Image from './Image'

const Container = styled.main`
  display: inline-block;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  margin: 0 auto;
  text-align: center;
  @media screen and (min-width: 600px) {
    width: 70vw;
    margin-left: 30vw;
  }
`
const Title = styled.h1`
  margin: 10px 0;
  width: 100%;
  text-align: center;
  font-size: 3em;
  text-shadow: -1px -1px floralwhite, 3px 4px 6px floralwhite;
`
const Refresher = styled.button`
  position: absolute;
  margin: 0px auto 10px auto;
  padding: 5px;
  height: 33px;
  min-width: 40px;
  background-color: rgb(80,90,150);
  background: linear-gradient(-80deg, #4f9ab3, rgb(80,90,150));
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.2em;
  right: 20px;
  top: 30px;
  box-shadow: inset -2px -1px 4px 3px #333; 
  span { display: none; }
  svg { 
    display: inline;
  }
  @media screen and (min-width: 600px) {
    height: 36px;
    right: 30px;
    padding: 5px 15px;
    span { display: inline; }
    svg { display: none; }
  }
`
const Pictures = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const Canvas = styled.canvas`
  display: none;
  margin: 20px auto;
  max-width: 90vw;
`
const Button = styled.button`
  display: none;
  margin: 0 auto;
`

function Gallery(props) {
  
  const [refresh, setRefresh] = useState(true)
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
  }, [refresh])

  const returnToGallery = () => {
    document.getElementById("gallery-title").textContent = "Gallery"
    document.getElementById("gallery-body").style.display = "flex"
    document.getElementById("gallery-refresh").style.display = "block"
    document.getElementById("return-to-gallery").style.display = "none"
    document.getElementById("memeToDownload").style.display = "none"
  }

  return (
    <Container id="gallery">
      <Title id="gallery-title">Gallery</Title>
      <Refresher id="gallery-refresh" onClick={() => setRefresh(!refresh)}>
        <span>Get new images</span>
        <IoMdRefresh />
      </Refresher>
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
      <Canvas id="memeToDownload"></Canvas>
      <Button id="return-to-gallery" onClick={returnToGallery}>Return to Gallery</Button>
    </Container>
  )
}

export default Gallery