import React from 'react';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import HeaderNav from '../components/HeaderNav';
import { graphql } from 'gatsby';
import Intro from '../components/Intro';
import SiteName from '../components/SiteName';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/scss/bootstrap-grid.scss';

import SiteContentWrapper from '../components/SiteContentWrapper';
import Carousel from '../blocks/Carousel';
import { throws } from 'assert';

const HeroEl = styled.div`
  font-family: ${vars.ff_primary};
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
  .header-container {
    z-index: 999;
  }
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
      allProjects: '',
    };
    this.handleSelectedNavItem = this.handleSelectedNavItem.bind(this);
  }
  handleSelectedNavItem(selectedItem) {
    this.setState({ activeItem: selectedItem });
  }
  componentDidMount() {
    this.setState({ allProjects: this.props.data.allContentfulWork.edges });
  }
  render() {
    return (
      <div>
        <HeroEl>
          <SiteName onNavSelection={this.handleSelectedNavItem} />
          <div className="container">
            <div className="row">
              <div className="offset-sm-1 header-container">
                <HeaderNav onNavSelection={this.handleSelectedNavItem} />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="offset-sm-1">
                <div>
                  <SiteContentWrapper
                    activeItem={this.state.activeItem}
                    allProjects={this.state.allProjects}
                  />
                </div>
              </div>
            </div>
          </div>
        </HeroEl>
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allContentfulWork(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          id
          mainImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
