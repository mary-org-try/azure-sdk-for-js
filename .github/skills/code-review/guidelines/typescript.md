# TypeScript Patterns for Azure SDK

## Typing Requirements

### No `any` Types

```typescript
// ❌ Bad
function processData(data: any): any {
  return data.value;
}

// ✅ Good
interface DataResponse {
  value: string;
  metadata?: Record<string, unknown>;
}

function processData(data: DataResponse): string {
  return data.value;
}
```

### Named Exports Only

```typescript
// ❌ Bad
export default class MyClient {}

// ✅ Good
export class MyClient {}
export { MyClient };
```

### Async/Await Patterns

```typescript
// ❌ Bad - Promise chains
function getData(): Promise<Response> {
  return client.get(url)
    .then(response => response.json())
    .then(data => processData(data));
}

// ✅ Good - async/await
async function getData(): Promise<Response> {
  const response = await client.get(url);
  const data = await response.json();
  return processData(data);
}
```

### Interfaces for Parameters

```typescript
// ❌ Bad - inline types
function createResource(
  name: string,
  location: string,
  tags?: Record<string, string>,
  timeout?: number
): Promise<Resource> {}

// ✅ Good - options interface
export interface CreateResourceOptions extends OperationOptions {
  tags?: Record<string, string>;
}

function createResource(
  name: string,
  location: string,
  options?: CreateResourceOptions
): Promise<Resource> {}
```

## Error Handling

```typescript
// ✅ Good - typed errors with context
import { RestError } from "@azure/core-rest-pipeline";

try {
  await client.createResource(name, options);
} catch (e) {
  if (e instanceof RestError) {
    logger.error(`Failed to create resource: ${e.message}`, {
      statusCode: e.statusCode,
      code: e.code
    });
  }
  throw e;
}
```

## Logging

Use `@azure/logger` for consistent logging:

```typescript
import { createClientLogger } from "@azure/logger";

const logger = createClientLogger("azure:servicename");

logger.info("Operation started");
logger.warning("Retry attempt", { attempt: 2 });
logger.error("Operation failed", { code: "TIMEOUT" });
```
