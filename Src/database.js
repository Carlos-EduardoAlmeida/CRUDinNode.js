const mongoose = require('mongoose')

connectToDatabase().catch(err => console.log(`Erro: ${err}`))

async function connectToDatabase(){
    await mongoose.connect(`mongodb+srv://${process.env.ADMIN}:${process.env.PASSWORD}@learningnodejs.tit23ir.mongodb.net/?retryWrites=true&w=majority`)
    
}
module.exports = connectToDatabase