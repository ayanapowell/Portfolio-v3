import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import Container from '../components/Container';

const ProjectEl = styled.div`
  background: linear-gradient(#fff 0%, #fff 260px, #f4e8e8 260px);
`;

const ProjectHero = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 58px;
  height: 580px;
  z-index: 1;
  h1 {
    font-family: ${vars.ff_primary};
    font-size: 70px;
    font-weight: 500;
    line-height: 0.9;
    span {
      display: block;
    }
  }
  .project-hero__image {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: -1;

    img {
      max-height: 580px;
      object-fit: cover;
      width: 100vw;
    }
    .inner {
      height: 100%;
      width: 100%;
    }
  }
`;

const Content = styled.div`
  height: 750px;
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
      title,
      description,
      body,
      id,
      mainImage,
      projectUrl,
      slug,
    } = this.props.data.contentfulWork;
    return (
      <ProjectEl className="project__wrapper">
        <ProjectHero>
          <Container>{this.state.title}</Container>
          <div className="project-hero__image">
            <div className="container">
              <div className="row">
                <div className="offset-sm-2 inner">
                  <img src={mainImage.file.url} alt="" />
                </div>
              </div>
            </div>
          </div>
        </ProjectHero>
        <Content className="content" />
      </ProjectEl>
    );
  }
}
// background: linear-gradient(#fff 250px, red 100%);
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
    }
  }
`;
