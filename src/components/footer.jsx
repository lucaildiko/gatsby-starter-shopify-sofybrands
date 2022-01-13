import * as React from "react"
import Logo from "../icons/logo"
import {
  footerStyle,
  copyright,
  links,
  blurb,
  logos,
  footerNavList,
  footerNavListItem,
} from "./footer.module.css"

export function Footer() {
  return (
    <footer className={footerStyle}>
      <div className={blurb}>
        <div className={logos}>
          <Logo />
        </div>
        
      </div>
      <nav className={links} aria-label="footer">
        <ul className={footerNavList}>
          <li className={footerNavListItem}>
            <a href="https://www.sofybrands.com">
              Sofybrands
            </a>
          </li>
          <li className={footerNavListItem}>
            <a href="https://www.sofybrands.com">About Sofybrands</a>
          </li>
          {process.env.GATSBY_DEMO_STORE === "true" && (
            <li className={footerNavListItem}>
              <a href="https://www.sofybrands.com">
                <img
                  src="https://www.gatsbyjs.com/deploynow.png"
                  alt="Deploy to Gatsby Cloud"
                  height="38"
                  width="251"
                />
              </a>
            </li>
          )}
        </ul>
      </nav>
      <div className={copyright}>
        Copyright &copy; {new Date().getFullYear()} · All rights reserved
      </div>
    </footer>
  )
}
