const typeDefs = `
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  input UserInput {
    email: String
    phone: String
    password: String
  }

  input PostInput {
    userId: String
    body: String
    title: String
  }

  input UserPostSubscribeInput {
    userId: String
    title: String
  }

  # This "User" type defines the queryable fields for every user in our data source.
  type User {
    email: String
    phone: String
    password: String
  }

  type Post {
    userId: String
    body: String
    title: String
    id: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "users" query returns an array of zero or more Users (defined above).
  type Query {
    users: [User]
    getUser(id: ID!): User
    posts: [Post]
    getPost(id: ID!): [Post]
    getPosts(id: ID!): [Post]
  }

  type Mutation {
    createUser(input: UserInput): User 
    createPost(input: PostInput!): Post 
    editPost(id: ID!, input: PostInput!): Post 
    deletePost(id: ID!): Post
  }

  subscription UserPostSubscription($input: UserPostSubscribeInput) {
    userPostSubscribe(input: $input) {
      post {
        body
        title
      }
    }
  }
`;

module.exports = typeDefs;
