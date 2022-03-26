import Link from 'next/link'
import * as S from './styles'

export type CardCompanyProps = {
  nameCompany: string
  slug: string
  description: string
  category?: string
  img: string
}

const CardCompany = ({
  nameCompany,
  slug,
  description,
  category,
  img
}: CardCompanyProps) => (
  <S.Card>
    <Link href={`company/${slug}`} passHref>
      <S.Image src={img}></S.Image>
    </Link>
    <S.TextWrapper>
      <S.NameCompany>{nameCompany}</S.NameCompany>
      <S.Description
        dangerouslySetInnerHTML={{ __html: description }}
      ></S.Description>
    </S.TextWrapper>
    {!!category && <S.Category>{category}</S.Category>}
  </S.Card>
)

export default CardCompany
