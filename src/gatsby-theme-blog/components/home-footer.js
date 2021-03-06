import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import { Link } from "gatsby"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    
    <div>
       <ul>
          <Link to="/test">Test</Link>
	  {` `}
	  {` `}
	  <Link to="/test2">Test2</Link>
       </ul>
    </div>
    © {new Date().getFullYear()}, ニョロとハムさん
    {/*  Powered by
     {` `}
     <Styled.a href="https://www.gatsbyjs.org">Gatsby</Styled.a>
     {` `}&bull;{` `}
    */}
    {/*
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <Styled.a href={platform.url} target="_blank" rel="noopener noreferrer">
          {platform.name}
        </Styled.a>
        {arr.length - 1 !== i && (
          <Fragment>
            {` `}&bull;{` `}
          </Fragment>
        )}
      </Fragment>
    ))}
    */}
  </footer>
)
export default Footer
