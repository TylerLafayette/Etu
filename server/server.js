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

// database refs
const db = admin.database()
const userRef = db.ref("/user")


const getUser = (callback) => {
    userRef.once("value", async (snapshot) => {
        callback(snapshot.val())
    })
}

const setUser = (data) => {
    userRef.set(data)
}


/*
getUser((user) => {
    user.transactions = [{ "date": "today", "amount": 0 }]
    setUser(user)
})
*/

// express config
app.use(bodyParser.json())
app.use(express.json())


app.get("/", async (req, res) => { // get the user name
    getUser((user) => {
        res.send({ "name": user.name })
    })
})

app.get("/points", async (req, res) => { // get the point balance
    getUser((user) => {
        res.send({ "points": String(user.points) })
    })
})

app.get("/user", async (req, res) => {
    getUser((user) => {
        res.send({ "user": user })
    })
})

app.post("/transactions", async (req, res) => { // add a transaction
    getUser((user) => {
        user.transactions.push(req.body)
        user.points = Number(user.points) + (Number(req.body.amount) / 10)
        setUser(user)
        res.send({ "user": user })
    })
})

app.post("/xp", async (req, res) => {
    getUser((user) => {
        user.xp = req.body.value
        setUser(user)
        res.send({ "user": user })
    })
})

app.post("/level", async (req, res) => {
    getUser((user) => {
        user.level = req.body.value
        setUser(user)
        res.send({ "user": user })
    })
})

app.listen(port, async () => {
    console.log("running on port " + port)
    console.log("================================")
})