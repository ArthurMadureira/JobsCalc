const express = require('express')
const server = express()
const routes = require('./routes')
const path = require('path')

server.set('view engine', 'ejs') // Usando template engine

// mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public")) // habilitar arquivos statics

//usar o req.body
server.use(express.urlencoded({extended: true}))

server.use(routes) // usando routes

server.listen(3000, () => {
  console.log('Rodando...')
})
