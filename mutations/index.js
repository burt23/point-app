import { gql, useMutation } from "@apollo/client";

const ADD_USER = gql`
  mutation AddUser($type: String!) {
    addUser(type: $type) {
      email
      phone
      password
    }
  }
`;

const ADD_POST = gql`
  mutation AddPost($type: String!) {
    addPost(type: $type) {
      userId
      title
      body
    }
  }
`;

module.exports = {
  ADD_POST,
  ADD_USER,
};
