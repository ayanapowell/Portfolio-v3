import React, { Component } from 'react'
import styled from '@emotion/styled'
import Header from './header'
import '../styles/base.scss'

const ContainerDiv = styled.div`
  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
`

class Container extends Component {
  render() {
    const { variant, children } = this.props

    return (
      <div>
        <ContainerDiv>
          <div className={`container style-${variant}`}>
            <Header variant={variant} />
            {children}
          </div>
        </ContainerDiv>
      </div>
    )
  }
}

export default Container
