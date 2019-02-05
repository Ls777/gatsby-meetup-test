import React from 'react'
import styled from 'styled-components'

const NumberLine = styled.div`
  position: relative;
  margin: 21px auto;
  max-width: 800px;
  font-family: 'Roboto Mono';
  height: 0px;
  color: #666;
  user-select: none;
`

const NumberContainer = styled.div`
  position: absolute;
  top: 42px;
`

const Number = styled.div`
  position: relative;
  left: -80px;
  width: 100px;
  text-align: right;
`

const numbers = Array.from(new Array(400), (val, index) => index + 1)

export default () => (
  <NumberLine>
    <NumberContainer>
      {numbers.map(num => (
        <Number key={num}>{num}</Number>
      ))}
    </NumberContainer>
  </NumberLine>
)
