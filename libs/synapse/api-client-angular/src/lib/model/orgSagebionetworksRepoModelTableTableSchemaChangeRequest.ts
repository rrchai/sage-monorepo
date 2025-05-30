/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelTableColumnChange } from './orgSagebionetworksRepoModelTableColumnChange';

/**
 * An AsynchronousRequestBody to change the schema of a table.
 */
export interface OrgSagebionetworksRepoModelTableTableSchemaChangeRequest {
  concreteType: OrgSagebionetworksRepoModelTableTableSchemaChangeRequest.ConcreteTypeEnum;
  entityId?: string;
  /**
   * List of changes that describes column additions, deletions, and updates
   */
  changes?: Array<OrgSagebionetworksRepoModelTableColumnChange>;
  /**
   * Optional: Used to set the order of columns for this table. If this list is provided it must include the IDs of each column that will be in the schema after the changes of this request are applied.
   */
  orderedColumnIds?: Array<string>;
}
export namespace OrgSagebionetworksRepoModelTableTableSchemaChangeRequest {
  export type ConcreteTypeEnum = 'org.sagebionetworks.repo.model.table.TableSchemaChangeRequest';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelTableTableSchemaChangeRequest:
      'org.sagebionetworks.repo.model.table.TableSchemaChangeRequest' as ConcreteTypeEnum,
  };
}
