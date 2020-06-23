import express from "express";

const app = express();

app.get("/users", (req,res)=>{
  res.json({users: [{id: 1, name: "Alef Ojeda"}]});
});

app.listen(3333, ()=>{
  console.log("Listening on port 3333.");
});