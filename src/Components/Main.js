import React from "react"
import {Link} from "react-router-dom"

const Home = () =>{
    return (
        <div>
            <h1>Contact App</h1>
            <div>
               <Link to='/add_contact'> <button type="button" class="btn btn-dark">Add Contact</button></Link>
               <Link to ="/display_contact"><button type="button" class="btn btn-warning">Display Contact List</button></Link>
            </div>
        </div>
    )
}
export default Home