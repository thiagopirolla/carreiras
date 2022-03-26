import * as S from './styles'
import CardCompany from 'components/CardCompany'
export type MainProps = {
  data: AttributesProps[]
}

type AttributesProps = {
  titleCompany: string
  slugCompany: string
  descriptionCompany: string
  imageCompany: string
}

const Main = ({ data }: MainProps) => {
  return (
    <S.Wrapper>
      {data.map((item: AttributesProps) => (
        <CardCompany
          key={item.slugCompany}
          description={item.descriptionCompany}
          img={`http://localhost:1337${item.imageCompany}`}
          nameCompany={item.titleCompany}
          slug={item.slugCompany}
        />
      ))}
    </S.Wrapper>
  )
}

export default Main
