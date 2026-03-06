// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { CommunityClient } = require("@azure/arm-communitytrainings");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to update a CommunityTraining
 *
 * @summary update a CommunityTraining
 * x-ms-original-file: 2023-11-01/CommunityTrainings_Update.json
 */
async function updateCommunityTrainings() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new CommunityClient(credential, subscriptionId);
  const result = await client.communityTrainings.update("rgCommunityTraining", "ctApplication", {
    sku: { name: "Commercial", tier: "Standard" },
    tags: {},
    properties: {
      identityConfiguration: {
        identityType: "ADB2C",
        teamsEnabled: false,
        tenantId: "c1ffbb60-88cf-4b83-b54f-c47ae6220c19",
        domainName: "cttenant",
        clientId: "8c92390f-2f30-493d-bd13-d3c3eba3709d",
        clientSecret: "idenityConfigurationClientSecret",
        b2CAuthenticationPolicy: "B2C_1_signup_signin",
        b2CPasswordResetPolicy: "B2C_1_pwd_reset",
        customLoginParameters: "custom_hint",
      },
    },
  });
  console.log(result);
}

async function main() {
  await updateCommunityTrainings();
}

main().catch(console.error);
