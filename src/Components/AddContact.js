import React, { useState } from "react";
import {setUser} from "../Action/action"
import {connect} from "react-redux"

import axios from "axios";

const AddContact = (props) => {


  const submitForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/add_contact", props.user);  
    props.setUser({ name: "", email: "", telephone: "" })
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => props.setUser({ ...props.user, name: e.target.value })}
          value ={props.user.name}
        ></input>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => props.setUser({ ...props.user, email: e.target.value })}
          value ={props.user.email}
        ></input>
        <input
          type="number"
          placeholder="telephone"
          onChange={(e) => props.setUser({ ...props.user, telephone: e.target.value })}
          value ={props.user.telephone}
        ></input>
        <button type="button" class="btn btn-success">Add</button>
      </form>
    </div>
  );
};

const mapStateToProps = state =>({
  user : state.user
})
export default connect(mapStateToProps, {setUser}) (AddContact);
