// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { CommunityClient } from "@azure/arm-communitytrainings";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a CommunityTraining
 *
 * @summary create a CommunityTraining
 * x-ms-original-file: 2023-11-01/CommunityTrainings_Create.json
 */
async function createCommunityTrainings(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new CommunityClient(credential, subscriptionId);
  const result = await client.communityTrainings.create("rgCommunityTaining", "ctApplication", {
    properties: {
      portalName: "ctwebsite",
      portalAdminEmailAddress: "ctadmin@ct.com",
      portalOwnerOrganizationName: "CT Portal Owner Organization",
      portalOwnerEmailAddress: "ctcontact@ct.com",
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
      zoneRedundancyEnabled: true,
      disasterRecoveryEnabled: true,
    },
    sku: { name: "Commercial", tier: "Standard" },
    location: "southeastasia",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await createCommunityTrainings();
}

main().catch(console.error);
