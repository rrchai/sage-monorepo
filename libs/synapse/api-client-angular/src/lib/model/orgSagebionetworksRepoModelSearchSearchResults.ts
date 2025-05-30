/**
 * Synapse REST API
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { OrgSagebionetworksRepoModelSearchHit } from './orgSagebionetworksRepoModelSearchHit';
import { OrgSagebionetworksRepoModelSearchFacet } from './orgSagebionetworksRepoModelSearchFacet';

/**
 * JSON schema for a the result of a search.
 */
export interface OrgSagebionetworksRepoModelSearchSearchResults {
  found?: number;
  start?: number;
  matchExpression?: string;
  /**
   * The hits in this page of search results
   */
  hits?: Array<OrgSagebionetworksRepoModelSearchHit>;
  /**
   * The facets found in all results of this search.
   */
  facets?: Array<OrgSagebionetworksRepoModelSearchFacet>;
}
