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
 * This upload destination contains information to start an upload to an external Google Cloud Storage bucket connected with synapse. The destination is mapped from an <a href=\"${org.sagebionetworks.repo.model.project.ExternalGoogleCloudStorageLocationSetting}\">ExternalGoogleCloudStorageLocationSetting</a>.
 */
export interface OrgSagebionetworksRepoModelFileExternalGoogleCloudUploadDestination {
  concreteType: OrgSagebionetworksRepoModelFileExternalGoogleCloudUploadDestination.ConcreteTypeEnum;
  storageLocationId?: number;
  uploadType?: string;
  banner?: string;
  baseKey?: string;
  bucket?: string;
}
export namespace OrgSagebionetworksRepoModelFileExternalGoogleCloudUploadDestination {
  export type ConcreteTypeEnum =
    'org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination';
  export const ConcreteTypeEnum = {
    OrgSagebionetworksRepoModelFileExternalGoogleCloudUploadDestination:
      'org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination' as ConcreteTypeEnum,
  };
}
