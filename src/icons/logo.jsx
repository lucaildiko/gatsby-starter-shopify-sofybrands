import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Logo(props) {
  return (
    <StaticImage
    src="../images/logo.png"
    width={100}
    alt="sofybrands"
    placeholder="tracedSVG"
    />
  )
}

export default Logo
