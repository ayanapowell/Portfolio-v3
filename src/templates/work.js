import React, { Component } from 'react'
import get from 'lodash/get'
import PropTypes from 'prop-types'

class Work extends Component {
  render() {
    const { title } = this.props.data.contentfulWork
    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}

Work.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Work

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      slug
      id
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
