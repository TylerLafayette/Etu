// express imports
const express = require("express")
const app = express()
const port = 3000
var bodyParser = require("body-parser")

// firebase imports
const admin = require("firebase-admin")
const serviceAccount = require("./serviceAccount.json")

// firebase config
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://etu-db.firebaseio.com"
})

const db = admin.database()
const user = db.ref("/user")
const transactions = db.ref("/user/transactions")
const points = db.ref("/user/points")

// express config
app.use(bodyParser.json())
app.use(express.json())

app.get("/", async (req, res) => {
    res.send("index")
})

app.get("/points", async (req, res) => {
    points.on("value", async (snapshot) => {
        res.send(String(snapshot.val()))
    })
})

app.post("/transactions", async (req, res) => {
    transactions.push().set(req.body) // ?????????
})

app.listen(port, async () => {
    console.log("running on port " + port)
    console.log("================================")
})