/**
 * Agora REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * RnaDifferentialExpression
 */
export interface RnaDifferentialExpression {
  _id: string;
  ensembl_gene_id: string;
  hgnc_symbol: string;
  logfc: number;
  fc: number;
  ci_l: number;
  ci_r: number;
  adj_p_val: number;
  tissue: string;
  study: string;
  model: string;
}