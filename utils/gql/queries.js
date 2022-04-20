const { request, gql } = require("graphql-request");

const queryProducts = gql`
  query Product($nextPage: String) {
    products(first: 200, after: $nextPage) {
      nodes {
        id
        name
        ... on SimpleProduct {
          regularPrice(format: RAW)
          sku
          weight
        }
        ... on VariableProduct {
          regularPrice(format: RAW)
          sku
          weight
          variations {
            nodes {
              regularPrice(format: RAW)
              sku
              weight
            }
          }
        }
        databaseId
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

module.exports = { queryProducts };
