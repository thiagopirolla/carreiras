/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryCategories
// ====================================================

export interface queryCategories_categories_data_attributes {
  __typename: "Category";
  categoria: string;
  slug: string;
}

export interface queryCategories_categories_data {
  __typename: "CategoryEntity";
  attributes: queryCategories_categories_data_attributes | null;
}

export interface queryCategories_categories {
  __typename: "CategoryEntityResponseCollection";
  data: queryCategories_categories_data[];
}

export interface queryCategories {
  categories: queryCategories_categories | null;
}
