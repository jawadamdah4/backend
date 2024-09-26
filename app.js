const express = require('express')
const app = express()
app.use(express.json())
const prot = 8000 || process.env.PORT 
app.get('/', (req, res) => {
    res.send('Welcome! Home Page.')
})
app.post('/NewLicense', (req, res) => {
    console.log(req.body)
    res.sendStatus(201)
})
app.get('/CheckMyKey', (req, res) => {
    console.log(req.body)
    res.send('we are checking you key')
})

app.listen(prot, () => {
    console.log("app hosted succsusfully on ${port}")
})
