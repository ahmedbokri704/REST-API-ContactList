const express = require("express")
const {MongoClient,ObjectID} = require("mongodb")
const bodyParser  = require("body-parser")
const assert = require("assert")
const cors  = require("cors")



const app = express()
app.use(bodyParser.json())
app.use(cors())



const url = "mongodb://localhost:27017"
const database ="finalcheckpoint"

MongoClient.connect(url,(err,client)=>{
assert.equal(err,null,"connection failed to database")
const db = client.db(database)

 
app.post("/add_contact",(req,resp)=>{
    let newContact = req.body
    db.collection("contacts").insertOne(newContact,(err,data)=>{
        (err)  ? resp.send("error") : (resp.send("item added with success"))
    })
})
app.get("/display_contacts",(req,resp)=>{
    db.collection("contacts").find().toArray((err,data)=>{
        (err) ? resp.send("cannot find contact") : resp.send(data)
    })
})
app.delete("/delete_contact/:id",(req,resp)=>{
    let id = ObjectID(req.params.id)
    db.collection("contacts").findOneAndDelete({_id : id},(err,data)=>{
        (err) ? resp.send("error")  : resp.send(data)
    })
})
app.put("/update_contact/:id",(req,resp)=>{
    let id = ObjectID(req.params.id)
    let contact = req.body
    db.collection("contacts").findOneAndUpdate({_id : id},{$set:{...contact}},(err,data)=>{
        (err) ? resp.send("error")  : resp.send(data)
    })
})


})


app.listen(5000,(err,res)=>{
    (err) ? console.log("Error" ) :(console.log("server is running "))
})