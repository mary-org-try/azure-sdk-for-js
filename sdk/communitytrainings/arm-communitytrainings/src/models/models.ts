// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _operationListResultDeserializer(item: any): _OperationListResult {
  return {
    value: operationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function operationArrayDeserializer(result: Array<Operation>): any[] {
  return result.map((item) => {
    return operationDeserializer(item);
  });
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  readonly actionType?: ActionType;
}

export function operationDeserializer(item: any): Operation {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"] ? item["display"] : operationDisplayDeserializer(item["display"]),
    origin: item["origin"],
    actionType: item["actionType"],
  };
}

/** Localized display information for an operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  readonly provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  readonly resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  readonly operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  readonly description?: string;
}

export function operationDisplayDeserializer(item: any): OperationDisplay {
  return {
    provider: item["provider"],
    resource: item["resource"],
    operation: item["operation"],
    description: item["description"],
  };
}

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export enum KnownOrigin {
  /** Indicates the operation is initiated by a user. */
  User = "user",
  /** Indicates the operation is initiated by a system. */
  System = "system",
  /** Indicates the operation is initiated by a user or system. */
  UserSystem = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user**: Indicates the operation is initiated by a user. \
 * **system**: Indicates the operation is initiated by a system. \
 * **user,system**: Indicates the operation is initiated by a user or system.
 */
export type Origin = string;

/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export enum KnownActionType {
  /** Actions are for internal-only APIs. */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**: Actions are for internal-only APIs.
 */
export type ActionType = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"] ? item["error"] : errorDetailDeserializer(item["error"]),
  };
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorDetail[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
  prop1?: ErrorDetail_1;
  prop2?: ErrorDetailAutoGenerated;
}

export interface ErrorDetail_1 {
  prop?: string;
}

export interface ErrorDetailAutoGenerated {
  prop?: string;
}

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"] ? item["details"] : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(result: Array<ErrorDetail>): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(result: Array<ErrorAdditionalInfo>): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: any;
}

export function errorAdditionalInfoDeserializer(item: any): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: item["info"],
  };
}

/** A CommunityProviderHub resource */
export interface CommunityTraining extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: CommunityTrainingProperties;
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
}

export function communityTrainingSerializer(item: CommunityTraining): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : communityTrainingPropertiesSerializer(item["properties"]),
    sku: !item["sku"] ? item["sku"] : skuSerializer(item["sku"]),
  };
}

export function communityTrainingDeserializer(item: any): CommunityTraining {
  return {
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : communityTrainingPropertiesDeserializer(item["properties"]),
    sku: !item["sku"] ? item["sku"] : skuDeserializer(item["sku"]),
  };
}

/** Details of the Community CommunityTraining. */
export interface CommunityTrainingProperties {
  /** The portal name (website name) of the Community Training instance */
  portalName: string;
  /** The email address of the portal admin */
  portalAdminEmailAddress: string;
  /** The organization name of the portal owner */
  portalOwnerOrganizationName: string;
  /** The email address of the portal owner. Will be used as the primary contact */
  portalOwnerEmailAddress: string;
  /** The identity configuration of the Community Training resource */
  identityConfiguration: IdentityConfigurationProperties;
  /** To indicate whether the Community Training instance has Zone Redundancy enabled */
  zoneRedundancyEnabled: boolean;
  /** To indicate whether the Community Training instance has Disaster Recovery enabled */
  disasterRecoveryEnabled: boolean;
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
}

export function communityTrainingPropertiesSerializer(item: CommunityTrainingProperties): any {
  return {
    portalName: item["portalName"],
    portalAdminEmailAddress: item["portalAdminEmailAddress"],
    portalOwnerOrganizationName: item["portalOwnerOrganizationName"],
    portalOwnerEmailAddress: item["portalOwnerEmailAddress"],
    identityConfiguration: identityConfigurationPropertiesSerializer(item["identityConfiguration"]),
    zoneRedundancyEnabled: item["zoneRedundancyEnabled"],
    disasterRecoveryEnabled: item["disasterRecoveryEnabled"],
  };
}

export function communityTrainingPropertiesDeserializer(item: any): CommunityTrainingProperties {
  return {
    portalName: item["portalName"],
    portalAdminEmailAddress: item["portalAdminEmailAddress"],
    portalOwnerOrganizationName: item["portalOwnerOrganizationName"],
    portalOwnerEmailAddress: item["portalOwnerEmailAddress"],
    identityConfiguration: identityConfigurationPropertiesDeserializer(
      item["identityConfiguration"],
    ),
    zoneRedundancyEnabled: item["zoneRedundancyEnabled"],
    disasterRecoveryEnabled: item["disasterRecoveryEnabled"],
    provisioningState: item["provisioningState"],
  };
}

/** Details of the Community CommunityTraining Identity Configuration */
export interface IdentityConfigurationProperties {
  /** The identity type of the Community Training Resource */
  identityType: string;
  /** To indicate whether the Community Training Resource has Teams enabled */
  teamsEnabled?: boolean;
  /** The tenantId of the selected identity provider for the Community Training Resource */
  tenantId: string;
  /** The domain name of the selected identity provider for the Community Training Resource */
  domainName: string;
  /** The clientId of the application registered in the selected identity provider for the Community Training Resource */
  clientId: string;
  /** The client secret of the application registered in the selected identity provider for the Community Training Resource */
  clientSecret: string;
  /** The name of the authentication policy registered in ADB2C for the Community Training Resource */
  b2CAuthenticationPolicy?: string;
  /** The name of the password reset policy registered in ADB2C for the Community Training Resource */
  b2CPasswordResetPolicy?: string;
  /** The custom login parameters for the Community Training Resource */
  customLoginParameters?: string;
}

export function identityConfigurationPropertiesSerializer(
  item: IdentityConfigurationProperties,
): any {
  return {
    identityType: item["identityType"],
    teamsEnabled: item["teamsEnabled"],
    tenantId: item["tenantId"],
    domainName: item["domainName"],
    clientId: item["clientId"],
    clientSecret: item["clientSecret"],
    b2cAuthenticationPolicy: item["b2CAuthenticationPolicy"],
    b2cPasswordResetPolicy: item["b2CPasswordResetPolicy"],
    customLoginParameters: item["customLoginParameters"],
  };
}

export function identityConfigurationPropertiesDeserializer(
  item: any,
): IdentityConfigurationProperties {
  return {
    identityType: item["identityType"],
    teamsEnabled: item["teamsEnabled"],
    tenantId: item["tenantId"],
    domainName: item["domainName"],
    clientId: item["clientId"],
    clientSecret: item["clientSecret"],
    b2CAuthenticationPolicy: item["b2cAuthenticationPolicy"],
    b2CPasswordResetPolicy: item["b2cPasswordResetPolicy"],
    customLoginParameters: item["customLoginParameters"],
  };
}

/** The status of the current operation. */
export enum KnownProvisioningState {
  /** Resource has been created. */
  Succeeded = "Succeeded",
  /** Resource creation failed. */
  Failed = "Failed",
  /** Resource creation was canceled. */
  Canceled = "Canceled",
  /** Initial provisioning in progress */
  Provisioning = "Provisioning",
  /** Update in progress */
  Updating = "Updating",
  /** Deletion in progress */
  Deleting = "Deleting",
  /** Change accepted for processing */
  Accepted = "Accepted",
}

/**
 * The status of the current operation. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource has been created. \
 * **Failed**: Resource creation failed. \
 * **Canceled**: Resource creation was canceled. \
 * **Provisioning**: Initial provisioning in progress \
 * **Updating**: Update in progress \
 * **Deleting**: Deletion in progress \
 * **Accepted**: Change accepted for processing
 */
export type ProvisioningState = string;

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

export function skuSerializer(item: Sku): any {
  return {
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    capacity: item["capacity"],
  };
}

export function skuDeserializer(item: any): Sku {
  return {
    name: item["name"],
    tier: item["tier"],
    size: item["size"],
    family: item["family"],
    capacity: item["capacity"],
  };
}

/** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(item: TrackedResource): any {
  return { tags: item["tags"], location: item["location"] };
}

export function trackedResourceDeserializer(item: any): TrackedResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    tags: !item["tags"]
      ? item["tags"]
      : Object.fromEntries(Object.entries(item["tags"]).map(([k, p]: [string, any]) => [k, p])),
    location: item["location"],
  };
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
}

export function resourceSerializer(item: Resource): any {
  return item;
}

export function resourceDeserializer(item: any): Resource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

export function systemDataDeserializer(item: any): SystemData {
  return {
    createdBy: item["createdBy"],
    createdByType: item["createdByType"],
    createdAt: !item["createdAt"] ? item["createdAt"] : new Date(item["createdAt"]),
    lastModifiedBy: item["lastModifiedBy"],
    lastModifiedByType: item["lastModifiedByType"],
    lastModifiedAt: !item["lastModifiedAt"]
      ? item["lastModifiedAt"]
      : new Date(item["lastModifiedAt"]),
  };
}

/** The kind of entity that created the resource. */
export enum KnownCreatedByType {
  /** The entity was created by a user. */
  User = "User",
  /** The entity was created by an application. */
  Application = "Application",
  /** The entity was created by a managed identity. */
  ManagedIdentity = "ManagedIdentity",
  /** The entity was created by a key. */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User**: The entity was created by a user. \
 * **Application**: The entity was created by an application. \
 * **ManagedIdentity**: The entity was created by a managed identity. \
 * **Key**: The entity was created by a key.
 */
export type CreatedByType = string;

/** The type used for update operations of the CommunityTraining. */
export interface CommunityTrainingUpdate {
  /** The SKU (Stock Keeping Unit) assigned to this resource. */
  sku?: Sku;
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The resource-specific properties for this resource. */
  properties?: CommunityTrainingUpdateProperties;
}

export function communityTrainingUpdateSerializer(item: CommunityTrainingUpdate): any {
  return {
    sku: !item["sku"] ? item["sku"] : skuSerializer(item["sku"]),
    tags: item["tags"],
    properties: !item["properties"]
      ? item["properties"]
      : communityTrainingUpdatePropertiesSerializer(item["properties"]),
  };
}

/** The updatable properties of the CommunityTraining. */
export interface CommunityTrainingUpdateProperties {
  /** The identity configuration of the Community Training resource */
  identityConfiguration?: IdentityConfigurationProperties;
}

export function communityTrainingUpdatePropertiesSerializer(
  item: CommunityTrainingUpdateProperties,
): any {
  return {
    identityConfiguration: !item["identityConfiguration"]
      ? item["identityConfiguration"]
      : identityConfigurationPropertiesSerializer(item["identityConfiguration"]),
  };
}

/** The response of a CommunityTraining list operation. */
export interface _CommunityTrainingListResult {
  /** The CommunityTraining items on this page */
  value: CommunityTraining[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _communityTrainingListResultDeserializer(item: any): _CommunityTrainingListResult {
  return {
    value: communityTrainingArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function communityTrainingArraySerializer(result: Array<CommunityTraining>): any[] {
  return result.map((item) => {
    return communityTrainingSerializer(item);
  });
}

export function communityTrainingArrayDeserializer(result: Array<CommunityTraining>): any[] {
  return result.map((item) => {
    return communityTrainingDeserializer(item);
  });
}

/** Api versions */
export enum KnownVersions {
  /** 2023-11-01 api version */
  _20231101 = "2023-11-01",
}
