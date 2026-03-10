// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CommunityClient } from "@azure/arm-communitytrainings";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list CommunityTraining resources by subscription ID
 *
 * @summary list CommunityTraining resources by subscription ID
 * x-ms-original-file: 2023-11-01/CommunityTrainings_ListBySubscription.json
 */
async function listBySubscriptionCommunityTrainings(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new CommunityClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.communityTrainings.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listBySubscriptionCommunityTrainings();
}

main().catch(console.error);
