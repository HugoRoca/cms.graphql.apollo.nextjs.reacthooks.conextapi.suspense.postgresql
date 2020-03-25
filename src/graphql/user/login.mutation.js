import { gpl } from 'apollo-boost'

export default gpl`
  mutation login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      token
    }
  }
`
