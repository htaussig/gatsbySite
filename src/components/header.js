import React from "react"

// import { Link } from "gatsby"
//      <Link to="/">Home</Link>


export default function Header() {
  return (
    
    <div>
        <h1><a  id="pageTitle" href="/">Harry Taussig</a></h1>
        <nav id="navbar">		
            <a id="navbarlink" href="/">Home</a>

            <a id="navbarlink" href="/books/">Bookshelf</a>

            <a id="navbarlink" href="/blog/">Writing</a>	
        </nav>
        <hr></hr>
    </div>
      
  );
}