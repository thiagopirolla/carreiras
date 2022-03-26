import styled from 'styled-components'

export const Card = styled.main`
  padding: 16px 12px;
  border-radius: 16px;
  background-color: #a9b7c4;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const NameCompany = styled.h2`
  font-size: 18px;
  font-weight: 500;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: left;
  color: #000;
`

export const Image = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`

export const Category = styled.p`
  padding: 4px 12px;
  background-color: #e8efe6;
  color: #21620e;
  font-weight: 600;
  font-size: 12px;
  width: fit-content;
  border-radius: 4px;
`

export const Description = styled.div`
  font-size: 14px;
`
