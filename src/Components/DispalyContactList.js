import React,{useEffect} from "react"
import axios from "axios"
import CardContact from "./ContactCard"
import {displayContact} from "../Action/action"
import {connect} from "react-redux"


const DisplayContactList = (props)=>{
   
    useEffect(()=>{ axios.get("http://localhost:5000/display_contacts").then(res=>{
    props.displayContact(res.data)
    })
},)
   
 return (
     <div>
       {props.contactList.map(e => <CardContact contact = {e}></CardContact>)}
     </div>
 )
}
const mapStateToProps = state => (
    {
       contactList : state.listcontact
    }
)

export default connect(mapStateToProps,{displayContact}) (DisplayContactList)