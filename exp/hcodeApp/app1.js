const express = require('express')
const app = express()
const arvRotas = require('./routes/admin.js')
//console.log(arvRotas)

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('hello word')
})

app.use('/', arvRotas)

app.listen(3000, () => {
    console.log('O servidor subiu')
})