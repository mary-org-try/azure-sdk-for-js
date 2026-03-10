# @azure/arm-communitytrainings client library samples for TypeScript (Beta)

These sample programs show how to use the TypeScript client libraries for @azure/arm-communitytrainings in some common scenarios.

| **File Name**                                                                                 | **Description**                                                                                                               |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| [communityTrainingsCreateSample.ts][communitytrainingscreatesample]                           | create a CommunityTraining x-ms-original-file: 2023-11-01/CommunityTrainings_Create.json                                      |
| [communityTrainingsDeleteSample.ts][communitytrainingsdeletesample]                           | delete a CommunityTraining x-ms-original-file: 2023-11-01/CommunityTrainings_Delete.json                                      |
| [communityTrainingsGetSample.ts][communitytrainingsgetsample]                                 | get a CommunityTraining x-ms-original-file: 2023-11-01/CommunityTrainings_Get.json                                            |
| [communityTrainingsListByResourceGroupSample.ts][communitytrainingslistbyresourcegroupsample] | list CommunityTraining resources by resource group x-ms-original-file: 2023-11-01/CommunityTrainings_ListByResourceGroup.json |
| [communityTrainingsListBySubscriptionSample.ts][communitytrainingslistbysubscriptionsample]   | list CommunityTraining resources by subscription ID x-ms-original-file: 2023-11-01/CommunityTrainings_ListBySubscription.json |
| [communityTrainingsUpdateSample.ts][communitytrainingsupdatesample]                           | update a CommunityTraining x-ms-original-file: 2023-11-01/CommunityTrainings_Update.json                                      |
| [operationsListSample.ts][operationslistsample]                                               | list the operations for the provider x-ms-original-file: 2023-11-01/Operations_List.json                                      |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/communityTrainingsCreateSample.js
```

Alternatively, run a single sample with the required environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
node dist/communityTrainingsCreateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[communitytrainingscreatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communitytrainings/arm-communitytrainings/samples/v1-beta/typescript/src/communityTrainingsCreateSample.ts
[communitytrainingsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communitytrainings/arm-communitytrainings/samples/v1-beta/typescript/src/communityTrainingsDeleteSample.ts
[communitytrainingsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communitytrainings/arm-communitytrainings/samples/v1-beta/typescript/src/communityTrainingsGetSample.ts
[communitytrainingslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communitytrainings/arm-communitytrainings/samples/v1-beta/typescript/src/communityTrainingsListByResourceGroupSample.ts
[communitytrainingslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communitytrainings/arm-communitytrainings/samples/v1-beta/typescript/src/communityTrainingsListBySubscriptionSample.ts
[communitytrainingsupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communitytrainings/arm-communitytrainings/samples/v1-beta/typescript/src/communityTrainingsUpdateSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communitytrainings/arm-communitytrainings/samples/v1-beta/typescript/src/operationsListSample.ts
[apiref]: https://learn.microsoft.com/javascript/api/@azure/arm-communitytrainings?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/communitytrainings/arm-communitytrainings/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html
