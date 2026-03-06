// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApi } from "../../src/index.js";
import { createRecorder } from "./util/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { Recorder, env } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("generate sas token for storage account", () => {
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

  it("should generate sas token for storage account for dataProductsGenerateStorageAccountSasTokenMaximumSetGen", async function () {
    const result = await client.dataProducts.generateStorageAccountSasToken(
      "aoiresourceGroupName",
      "dataproduct01",
      {
        startTimeStamp: new Date("2023-08-24T05:34:58.151Z"),
        expiryTimeStamp: new Date("2023-08-24T05:34:58.151Z"),
        ipAddress: "1.1.1.1",
      },
    );
    assert.ok(result);
    assert.strictEqual(result.storageAccountSasToken, "storageAccountSasToken");
  });
});
