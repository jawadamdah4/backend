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
    const body = req.body
    if(body == "Amdah")
    res.send('You Are Conneted!').sendStatus(201)
else
res.send('Your code is wormg!').sendStatus(404)
})

app.listen(prot, () => {
    console.log("app hosted succsusfully on ${port}")
})
