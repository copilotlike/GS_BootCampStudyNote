const express = require('express')
const path = require('path')
const app = express()


const lang = require('./rrr/01_lang')
const management = require('./rrr/02_management')
const art = require('./rrr/03_art')


app.use('/01_lang', lang)
app.use('/02_management', management)
app.use('/03_art', art)





app.route('/notice')
.get((req,res)=>{
    res.send(`/notice get 이야`)
})
.post((req,res)=>{
    res.send(`/notice post 야`)
})


app.listen(80,()=>{
    console.log("route 서버 시작")
})