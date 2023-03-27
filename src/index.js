require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sprint = require("./Routes/sprint")
const user =require("./Routes/person")
 
const connect = require("./Config/db")
const PORT = process.env.PORT || 3000

const app = express();

app.use(express.json());
app.use(cors({
    origin: "*"
}));

 

app.use("/v",  sprint);
app.use("/user", user);
app.listen(PORT, async () => {
    await connect();
    console.log(`listning to http://localhost:${PORT}`)
})