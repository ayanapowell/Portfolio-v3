import React from 'react';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import { graphql } from 'gatsby';
import '../styles/base.scss';
import 'bootstrap/scss/bootstrap-grid.scss';
import SiteWrapper from '../components/SiteWrapper';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <SiteWrapper />
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
