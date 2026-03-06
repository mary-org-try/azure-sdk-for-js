// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface CommunityTrainingsListBySubscriptionOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CommunityTrainingsListByResourceGroupOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CommunityTrainingsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CommunityTrainingsUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CommunityTrainingsCreateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CommunityTrainingsGetOptionalParams extends OperationOptions {}
