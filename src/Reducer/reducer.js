import React from "react"

const initialState = {
    listcontact:[],
    user :{ name: "", email: "", telephone: "" },
    id :""
}

const reducer = (state = initialState, action )=>{
    switch(action.type)
    {
         case "DISPLAY_CONTACT" :
         return {...state,listcontact:action.payload}
          
         case "SET_CONTACT" : 
         return {...state,user:action.payload}

         case "UPDATE_CONTACT" : 
         return {...state,id:action.payload}

         default : return state
    }
}


export default reducer