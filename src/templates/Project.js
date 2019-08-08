import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  render() {
    const { title } = this.props.data.contentfulWork;
    return <div>{title}</div>;
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      slug
      id
      projectUrl
      description
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
