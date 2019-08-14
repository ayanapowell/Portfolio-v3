import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Container from '../components/Container';
import Hero from '../components/project/Hero';
import DescriptionCopy from '../components/project/DescriptionCopy';
import Image2up from '../components/project/Image2up';

const ProjectEl = styled.div`
  background: linear-gradient(#fff 0%, #fff 260px, #f4e8e8 260px);
  overflow: hidden;
`;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
    };
    this.setTitle = this.setTitle.bind(this);
  }
  componentDidMount() {
    this.setTitle();
  }
  setTitle() {
    const { title } = this.props.data.contentfulWork;
    const str1 = title.substring(0, title.indexOf(' '));
    const str2 = title.substring(title.indexOf(' ') + 1);

    const newTitle = (
      <h1>
        <span>{str1}</span>
        <span>{str2}</span>
      </h1>
    );
    this.setState({ title: newTitle });
  }
  render() {
    const {
      description,
      body,
      id,
      mainImage,
      imageVertical,
      imageHorizontal,
      projectUrl,
      slug,
    } = this.props.data.contentfulWork;

    return (
      <ProjectEl className="project__wrapper">
        <Hero title={this.state.title} image={mainImage.file.url} />
        <div className="project__content">
          <Container>
            <DescriptionCopy
              body={body.childMarkdownRemark.html}
              projectUrl={projectUrl}
            />
          </Container>

          <Image2up
            verticalImage={imageVertical.file.url}
            horizontalImage={imageHorizontal.file.url}
          />
        </div>
      </ProjectEl>
    );
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
      mainImage {
        file {
          url
        }
      }
      imageHorizontal {
        file {
          url
        }
      }
      imageVertical {
        file {
          url
        }
      }
    }
  }
`;
