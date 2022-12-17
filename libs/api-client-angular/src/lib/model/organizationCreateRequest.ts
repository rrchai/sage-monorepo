/**
 * Challenge Registry API
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
 * The information required to create an org account
 */
export interface OrganizationCreateRequest { 
    /**
     * An email address.
     */
    email?: string;
    login: string;
    name?: string;
    avatarUrl?: string | null;
    websiteUrl?: string;
    description?: string;
}
