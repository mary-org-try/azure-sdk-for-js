// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { CommunityContext, CommunityClientOptionalParams } from "./api/index.js";
import { createCommunity } from "./api/index.js";
import type { CommunityTrainingsOperations } from "./classic/communityTrainings/index.js";
import { _getCommunityTrainingsOperations } from "./classic/communityTrainings/index.js";
import type { OperationsOperations } from "./classic/operations/index.js";
import { _getOperationsOperations } from "./classic/operations/index.js";
import type { TokenCredential } from "@azure/core-auth";
import type { Pipeline } from "@azure/core-rest-pipeline";

export type { CommunityClientOptionalParams } from "./api/communityContext.js";

export class CommunityClient {
  private _client: CommunityContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: CommunityClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createCommunity(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.communityTrainings = _getCommunityTrainingsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for communityTrainings */
  public readonly communityTrainings: CommunityTrainingsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
