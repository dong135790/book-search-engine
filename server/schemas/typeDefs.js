
const typeDefs = `
    type User {
        _id: ID
    }
    type Book {
        _id: ID
    }
    type Query {
        users: [Users]
    }
`

module.exports = typeDefs;