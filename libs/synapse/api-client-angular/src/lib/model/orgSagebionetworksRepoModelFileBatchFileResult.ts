/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelFileFileResult } from './orgSagebionetworksRepoModelFileFileResult';

/**
 * Batch of results for file pre-signed-URLs and/or FileHandles requests.
 */
export interface OrgSagebionetworksRepoModelFileBatchFileResult {
  /**
   * Defines the files to get.
   */
  requestedFiles?: Array<OrgSagebionetworksRepoModelFileFileResult>;
}
