import express  from "express";
import bodyParser from "body-parser";
import viewEngine from "./src/config/viewEngine"
import initWedRoutes from './src/routes/web'

let app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

viewEngine(app)
initWedRoutes(app);

let port = process.env.PORT

app.listen()