import React from 'react'
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
  
  const returnToGallery = () => {
    console.log(document.getElementById('memeToDownload'))
    document.getElementById("gallery-title").textContent = "Image Gallery"
    document.getElementById("gallery-body").style.display = "flex"
    document.getElementById("return-to-gallery").style.display = "none"
    document.getElementById("memeToDownload").style.display = "none"
  }

  const imageData = [
    { id:1, src:'http://rtgphotography.com.au/img/galleries/cuba.jpg' },
    { id:2, src:'http://rtgphotography.com.au/img/galleries/ethiopia.jpg' },
    { id:3, src:'http://rtgphotography.com.au/img/galleries/madagascar.jpg' },
    { id:4, src:'http://rtgphotography.com.au/img/galleries/landscapes.jpg' },
    { id:5, src:'http://rtgphotography.com.au/img/galleries/portraits-1.jpg' },
    { id:6, src:'http://rtgphotography.com.au/img/galleries/portraits-2.jpg' },
    { id:7, src:'http://rtgphotography.com.au/img/galleries/black&whites.jpg' }
  ]

  const IMAGE_LIST = imageData.map(img => {
    const imgId = 'img_' + img.id
    const altTag = img.src.replace(/.*\/(\w+[-|&]?\w+)\.jpg/, (_, $1) => $1)
    return (
      <Image key={imgId} id={imgId} src={img.src} alt={altTag} onClick={() => props.imageClicked(img.src)} />
    )
  })
  return (
    <Container id="gallery">
      <Title id="gallery-title">Image Gallery</Title>
      <Pictures id="gallery-body">{IMAGE_LIST}</Pictures>
      <Canvas id="memeToDownload" width="600" height="400"></Canvas>
      <Button id="return-to-gallery" onClick={returnToGallery}>Return to Gallery</Button>
    </Container>
  )
}

export default Gallery



// import { createClient } from 'pexels';

// All requests made with the client will be authenticated


  // UNSECURE API call to get images 
  /* 
  const client = createClient(process.env.REACT_APP_PEXELS_API_KEY);
  console.log(client)

  console.log(process.env.REACT_APP_PEXELS_API_KEY)
  client.photos.show({ id: 2014422 })
    .then(photo => { console.log(photo) })
  
  
  let x =client.photos.random()
  const getX = () => console.log(x)
  setInterval(() => {
    getX()
  }, 1000);
  const query = 'Nature';
  client.photos.search({ query, per_page: 1 })
    .then(photos => { console.log(photos)});
  */