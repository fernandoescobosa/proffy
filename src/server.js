const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, confirmedRegister } = require('./pages')

// configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure('src/views', {
    express: server,
    onCache: true,
})

server
    .use(express.urlencoded({ extended: true }))
    // configurar arquivos estáticos (css, scripts, imagens)
    .use(express.static("public"))
    // rotas da aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .get("/confirmed", confirmedRegister)
    .post("/save-classes", saveClasses)
    .listen(5500)