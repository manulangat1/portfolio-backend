import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import path from 'path'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes/index.js'
dotenv.config()

import { handleError,ErrorHandler} from './helpers/errors/error.js'


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}
// import and load routes 
app.use('/',routes)

app.get('/', res => {
  res.status(200).json({"message":'Hello'})
})

app.use('*', (req, res) => {
    res.status(404).send({
      message: 'Url not found'
    })
  })
const PORT = process.env.PORT 

// app.use('/',(req,res) => res.status(200).json('Hey'))

// error middleware
app.use((err, req, res, next) => {
  handleError(err, res,500);
});

app.listen(PORT, console.log(`Portfolio running on ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.underline))