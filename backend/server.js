const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 500
const {errorHandler} = require ('./middleware/errorMiddleware')
// CORS para conectar backend con front 
const cors = require('cors')
const { options } = require('./routes/gastosRoutes')

connectDB()

const app = express()

//Acepta todos los urls, pero no es recomendable
app.use(cors())
/* Forma correcta, bloquea todos los urls menos el que le indiques


const corsOptions = {
    origin: 'https//midominio.com',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
*/

app.use(express.json())

app.use('/api/gastos', require('./routes/gastosRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor iniciado en el puerto ${port}`))