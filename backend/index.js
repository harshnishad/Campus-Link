const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();
// middleware
const corsOptions = {
    origin: "https://campus-link-ruddy.vercel.app/Adminlogin" 
}
app.use(cors(corsOptions));

app.use(express.json({ limit: '10mb' }))
app.use(cors())
app.use(express.urlencoded({ extended: true }))

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})