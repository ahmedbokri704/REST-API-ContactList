import React from "react"

export const displayContact = payload =>{
    return (
    {
        type:"DISPLAY_CONTACT",
        payload
    })
}
export const setUser= payload =>{
    return (
    {
        type:"SET_CONTACT",
        payload
    })
}
export const updateUser= payload =>{
    return (
    {
        type:"UPDATE_CONTACT",
        payload
    })
}

