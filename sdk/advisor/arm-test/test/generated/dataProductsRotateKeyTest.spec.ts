// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsApi } from "../../src/index.js";
import { createRecorder } from "./util/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { Recorder, env } from "@azure-tools/test-recorder";
import { beforeEach, afterEach, it, describe } from "vitest";

describe("initiate key rotation on Data Product", () => {
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

  it("should initiate key rotation on Data Product for dataProductsRotateKeyMaximumSetGen", async function () {
    await client.dataProducts.rotateKey("aoiresourceGroupName", "dataproduct01", {
      keyVaultUrl: "https://myKeyVault.vault.azure.net",
    });
    /* Test passes if no exception is thrown */
  });
});
