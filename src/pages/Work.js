import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Container from '../components/Container';
import Hero from '../components/project/Hero';

const WorkPageEl = styled.div`
  .hero {
    height: 450px;
  }
  .work-page__inner {
    background: linear-gradient(#fff 0%,#fff 260px,#f4e8e8 260px);
  }
`;
const ImageRowEl = styled.div`
  .image-row {
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;
    margin-bottom: 180px;
    margin-left: auto;
    padding: 0 4rem;
  }
  .image-row--0 {
    margin-left: unset;
    height: 800px;
    .column {
      width: 50%;
      padding-right: 2rem;
    }
  }
  .image-row--1 {
    height: 700px;
  }
  .image-row--2 {
    max-width: 100%;
    height: 800px;
    margin-bottom: 0;
    padding-bottom: 180px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .column {
  
    max-height: 100%;
  }
`;

const WorkPage = ({ data }) => {
  const projectList = data.allContentfulWork.edges;
  const pageTitle = (
    <h1>
      <span>Selected</span>
      <span>Work</span>
    </h1>
  );
  return (
    <>
      <WorkPageEl>
        <Container>
          <Hero title={pageTitle} />
        </Container>
        <div className="work-page__inner">
          <ImageRowEl>
            <div className="image-row image-row--0">
              <div className="column column--0">
                <img src={projectList[0].node.mainImage.file.url} alt="" />
                <h2>{projectList[0].node.title}</h2>
              </div>

              <div className="column column--1">
                <img src={projectList[1].node.mainImage.file.url} alt="" />
                <h2>{projectList[1].node.title}</h2>
              </div>
            </div>
            <div className="image-row image-row--1">
              <div className="column">
                <img src={projectList[2].node.mainImage.file.url} alt="" />
                <h2>{projectList[2].node.title}</h2>
              </div>
            </div>

            <div className="image-row image-row--2">
              <div className="column">
                <img src={projectList[3].node.mainImage.file.url} alt="" />
                <h2>{projectList[3].node.title}</h2>
              </div>
            </div>
          </ImageRowEl>
        </div>

      </WorkPageEl>
    </>
  )
}

export default WorkPage;

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
