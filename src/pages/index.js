import React from 'react';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import { graphql } from 'gatsby';
import '../styles/base.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import SiteWrapper from '../components/SiteWrapper';
import Intro from '../components/Intro';
import ProjectNav from '../components/ProjectNav';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeComponent: '',
      allProjects: '',
    };
    this.setActiveComponent = this.setActiveComponent.bind(this);
  }

  componentDidMount() {
    this.setState({ activeComponent: <Intro /> });
    this.setState({ allProjects: this.props.data.allContentfulWork.edges });
  }
  setActiveComponent(activeValue) {
    let component;
    if (activeValue === 'work') {
      component = <ProjectNav allProjects={this.state.allProjects} />;
    } else {
      component = <Intro />;
    }
    this.setState({ activeComponent: component });
  }
  render() {
    return (
      <div>
        <SiteWrapper onSettingActiveComponent={this.setActiveComponent}>
          {this.state.activeComponent}
        </SiteWrapper>
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
