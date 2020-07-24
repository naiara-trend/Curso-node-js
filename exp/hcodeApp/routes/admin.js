const express = require('express')
const router = express.Router()

router.get('/admin', (req, res)=>{
    res.send('testando')
})

router.post('/admin', (req, res)=>{
    const corpo = `login: ${req.body.login}
    Senha: ${req.body.senha}`
    res.send('acessando nay via post \n' + corpo)
})

router.get('/admin/:id', (req, res)=>{
    res.send('acessado adm com id:'+req.params.id)
})

module.exports = router