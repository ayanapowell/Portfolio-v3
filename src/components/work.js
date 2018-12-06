import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ work }) => (
  <div>
    <h3>
      <Link to={`/work/${work.slug}`}>{work.title}</Link>
    </h3>
    <p
      dangerouslySetInnerHTML={{
        __html: work.body.childMarkdownRemark.html,
      }}
    />
  </div>
)
