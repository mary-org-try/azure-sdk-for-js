// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { CommunityContext } from "../../api/communityContext.js";
import {
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  create,
  get,
} from "../../api/communityTrainings/operations.js";
import type {
  CommunityTrainingsListBySubscriptionOptionalParams,
  CommunityTrainingsListByResourceGroupOptionalParams,
  CommunityTrainingsDeleteOptionalParams,
  CommunityTrainingsUpdateOptionalParams,
  CommunityTrainingsCreateOptionalParams,
  CommunityTrainingsGetOptionalParams,
} from "../../api/communityTrainings/options.js";
import type { CommunityTraining, CommunityTrainingUpdate } from "../../models/models.js";
import type { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import type { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a CommunityTrainings operations. */
export interface CommunityTrainingsOperations {
  /** List CommunityTraining resources by subscription ID */
  listBySubscription: (
    options?: CommunityTrainingsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<CommunityTraining>;
  /** List CommunityTraining resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: CommunityTrainingsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<CommunityTraining>;
  /** Delete a CommunityTraining */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    communityTrainingName: string,
    options?: CommunityTrainingsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a CommunityTraining */
  update: (
    resourceGroupName: string,
    communityTrainingName: string,
    properties: CommunityTrainingUpdate,
    options?: CommunityTrainingsUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a CommunityTraining */
  create: (
    resourceGroupName: string,
    communityTrainingName: string,
    resource: CommunityTraining,
    options?: CommunityTrainingsCreateOptionalParams,
  ) => PollerLike<OperationState<CommunityTraining>, CommunityTraining>;
  /** Get a CommunityTraining */
  get: (
    resourceGroupName: string,
    communityTrainingName: string,
    options?: CommunityTrainingsGetOptionalParams,
  ) => Promise<CommunityTraining>;
}

function _getCommunityTrainings(context: CommunityContext) {
  return {
    listBySubscription: (options?: CommunityTrainingsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: CommunityTrainingsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      communityTrainingName: string,
      options?: CommunityTrainingsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, communityTrainingName, options),
    update: (
      resourceGroupName: string,
      communityTrainingName: string,
      properties: CommunityTrainingUpdate,
      options?: CommunityTrainingsUpdateOptionalParams,
    ) => update(context, resourceGroupName, communityTrainingName, properties, options),
    create: (
      resourceGroupName: string,
      communityTrainingName: string,
      resource: CommunityTraining,
      options?: CommunityTrainingsCreateOptionalParams,
    ) => create(context, resourceGroupName, communityTrainingName, resource, options),
    get: (
      resourceGroupName: string,
      communityTrainingName: string,
      options?: CommunityTrainingsGetOptionalParams,
    ) => get(context, resourceGroupName, communityTrainingName, options),
  };
}

export function _getCommunityTrainingsOperations(
  context: CommunityContext,
): CommunityTrainingsOperations {
  return {
    ..._getCommunityTrainings(context),
  };
}
