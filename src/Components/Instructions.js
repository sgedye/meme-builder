import React from 'react'
import styled from 'styled-components'

const Container = styled.aside`
  position: fixed;
  display: inline-block;
  width: 100vw;
  height: auto;
  background-color: green;
  text-align: center;
  overflow-wrap: break-word;
  hr {
    border: 2px solid lightgreen;
    border-radius: 25px;
    margin: 10px auto;
  }
  p {
    font-size: 1.4em;
  }

  @media screen and (min-width: 600px) {
    width: 25vw;
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
    margin: 20px 30px;
    counter-increment: count;
  }
  li::before {
    content: counter(count) ". ";
    position: absolute;
    left: 25px;
    // height: 30px;
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
        <li>Position text with mouse</li>
        <li>Click download to save</li>
      </OrderedList>
    </Container>
  )
}

export default Instructions
