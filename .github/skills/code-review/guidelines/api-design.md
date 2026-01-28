# Azure SDK API Design Patterns

## Client Naming

```typescript
// ✅ Correct - "Client" suffix
export class BlobStorageClient {}
export class KeyVaultSecretsClient {}

// ❌ Wrong
export class BlobStorageService {}
export class KeyVaultSecrets {}
```

## Options Pattern

All options must extend `OperationOptions`:

```typescript
import { OperationOptions } from "@azure/core-client";

// ✅ Correct
export interface ListBlobsOptions extends OperationOptions {
  prefix?: string;
  maxPageSize?: number;
}

// ❌ Wrong - missing OperationOptions base
export interface ListBlobsOptions {
  prefix?: string;
  abortSignal?: AbortSignal; // manually added
}
```

## Standard Verbs

| Verb | Usage |
|------|-------|
| `create` | Create new resource |
| `upsert` | Create or update |
| `get` | Retrieve single resource |
| `list` | Retrieve collection |
| `delete` | Remove resource |
| `update` | Modify existing resource |

## Subclients

```typescript
// ✅ Correct
class StorageClient {
  getBlobClient(containerName: string): BlobClient {
    return new BlobClient(this.pipeline, containerName);
  }
  
  getQueueClient(queueName: string): QueueClient {
    return new QueueClient(this.pipeline, queueName);
  }
}
```

## LRO Implementation

**Always use `@azure/core-lro`:**

```typescript
import { PollerLike, PollOperationState } from "@azure/core-lro";

// ✅ Correct
async function beginCreateResource(
  name: string,
  options?: CreateResourceOptions
): Promise<PollerLike<PollOperationState<Resource>, Resource>> {
  // Use core-lro primitives
}

// ❌ Wrong - hand-written polling
async function createResource(name: string): Promise<Resource> {
  const operation = await startOperation(name);
  while (!operation.done) {
    await delay(1000);
    await checkStatus(operation.id);
  }
  return operation.result;
}
```

## Paging Implementation

```typescript
import { PagedAsyncIterableIterator } from "@azure/core-paging";

// ✅ Correct
function listResources(
  options?: ListResourcesOptions
): PagedAsyncIterableIterator<Resource> {
  // Implementation using core-paging
}

// ❌ Wrong - returns array
async function listResources(): Promise<Resource[]> {
  return await fetchAllResources();
}
```

## AbortSignal Support

Every async operation must support cancellation:

```typescript
// ✅ Correct - AbortSignal via OperationOptions
async function getResource(
  name: string,
  options?: GetResourceOptions // extends OperationOptions
): Promise<Resource> {
  const { abortSignal } = options ?? {};
  // Pass abortSignal to underlying calls
}
```
