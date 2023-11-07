const express = require('express')
const path = require('node:path')
const fs = require('node:fs')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.static('static'));
app.use(express.urlencoded())

app.get('*', (req, res) => {
    res.send()
})
app.get('/registration', (req, res) => {
    res.sendFile("index.html",{root: path.join(__dirname, "./static")})
})
app.post('/reg-data',(req, res)=>{
    console.log(">>>>>>>>>>", req.body)
    fs.appendFile("data.txt", JSON.stringify(req.body) + "\n", (err)=>{
        if(err){
            res.status(500).send("User not added")
        }
        else {
            res.status(201).send("User added")
        }
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})