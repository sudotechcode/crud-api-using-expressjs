const express = require('express')

const app = express()

const port = 3000

// dummy data
const users = [
    {
        id: 1,
        name: 'SudoTech Code'
    },
    {
        id: 2,
        name: 'Your name here'
    }
]

// parsing all incoming request data to json
app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        message: "It's work dude!"
    })
})

app.get('/users', (req, res) => {
    res.status(200).send({
        status: true,
        message: "Successfully get users!",
        data: users
    })
})

app.put('/users', (req, res) => {
    users.push(req.body)

    res.status(201).send({
        status: true,
        message: "Successfully create user!"
    })
})

app.post('/users/:id', (req, res) => {
    const idUser = req.params.id
    let userIndex = users.findIndex(user => user.id == idUser)

    users[userIndex] = req.body

    res.status(201).send({
        status: true,
        message: `Successfully update user! with ID : ${idUser}.`
    })
})

app.delete('/users/:id', (req, res) => {
    const idUser = req.params.id
    let userIndex = users.findIndex(user => user.id == idUser)

    users.splice(userIndex, 1)

    res.status(201).send({
        status: true,
        message: `Successfully delete user! with ID : ${idUser}`
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})