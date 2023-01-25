export const schema = gql`
  type Hyperbeam {
    session_id: String!
    embed_url: String!
    admin_token: String!
  }

  type Query {
    getHyperbeam: Hyperbeam! @skipAuth
  }
`
