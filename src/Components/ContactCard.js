import React from "react"
import {Card,Button} from "react-bootstrap"
import axios from "axios"
import {Link} from "react-router-dom"
import {updateUser} from "../Action/action"
import {connect} from "react-redux"


 

const CardContact  = (props)=>{
    const handleDelete = () => 
    {
        axios.delete(`http://localhost:5000/delete_contact/${props.contact._id.valueOf()}`)
    }
   
    return (
        <Card  style={{ width: '18rem' }} >

        <Card.Body>
          <Card.Title>{props.contact.name}</Card.Title>
          <Card.Title>{props.contact.email}</Card.Title>
          <Card.Title>{props.contact.telephone}</Card.Title>
          <Link to ="/update_contact">
          <Button  onClick={()=>props.updateUser(props.contact._id)}>Update</Button>
          </Link >
          <Button variant="primary" onClick={handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
    )
}
export default connect(null,{updateUser})(CardContact)