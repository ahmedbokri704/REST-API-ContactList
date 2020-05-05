import React,{useState,useEffect} from "react"
import axios from "axios"
import {connect} from "react-redux"
const mapStateToProps = state =>(
  {
    id : state.id,
    listcontact : state.listcontact
  }
)


function UpdateContact(props) {
  console.log("this is id :",props.id)

    const contact = props.listcontact.filter(e => e._id===props.id)
    const [user,setUser]  = useState({name:contact[0].name,email:contact[0].email,telephone:contact[0].telephone})
    
    const handleUpdate = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:5000/update_contact/${props.id.valueOf()}`,user)
    }
    
    return (
          
 
      <div>
          <form onSubmit={handleUpdate}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
        ></input>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          value={user.email}
      
        ></input>
        <input
          type="number"
          placeholder="telephone"
          onChange={(e) => setUser({ ...user, telephone: e.target.value })}
          value={user.telephone}
        ></input>
        <button type="sumbit">update</button>
      </form>
      </div>
    );
  }

  export default connect(mapStateToProps)(UpdateContact)