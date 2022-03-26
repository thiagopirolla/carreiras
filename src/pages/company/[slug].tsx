import {
  queryCompanies,
  queryCompaniesVariables
} from 'graphql/generated/queryCompanies'
import { QUERY_COMPANIES } from 'graphql/queries/company'
import { useRouter } from 'next/dist/client/router'
import { initializeApollo } from 'utils/apollo'

const apolloClient = initializeApollo()

export default function Index() {
  const router = useRouter()

  if (router.isFallback) return <h1>carregando...</h1>
  return <h1>oi</h1>
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<
    queryCompanies,
    queryCompaniesVariables
  >({
    query: QUERY_COMPANIES,
    variables: { pagination: { pageSize: 3 } }
  })

  const paths = data.paginaDeCarreiras?.data.map((item) => ({
    params: item.attributes?.slug_nome_empresa
  }))
  return { paths, fallback: true }
}
