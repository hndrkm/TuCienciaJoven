'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoosse = require('mongoose')


const app = express()
const port  = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/api/usuario', (req, res)=>{
  res.send(200,{usuarios:[]})
})

app.get('/api/usuario/:userId', (req, res)=>{

})

app.post('/api/usuario', (req, res) => {
  console.log(req.body)
  res.status(200).send({message:'el usuario se recibio'})
})

app.delete('/api/usuario/:userId', (req, res)=>{

})
app.put('/api/usuario/:userId', (req, res)=>{

})


mongoosse.connect('mongodb://localhost:27017/shop',(err,res)=>{
  if (err) throw err
  console.log('conexion a la base de datos establecida...')
  app.listen(port, () =>{
    console.log(`Api correndo en http://localhost:${port}`)
  })
})
