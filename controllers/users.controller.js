const users = require('../models/users.model')
const {v4 : uuidv4} = require('uuid')


//get users
const getAllUsers = (req, res) => {
    res.status(200).json({
        users
    })
}

//create users
const createUsers = (req, res) => {
    let newUser = {
        id : uuidv4(),
        username : req.body.username,
        email : req.body.email
    }

    users.push(newUser)
    res.status(201).json(users)
}

//update users
const updateUsers = (req, res) => {
    const userId = req.params.id
    const {username, email} = req.body
    // users.filter(user => user.id == userId).map(selectedUser => {
    //     selectedUser.username = username
    //     selectedUser.email = email
    // })

    users.forEach(user => {
        if(user.id == userId) {
            user.username = username
            user.email = email
        }
    })
    res.status(202).json(users)
}

//delete users
const deleteUsers = (req, res) => {
    const userId = req.params.id
    let filteredArray = users.filter(user => userId != user.id)
    users = filteredArray
    res.status(200).json(filteredArray)
}

module.exports = { getAllUsers, createUsers, updateUsers, deleteUsers }