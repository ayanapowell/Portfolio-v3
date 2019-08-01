import React from 'react';
import { graphql } from 'gatsby';

const WorkNavigation = ({ data }) => {
  const allWorks = data.allContentfulWork.edges;
  console.log(allWorks);
};

export default WorkNavigation;

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
