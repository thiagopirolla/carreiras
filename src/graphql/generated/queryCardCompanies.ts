/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationArg } from "./globalTypes";

// ====================================================
// GraphQL query operation: queryCardCompanies
// ====================================================

export interface queryCardCompanies_paginaDeCarreiras_data_attributes_capa_empresa_data_attributes {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface queryCardCompanies_paginaDeCarreiras_data_attributes_capa_empresa_data {
  __typename: "UploadFileEntity";
  attributes: queryCardCompanies_paginaDeCarreiras_data_attributes_capa_empresa_data_attributes | null;
}

export interface queryCardCompanies_paginaDeCarreiras_data_attributes_capa_empresa {
  __typename: "UploadFileEntityResponse";
  data: queryCardCompanies_paginaDeCarreiras_data_attributes_capa_empresa_data | null;
}

export interface queryCardCompanies_paginaDeCarreiras_data_attributes {
  __typename: "PaginaDeCarreira";
  nome_empresa: string;
  slug_nome_empresa: string;
  descricao_empresa: string;
  capa_empresa: queryCardCompanies_paginaDeCarreiras_data_attributes_capa_empresa;
}

export interface queryCardCompanies_paginaDeCarreiras_data {
  __typename: "PaginaDeCarreiraEntity";
  attributes: queryCardCompanies_paginaDeCarreiras_data_attributes | null;
}

export interface queryCardCompanies_paginaDeCarreiras {
  __typename: "PaginaDeCarreiraEntityResponseCollection";
  data: queryCardCompanies_paginaDeCarreiras_data[];
}

export interface queryCardCompanies {
  paginaDeCarreiras: queryCardCompanies_paginaDeCarreiras | null;
}

export interface queryCardCompaniesVariables {
  pagination?: PaginationArg | null;
}
