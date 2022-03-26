import Main from 'components/Main'
import {
  queryCardCompanies,
  queryCardCompaniesVariables
} from 'graphql/generated/queryCardCompanies'
import { QUERY_CARD_COMPANIES } from 'graphql/queries/company'
import { initializeApollo } from 'utils/apollo'

export type HomeProps = {
  companiesCard: {
    titleCompany: string
    slugCompany: string
    descriptionCompany: string
    imageCompany: string
  }[]
}

export default function Home({ companiesCard }: HomeProps) {
  console.log(companiesCard)
  return <Main data={companiesCard} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<
    queryCardCompanies,
    queryCardCompaniesVariables
  >({
    query: QUERY_CARD_COMPANIES,
    variables: { pagination: { pageSize: 9 } }
  })
  return {
    props: {
      revalidate: 120,
      companiesCard: data.paginaDeCarreiras?.data.map((company) => ({
        titleCompany: company.attributes?.nome_empresa,
        slugCompany: company.attributes?.slug_nome_empresa,
        descriptionCompany: company.attributes?.descricao_empresa,
        imageCompany: company.attributes?.capa_empresa.data?.attributes?.url
      })),
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
