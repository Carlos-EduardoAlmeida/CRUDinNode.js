const express = require("express")
const app = express()
require('dotenv').config()

const connectToDatabase = require('./Src/database')

const porta = 8080

const bodyParser = require('body-parser')

const path = require("path")
const UserModel = require("./Src/UserModels")


app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res) =>{
    res.render('index')
})
//enviar usuarios
app.post('/enviar', (req, res)=>{
    var usuario = new UserModel({
        name: req.body.Fnome,
        lastName: req.body.Lnome,
        email: req.body.email,
        password: req.body.senha
    })
    let mensagem = 'criar'
    usuario.save()
    res.render('indexMensagem', { usuario, mensagem })

})

//ver usuarios
app.get('/usuarios', async (req, res)=>{
    try {
        users = await UserModel.find({})
        let mensagem = 'ver'
        res.render('indexMensagem', { mensagem })
    } catch (error) {
        res.status(500).send(error.message)
    }
})


//modificar usuario
app.post('/modificar', async (req, res)=>{
    try {
        const id = req.body.idusuar
        const newUser = {
            name: req.body.Fnome,
            lastName: req.body.Lnome,
            email: req.body.email,
            password: req.body.senha
        }
        const user = await UserModel.findByIdAndUpdate(id, newUser, { new: true })

        let mensagem = 'atualizar'

        res.status(200)
        res.render('indexMensagem', { user, mensagem})
    
    } catch (error) {
        res.status(500).send(error.message)
    }
})


//deletar usuario
app.post('/excluir', async (req, res) =>{
    try {
        const id = req.body.idusuar
        const user = await UserModel.findByIdAndDelete(id)
        let mensagem = "excluir"
        res.render('indexMensagem', { user, mensagem })
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(porta, () =>{
    console.log("Server aberto na rota:" + porta)
})