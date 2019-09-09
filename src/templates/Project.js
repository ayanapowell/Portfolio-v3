import React, { Component } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Container from '../components/Container';
import Hero from '../components/project/Hero';
import PrimaryDescription from '../components/project/PrimaryDescription';
import ProjectDetail from '../components/project/ProjectDetail';
import ImageRow from '../components/project/ImageRow';
import SecondaryDescription from '../components/project/SecondaryDescription';
import Video from '../components/project/Video';
import DeviceDetail from '../components/project/DeviceDetail';

const ProjectEl = styled.div`
  overflow: hidden;
  .bg-primary {
    background: linear-gradient(#fff 0%, #fff 260px, #f4e8e8 260px);
  }
  .bg-secondary {
    background: linear-gradient(#fff 0%, #fff 100px, #f4e8e8 100px);
  }
  .bg-tertiary {
    background: linear-gradient(#fff 0%, #fff 100px, #f9f9f9 100px);
  }
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
      slug,
      projectUrl,
      description,
      secondaryDescription,
      tertiaryDescription,
      siteDetailList,
      mainImage,
      inlineImages,
      stackedImages,
      detailImage,
      tabletMobileImage,
      video,
    } = this.props.data.contentfulWork;

    return (
      <ProjectEl className="project__wrapper">
        {/* ===== Hero & intro section ===== */}
        <div className="bg-primary">
          <Hero title={this.state.title} image={mainImage.file.url} />
          <div className="project__content">
            <Container>
              <PrimaryDescription body={description} projectUrl={projectUrl} />
            </Container>
          </div>
        </div>

        {/* ===== Image row section ===== */}
        <ImageRow />

        {/* ===== Secondary description section ===== */}
        <Container>
          <SecondaryDescription
            title="Secondary Description"
            body={description}
          />
        </Container>

        <div className="bg-secondary">
          {/* ===== Video section ===== */}
          <Video video={video} />

          {/* ===== Project detail section ===== */}
          <Container>
            <ProjectDetail
              detailImage={detailImage.file.url}
              detailList={siteDetailList}
            />
          </Container>
        </div>

        {/* ===== Tertiary description section ===== */}
        <Container>
          <SecondaryDescription
            title="Tertiary Description"
            body={description}
          />
        </Container>

        {/* ===== Device detail section ===== */}
        <div className="bg-tertiary">
          <Container>
            <DeviceDetail />
          </Container>
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
      mainImage {
        id
        file {
          url
          fileName
          contentType
        }
      }
      description
      secondaryDescription
      tertiaryDescription {
        content {
          nodeType
          content {
            value
            nodeType
          }
        }
      }
      siteDetailList
      inlineImages {
        id
        file {
          url
          fileName
          contentType
        }
      }
      stackedImages {
        id
        file {
          url
          fileName
          contentType
        }
      }
      detailImage {
        id
        file {
          url
          fileName
          contentType
        }
      }
      tabletmobileImage {
        id
        file {
          url
          fileName
          contentType
        }
      }
      video {
        id
        file {
          url
          fileName
          contentType
        }
      }
    }
  }
`;
