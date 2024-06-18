const express = require('express')

const app = express()

app.get('/', (resquest, response)=>{
   response.status(200).send('Teste')
})

module.exports = app