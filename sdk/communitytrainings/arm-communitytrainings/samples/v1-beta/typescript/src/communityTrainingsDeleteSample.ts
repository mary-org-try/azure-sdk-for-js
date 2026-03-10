// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CommunityClient } from "@azure/arm-communitytrainings";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a CommunityTraining
 *
 * @summary delete a CommunityTraining
 * x-ms-original-file: 2023-11-01/CommunityTrainings_Delete.json
 */
async function deleteCommunityTrainings(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new CommunityClient(credential, subscriptionId);
  await client.communityTrainings.delete("rgCommunityTraining", "ctApplication");
}

async function main(): Promise<void> {
  await deleteCommunityTrainings();
}

main().catch(console.error);
