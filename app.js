require("dotenv").config()
const express = require("express")
const morgan = require("morgan")

// router require
const contactRoutes = require("./contactRouts")


const app = express()

const PORT = process.env.PORT || 3001

app.use(morgan('dev'))


app.use(express.urlencoded({extended : true}))
app.use(express.json())


app.use("/contacts", contactRoutes)


app.get("*", (req, res) =>{

    res.send("<h1>Please user the correct route</h1>")
})


app.listen(PORT, () =>{

    console.log(`Server is running successfully at http://localhost:${PORT}`)
})


