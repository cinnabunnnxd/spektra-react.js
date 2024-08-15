import React from "react"


const Nav = () => {
    return (
        <>
            
            <div className="header">
                <nav className="navbar">
                    <a href="index.html"><img src="" alt="" /></a>
                    <ul>
                        <a className="navlink" href="/Homepage">Home</a>
                        <a className="navlink" href="/About">About</a>
                        <a className="navlink" href="/Services">Services</a>
                        <a className="navlink" href="/Projects">Projects</a>
                    </ul>
                    <a className="con-btn" href="contact.html"
                    ><button className="Contact"><span>Contact us</span></button></a
                    >
                    <div className="menu">
                        <div className="lines"></div>
                        <div className="lines"></div>
                        <div className="lines"></div>
                    </div>
                </nav>
            </div>
            <div className="menuElement">
                    <a className="navlink" href="index.html">Home</a>
                    <a className="navlink" href="about.html">About</a>
                    <a className="navlink" href="services.html">Services</a>
                    <a className="navlink" href="projects.html">Projects</a>
                </div>
        </>

    )
}


export default Nav