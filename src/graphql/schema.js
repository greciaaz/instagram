const { gql } = require('apollo-server');

const typeDefs = gql`
directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD

type Auth {
    token: String,
    message: String,
}
type Message {
    menssage: String
}

input PostInput {
    title: String,
    content: String,
}

input UserInput {
    name:String!
    lastName: String!
    email: String!
    password: String!
}

input CommentInput{
    content: String,
    postId: String,
}

type Query {
    queryWithLogin: Message @AuthDirective
    simpleQuery: Message
}

type Mutation {
    signup(data: UserImput): Auth
    login(email: String!, password: String!): Auth
    createPost(postData: PostInput): Message @AuthDirective
    createComment(commentData: CommentInput): Message @AuthDirective
}
`;

module.export=typeDefs;