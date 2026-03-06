// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { CommunityClient } = require("@azure/arm-communitytrainings");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list CommunityTraining resources by resource group
 *
 * @summary list CommunityTraining resources by resource group
 * x-ms-original-file: 2023-11-01/CommunityTrainings_ListByResourceGroup.json
 */
async function listByResourceGroupCommunityTrainings() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new CommunityClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.communityTrainings.listByResourceGroup("rgCommunityTraining")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listByResourceGroupCommunityTrainings();
}

main().catch(console.error);
