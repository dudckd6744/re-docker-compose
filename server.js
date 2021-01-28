const express = require("express");
const redis = require("redis");
const app =  express();

const port = 5000;

const client = redis.createClient({
    host:"redis-server",
    port:6379
})

client.set("number", 0)

app.get('/',(req,res)=>{
    client.get("number", (err,number)=>{
        client.set("number", parseInt(number) + 1)
        res.send("숫자가 1씩 올라갑니다. 숫자: " + number)
    })
})

app.listen(port , ()=> console.log("Example listening ..."))