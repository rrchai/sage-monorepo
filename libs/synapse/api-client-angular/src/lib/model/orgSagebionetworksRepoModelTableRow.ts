/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Represents a single row of a TableEntity
 */
export interface OrgSagebionetworksRepoModelTableRow {
  rowId?: number;
  versionNumber?: number;
  etag?: string;
  /**
   * The values for each column of this row. To delete a row, set this to an empty list: []
   */
  values?: Array<string>;
}
