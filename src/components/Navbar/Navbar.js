import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"


const Navbar = () => {
  return (
    <div className="section" id="navbar">
      <div className="container1">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#hero")}
            className="name"
            tabIndex={0}
          >
          <img src="https://www.keepandshare.com/doc8/24125/dave-logo2-png-11k?da=y" width="16" height="20" className="navbarlogo" ></img>
           &nbsp; Khristian Dave Hernan
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#about")}>About Me</button>
            <button onClick={() => scrollTo("#projects")}>Project</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
