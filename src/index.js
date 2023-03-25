require("dotenv").config();

const express = require("express");
const cors = require("cors");
const allRouter = require("./Routes/allroutes")
 
const connect = require("./Config/db")
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));

 

app.use("/", allRouter);
 
app.listen(PORT, async () => {
    await connect();
    console.log(`listning to http://localhost:${PORT}`)
})