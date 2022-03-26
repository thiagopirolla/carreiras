import { gql } from '@apollo/client'

export const QUERY_CATEGORY = gql`
  query queryCategories {
    categories {
      data {
        attributes {
          categoria
          slug
        }
      }
    }
  }
`
