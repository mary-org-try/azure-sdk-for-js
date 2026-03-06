// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApi } from "../../src/index.js";
import { createRecorder } from "./util/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { Recorder, env } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("update data product resource", () => {
  let recorder: Recorder;
  let client: NetworkAnalyticsApi;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const credential = createTestCredential();
    const subscriptionId = env.SUBSCRIPTION_ID || "<SUBSCRIPTION_ID>";
    const clientOptions = recorder.configureClientOptions({});
    client = new NetworkAnalyticsApi(credential, subscriptionId, clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should update data product resource for dataProductsUpdateMaximumSetGen", async function () {
    const result = await client.dataProducts.update("aoiresourceGroupName", "dataproduct01", {
      identity: {
        type: "UserAssigned",
        userAssignedIdentities: {
          "/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
            {},
        },
      },
      tags: { userSpecifiedKeyName: "userSpecifiedKeyValue" },
      properties: {
        owners: ["abc@micros.com", "def@micros.com"],
        purviewAccount: "testpurview",
        purviewCollection: "134567890",
        privateLinksEnabled: "Disabled",
        currentMinorVersion: "1.0.1",
      },
    });
    assert.ok(result);
    assert.strictEqual(result.resourceGuid, "00000000-0000-0000-0000-000000000000");
    assert.strictEqual(result.provisioningState, "Succeeded");
    assert.strictEqual(result.publisher, "Microsoft");
    assert.strictEqual(result.product, "MCC");
    assert.strictEqual(result.majorVersion, "1.0.0");
    assert.ok(Array.isArray(result.owners));
    assert.strictEqual(result.owners.length, 2);
    assert.strictEqual(result.redundancy, "Disabled");
    assert.strictEqual(result.purviewAccount, "testpurview");
    assert.strictEqual(result.purviewCollection, "134567890");
    assert.strictEqual(result.privateLinksEnabled, "Disabled");
    assert.strictEqual(result.publicNetworkAccess, "Enabled");
    assert.strictEqual(result.customerManagedKeyEncryptionEnabled, "Enabled");
    assert.ok(Array.isArray(result.availableMinorVersions));
    assert.strictEqual(result.availableMinorVersions.length, 2);
    assert.strictEqual(result.currentMinorVersion, "1.0.1");
    assert.strictEqual(result.documentation, "https://learn.microsoft.com/");
    assert.strictEqual(result.keyVaultUrl, "https://myKeyVault.vault.azure.net");
    assert.strictEqual(result.identity?.principalId, "00000000-0000-0000-0000-000000000000");
    assert.strictEqual(result.identity?.tenantId, "00000000-0000-0000-0000-000000000000");
    assert.strictEqual(result.identity?.type, "IdentityType");
    assert.strictEqual(
      result.id,
      "/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/aoiresourceGroupName/providers/Microsoft.NetworkAnalytics/DataProducts/dataproduct01",
    );
    assert.strictEqual(result.name, "dataproduct01");
    assert.strictEqual(result.type, "Microsoft.NetworkAnalytics/DataProducts");
    assert.strictEqual(result.location, "eastus");
    assert.strictEqual(result.tags?.userSpecifiedKeyName, "userSpecifiedKeyValue");
    assert.strictEqual(result.systemData?.createdBy, "abc@micros.com");
    assert.strictEqual(result.systemData?.createdByType, "User");
    assert.strictEqual(result.systemData?.createdAt, new Date("2023-09-04T08:26:27.1506343Z"));
    assert.strictEqual(result.systemData?.lastModifiedBy, "abc@micros.com");
    assert.strictEqual(result.systemData?.lastModifiedByType, "User");
    assert.strictEqual(result.systemData?.lastModifiedAt, new Date("2023-09-04T08:26:27.1506343Z"));
  });
});
