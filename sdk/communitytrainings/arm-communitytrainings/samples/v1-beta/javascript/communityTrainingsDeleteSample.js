// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { CommunityClient } = require("@azure/arm-communitytrainings");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to delete a CommunityTraining
 *
 * @summary delete a CommunityTraining
 * x-ms-original-file: 2023-11-01/CommunityTrainings_Delete.json
 */
async function deleteCommunityTrainings() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new CommunityClient(credential, subscriptionId);
  await client.communityTrainings.delete("rgCommunityTraining", "ctApplication");
}

async function main() {
  await deleteCommunityTrainings();
}

main().catch(console.error);
