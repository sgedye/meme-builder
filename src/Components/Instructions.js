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
  @media screen and (min-width: 600px) {
    width: 25vw;
    height: 100vh;
  }
`

function Instructions() {
  return (
    <Container>
      <h2>Build Your Own Meme</h2>
      <hr />
      <p>
        Lorem ipsum............abs blah blah blah; `npm audit fix` to fix them,
        or `npm audit` for details Shauns-MBP:meme-builder sgedye$ psd bash:
        psd: command not found Shauns-MBP:meme-builder sgedye$ pwd
        /Users/sgedye/Documents/_Entrepreneurship/projects/react/meme-builder
        Shauns-MBP:meme-builder sgedye$
      </p>
    </Container>
  )
}

export default Instructions
