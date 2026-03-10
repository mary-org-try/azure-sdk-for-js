// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CommunityClient } from "@azure/arm-communitytrainings";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a CommunityTraining
 *
 * @summary get a CommunityTraining
 * x-ms-original-file: 2023-11-01/CommunityTrainings_Get.json
 */
async function getCommunityTrainings(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new CommunityClient(credential, subscriptionId);
  const result = await client.communityTrainings.get("rgCommunityTraining", "ctApplication");
  console.log(result);
}

async function main(): Promise<void> {
  await getCommunityTrainings();
}

main().catch(console.error);
