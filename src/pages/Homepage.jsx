import React from "react"
import { useNavigate } from "react-router-dom"
import Header from "../coms/Nav"
import Nav from "../coms/Nav"

const Homepage = () => {

    const nav=useNavigate()
    return (

        <div>
            <Nav/>
            {/* Homepage
            <button onClick={()=>{nav('/about')}}>About</button>
            <p>tanginamo</p> */}
        </div>


    )
}



export default Homepage