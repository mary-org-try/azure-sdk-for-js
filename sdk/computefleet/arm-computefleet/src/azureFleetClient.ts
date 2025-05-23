// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { getFleetsOperations, FleetsOperations } from "./classic/fleets/index.js";
import {
  createAzureFleet,
  AzureFleetContext,
  AzureFleetClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { AzureFleetClientOptionalParams } from "./api/azureFleetContext.js";

export class AzureFleetClient {
  private _client: AzureFleetContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: AzureFleetClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createAzureFleet(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.fleets = getFleetsOperations(this._client, subscriptionId);
  }

  /** The operation groups for Fleets */
  public readonly fleets: FleetsOperations;
}
