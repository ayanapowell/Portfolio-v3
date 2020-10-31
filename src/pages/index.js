import React from 'react';
import { Router } from "@reach/router"
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import { graphql } from 'gatsby';
import '../styles/base.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import Container from '../components/Container';

const IntroEl = styled.div`
  font-family: ${vars.ff_primary};
  display: flex;
  flex-direction: column;
  height: 100%;
  .container--intro {
    height: calc(100% - 115px);
    display: flex;
    align-items: center;
  }
  .intro__title,
  .intro__subtitle {
    font-weight: 300;
    position: relative;
  }
  .intro__title {
    font-size: 70px;
    line-height: 126px;
    .overlay {
      margin-top: 13px;
    }
  }

  .intro__subtitle {
    font-size: 60px;
    margin-top: -20px;
    .overlay {
      margin-top: 22px;
    }
  }
  .intro__description {
    font-size: 30px;
    line-height: 1.4;
    font-weight: 300;
    margin-top: 15px;
    button {
      font-size: 25px;
      font-weight: 300;
      padding: 0;
      margin-top: 50px;
      display: block;
    }
  }
`;

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allProjects: '',
    };
  }

  componentDidMount() {
    this.setState({ allProjects: this.props.data.allContentfulWork.edges });
  }

  render() {
    return (
      <>
        <IntroEl>
          <Container modifier="intro">
            <div className="intro col-sm-9 px-0">
              <h1 className="intro__title">
                <span>Ayana Powell</span>
              </h1>
              <h1 className="intro__subtitle">
                <span>Web Developer</span>
              </h1>
              <p className="intro__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Container>
        </IntroEl>
      </>
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
