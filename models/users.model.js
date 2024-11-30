const {v4 : uuidv4} = require('uuid')

let users = [
    {
        id : uuidv4(),
        username : 'Naeem Biswass',
        email : 'biswassnaeemcse@gmail.com'
    },
    {
        id : uuidv4(),
        username : 'Reza Biswass',
        email : 'rbiswassnaeemcse@gmail.com'
    }
]

module.exports = users