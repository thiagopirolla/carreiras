/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./globalTypes";

// ====================================================
// GraphQL query operation: queryCompanies
// ====================================================

export interface queryCompanies_paginaDeCarreiras_data_attributes {
  __typename: "PaginaDeCarreira";
  nome_empresa: string;
  slug_nome_empresa: string;
  depoimento_empresa: string;
  descricao_empresa: string;
  data_abertura_empresa: any;
}

export interface queryCompanies_paginaDeCarreiras_data {
  __typename: "PaginaDeCarreiraEntity";
  attributes: queryCompanies_paginaDeCarreiras_data_attributes | null;
}

export interface queryCompanies_paginaDeCarreiras {
  __typename: "PaginaDeCarreiraEntityResponseCollection";
  data: queryCompanies_paginaDeCarreiras_data[];
}

export interface queryCompanies {
  paginaDeCarreiras: queryCompanies_paginaDeCarreiras | null;
}

export interface queryCompaniesVariables {
  pagination?: PaginationArg | null;
}
