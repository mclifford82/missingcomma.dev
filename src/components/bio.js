/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            casualname
            summary
          }
          social {
            bluesky
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const casualname = data.site.siteMetadata?.casualname
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="this is that guy"
      />
      {author?.name && (
        <p>
          Hi, I'm <strong>{author.casualname}</strong>. {author?.summary || null}
          {` `}
          <a href={`https://bsky.app/profile/${social?.bluesky || ``}`}>
            You should follow him on Bluesky
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
