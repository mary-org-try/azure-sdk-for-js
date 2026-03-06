// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApi } from "../../src/index.js";
import { createRecorder } from "./util/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { Recorder, env } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("list data products by resource group", () => {
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

  it("should list data products by resource group for dataProductsListByResourceGroupMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen", async function () {
    const resArray = new Array();
    for await (const item of client.dataProducts.listByResourceGroup("aoiresourceGroupName")) {
      resArray.push(item);
    }
    assert.ok(resArray);
    assert.strictEqual(resArray.length, 1);
    assert.strictEqual(
      resArray[0].id,
      "/subscriptions/00000000-0000-0000-0000-00000000000/resourceGroups/aoiresourceGroupName/providers/Microsoft.NetworkAnalytics/DataProducts/dataproduct01",
    );
    assert.strictEqual(resArray[0].location, "eastus");
  });
});
