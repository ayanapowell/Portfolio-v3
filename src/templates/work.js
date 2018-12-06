import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

class Work extends React.Component {
  render() {
    const work = get(this.props, 'data.contentfulWork')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${work.title} | ${siteTitle}`} />

        <div className="wrapper">
          <h1 className="section-headline">{work.title}</h1>
          <p
            style={{
              display: 'block',
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: work.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    )
  }
}

export default Work

export const pageQuery = graphql`
  query WorkSlug($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
