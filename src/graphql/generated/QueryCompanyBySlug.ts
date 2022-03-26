/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { StringFilterInput, ENUM_PAGINADECARREIRA_AVALIACAO_EMPRESA } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryCompanyBySlug
// ====================================================

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_avatar_empresa_data_attributes {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_avatar_empresa_data {
  __typename: "UploadFileEntity";
  attributes: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_avatar_empresa_data_attributes | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_avatar_empresa {
  __typename: "UploadFileEntityResponse";
  data: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_avatar_empresa_data | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_capa_empresa_data_attributes {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_capa_empresa_data {
  __typename: "UploadFileEntity";
  attributes: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_capa_empresa_data_attributes | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_capa_empresa {
  __typename: "UploadFileEntityResponse";
  data: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_capa_empresa_data | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_galeria_empresa_data_attributes {
  __typename: "UploadFile";
  alternativeText: string | null;
  url: string;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_galeria_empresa_data {
  __typename: "UploadFileEntity";
  attributes: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_galeria_empresa_data_attributes | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes_galeria_empresa {
  __typename: "UploadFileRelationResponseCollection";
  data: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_galeria_empresa_data[];
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data_attributes {
  __typename: "PaginaDeCarreira";
  nome_empresa: string;
  slug_nome_empresa: string;
  depoimento_empresa: string;
  data_abertura_empresa: any;
  avaliacao_empresa: ENUM_PAGINADECARREIRA_AVALIACAO_EMPRESA | null;
  avatar_empresa: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_avatar_empresa | null;
  capa_empresa: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_capa_empresa;
  galeria_empresa: QueryCompanyBySlug_paginaDeCarreiras_data_attributes_galeria_empresa | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras_data {
  __typename: "PaginaDeCarreiraEntity";
  attributes: QueryCompanyBySlug_paginaDeCarreiras_data_attributes | null;
}

export interface QueryCompanyBySlug_paginaDeCarreiras {
  __typename: "PaginaDeCarreiraEntityResponseCollection";
  data: QueryCompanyBySlug_paginaDeCarreiras_data[];
}

export interface QueryCompanyBySlug {
  paginaDeCarreiras: QueryCompanyBySlug_paginaDeCarreiras | null;
}

export interface QueryCompanyBySlugVariables {
  slug: StringFilterInput;
}
