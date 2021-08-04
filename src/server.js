const express = require("express")
const server = express()
const routes = require("./routes")

// usando template engine
server.set('view engine', 'ejs')

//habilitar arquivos statics (estáticos)
server.use(express.static("public"))

// usar o req.body (liberação)
server.use(express.urlencoded( {extended: true} ))

// routes
server.use(routes)
server.listen(3000, () => console.log("server rodando"))

// server.use() = Pode ser usado para setar/iniciar/chavear configurações no servidor 