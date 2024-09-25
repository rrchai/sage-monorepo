/**
 * Synapse REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * A virtual table is a type of table whose content is defined by a synapse SQL query. Its content is NOT persisted and any query on a virtual table will run the defined SQL statement. The defining SQL of the virtual table CANNOT contain JOIN clauses on multiple tables.
 */
export interface OrgSagebionetworksRepoModelTableVirtualTable {
  name?: string;
  description?: string;
  id?: string;
  etag?: string;
  createdOn?: string;
  modifiedOn?: string;
  createdBy?: string;
  modifiedBy?: string;
  parentId?: string;
  concreteType: OrgSagebionetworksRepoModelTableVirtualTable.ConcreteTypeEnum;
  versionNumber?: number;
  versionLabel?: string;
  versionComment?: string;
  isLatestVersion?: boolean;
  /**
   * The columns of a virtual table are dynamic based on the select statement of the definingSQL. This list of columnIds is for read only, and will be ignored for create and update operations.
   */
  columnIds?: Array<string>;
  isSearchEnabled?: boolean;
  definingSQL?: string;
}
export namespace OrgSagebionetworksRepoModelTableVirtualTable {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.table.VirtualTable';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableVirtualTable:
      'org.sagebionetworks.repo.model.table.VirtualTable' as ConcreteTypeEnum,
  };
}