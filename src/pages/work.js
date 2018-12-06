import React, { Component } from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Work from '../components/work'

class WorkPage extends Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const allWork = get(this, 'props.data.allContentfulWork.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className="wrapper">
          <h2 className="section-headline">Recent work</h2>
          <ul className="article-list">
            {allWork.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <Work work={node}>
                    <h1>{node.title}</h1>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.body.childMarkdownRemark.html,
                      }}
                    />
                  </Work>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default WorkPage

export const pageQuery = graphql`
  query WorkQuery {
    allContentfulWork(sort: { fields: [title], order: DESC }) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
