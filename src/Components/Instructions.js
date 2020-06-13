import React from 'react'
import styled from 'styled-components'

const Container = styled.aside`
  position: fixed;
  display: none; // No mobile instructions !!!
  width: 100vw;
  height: auto;
  background: rgba(70, 80, 170, 0.7);
  text-align: center;
  text-shadow: 1px 1px 20px white;
  overflow-wrap: break-word;
  h2 {
    font-size: 2.2em;
    text-shadow: 1px 1px 20px white, -1px 0px white;
  }
  hr {
    border: 2px solid darkblue;
    border-radius: 25px;
    margin: 10px auto;
  }
  p {
    font-size: 1.4em;
  }

  @media screen and (min-width: 600px) {
    display: inline-block;
    width: 30vw;
    height: 100vh;
  }
`

const OrderedList = styled.ol`
  list-style: none;
  counter-reset: count;
  font-size: 1.4em;
  padding: 0 0 0 10%;
  text-align: left;
  line-height: 2em;
  li {
    margin: 20px;
    counter-increment: count;
  }
  li::before {
    content: counter(count) ". ";
    position: absolute;
    left: 25px;
    transform: rotate(-5deg);
    background-color: black;
    color: gold;
    padding: 5px;
    border-radius: 50%;
    box-shadow: 1px 2px 5px gold;
    font-weight: bold;
  }
`

function Instructions() {
  return (
    <Container>
      <h2>Build Your Own Meme</h2>
      <hr />
      <p>Create your own meme by following these easy steps.</p>
      <OrderedList>
        <li>Click on an image</li>
        <li>Write your text</li>
        <li>Adjust the settings</li>
        <li>Click download</li>
        <li>Right click on your meme</li>
        <li>Select "Save Image As..."</li>
        <li>Click "Return to Gallery" to create another meme</li>
      </OrderedList>
    </Container>
  )
}

export default Instructions
