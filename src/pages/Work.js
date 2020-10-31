import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import vars from '../utils/emotionVars';
import Container from '../components/Container';
import Hero from '../components/project/Hero';

const WorkPageEl = styled.div`
  background: linear-gradient(#fff 0%,#fff 450px,#f4e8e8 450px);
  .hero {
    height: 250px;
    margin-bottom: 50px;
  }
`;
const ImageRowEl = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    font-family: ${vars.ff_primary};
    font-weight: 500;
  }
  .image-row {
    display: flex;
    flex-wrap: wrap;
    max-width: 1440px;
    margin-bottom: 100px;
    margin-left: auto;
    padding: 0 3rem;
  }
  .image-row--0 {
    margin-left: unset;
    height: 780px;
    .column {
      width: 50%;
    }
  }
  .image-row--1 {
    height: 700px;
  }
  .image-row--2 {
    max-width: 100%;
    height: 800px;
    margin-bottom: 0;
    padding-bottom: 100px;
  }
  .column {
    max-height: 100%;
    position: relative;
  }
  .work-page__item-title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.2);
    transition: 0.3s ease background;
    h2 {
      color: #ababab;
      font-size: 32px;
      letter-spacing: -1px;
      padding: 2rem 4rem;
      transition: 0.3s ease color;
    
    }
    &:hover {
      background: rgba(0, 0, 0, 0.7);
      h2 {
        color: #fff;
      }
  
    }
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
              <div className="work-page__item column column--0">
                <Link to={projectList[0].node.slug}>
                  <span className="work-page__item-title">
                    <h2>{projectList[0].node.title}</h2>
                  </span>
                  <img src={projectList[0].node.mainImage.file.url} alt="" />
                </Link>
              </div>

              <div className="work-page__item column column--1">
                <Link to={projectList[1].node.slug}>
                  <span className="work-page__item-title">
                    <h2>{projectList[1].node.title}</h2>
                  </span>
                  <img src={projectList[1].node.mainImage.file.url} alt="" />
                </Link>
              </div>
            </div>
            <div className="image-row image-row--1">
              <div className="work-page__item column">
                <Link to={projectList[2].node.slug}>
                  <span className="work-page__item-title">
                    <h2>{projectList[2].node.title}</h2>
                  </span>
                  <img src={projectList[2].node.mainImage.file.url} alt="" />
                </Link>
              </div>
            </div>

            <div className="image-row image-row--2">
              <div className="work-page__item  column">
                <Link to={projectList[3].node.slug}>
                  <span className="work-page__item-title">
                    <h2>{projectList[3].node.title}</h2>
                  </span>
                  <img src={projectList[3].node.mainImage.file.url} alt="" />
                </Link>
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
