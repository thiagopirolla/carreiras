import { gql } from '@apollo/client'

export const QUERY_COMPANIES = gql`
  query queryCompanies($pagination: PaginationArg) {
    paginaDeCarreiras(pagination: $pagination) {
      data {
        attributes {
          nome_empresa
          slug_nome_empresa
          depoimento_empresa
          descricao_empresa
          data_abertura_empresa
        }
      }
    }
  }
`

export const QUERY_CARD_COMPANIES = gql`
  query queryCardCompanies($pagination: PaginationArg) {
    paginaDeCarreiras(pagination: $pagination) {
      data {
        attributes {
          nome_empresa
          slug_nome_empresa
          descricao_empresa
          capa_empresa {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`

export const QUERY_COMPANY_BY_SLUG = gql`
  query QueryCompanyBySlug($slug: StringFilterInput!) {
    paginaDeCarreiras(filters: { slug_nome_empresa: $slug }) {
      data {
        attributes {
          nome_empresa
          slug_nome_empresa
          depoimento_empresa
          data_abertura_empresa
          avaliacao_empresa
          avatar_empresa {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          capa_empresa {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          galeria_empresa {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`
