import React, {Component} from 'react'
import styled from '@emotion/styled'
import homeIcon from '../images/icons/home-button.svg'
import menuIcon from '../images/icons/menu-button.svg'

const HeaderDiv = styled.div`
  position: relative;
  header {
    display: flex;
    justify-content: space-between;
    padding: 30px 60px;
  }
`;

class Header extends Component {
  render() {
    const { variant } = this.props;

    return (
      <HeaderDiv>
        <header className={`style--${variant}`}>
          <div className="header__home-button">
            <img src={homeIcon} alt="home"/>
          </div>
          <div className="header__menu-button">
            <img src={menuIcon} alt="home"/>
          </div>
        </header>
      </HeaderDiv>
    )
  }
}

export default Header;