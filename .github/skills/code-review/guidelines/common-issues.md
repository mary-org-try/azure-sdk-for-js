# Common PR Issues and Fixes

## 1. Missing AbortSignal Support

**Problem:** Async operation doesn't support cancellation.

```typescript
// ❌ Found in PR
async function getItem(id: string): Promise<Item> {
  return this.client.get(`/items/${id}`);
}
```

**Fix:** Add options parameter extending OperationOptions.

```typescript
// ✅ Fixed
import { OperationOptions } from "@azure/core-client";

export interface GetItemOptions extends OperationOptions {}

async function getItem(
  id: string,
  options: GetItemOptions = {}
): Promise<Item> {
  return this.client.get(`/items/${id}`, options);
}
```

## 2. Hand-Written LRO

**Problem:** Manually polling instead of using core-lro.

```typescript
// ❌ Found in PR
async function createVM(name: string): Promise<VM> {
  const op = await this.client.startCreate(name);
  while (op.status !== "completed") {
    await new Promise(r => setTimeout(r, 5000));
    await op.refresh();
  }
  return op.result;
}
```

**Fix:** Use `@azure/core-lro` primitives.

```typescript
// ✅ Fixed
import { getLongRunningPoller } from "@azure/core-lro";

async function beginCreateVM(
  name: string,
  options?: CreateVMOptions
): Promise<PollerLike<PollOperationState<VM>, VM>> {
  return getLongRunningPoller(this.client, initialResponse, options);
}
```

## 3. Missing Pagination

**Problem:** List operation returns array instead of iterator.

```typescript
// ❌ Found in PR
async function listItems(): Promise<Item[]> {
  const response = await this.client.get("/items");
  return response.items;
}
```

**Fix:** Return PagedAsyncIterableIterator.

```typescript
// ✅ Fixed
import { PagedAsyncIterableIterator } from "@azure/core-paging";

function listItems(
  options?: ListItemsOptions
): PagedAsyncIterableIterator<Item> {
  return this.client.paginate("/items", options);
}
```

## 4. Disabled Linting Rules

**Problem:** ESLint rule disabled to bypass check.

```typescript
// ❌ Found in PR
// eslint-disable-next-line @azure/azure-sdk/ts-apisurface-supportcancellation
async function doSomething(): Promise<void> {}
```

**Fix:** Never disable `eslint-plugin-azure-sdk` rules. Fix the underlying issue.

## 5. Missing CHANGELOG Entry

**Problem:** User-facing change without CHANGELOG update.

**Fix:** Add entry under `## [Unreleased]`:

```markdown
## [Unreleased]

### Features Added
- Added `listItems` method to `MyClient`

### Bugs Fixed
- Fixed timeout handling in `getItem`
```

## 6. Breaking Change Without Version Bump

**Problem:** Removing/renaming public API without major version.

```typescript
// ❌ Breaking: renamed parameter
// Before: getItem(id: string, options?: GetItemOptions)
// After:  getItem(itemId: string, options?: GetItemOptions)
```

**Fix:** Either maintain backward compatibility or bump major version.

## 7. Default Export

**Problem:** Using default export.

```typescript
// ❌ Found in PR
export default class MyClient {}
```

**Fix:** Use named export.

```typescript
// ✅ Fixed
export class MyClient {}
```

## 8. Promise Chain Instead of Async/Await

**Problem:** Using .then() chains.

```typescript
// ❌ Found in PR
function getData(): Promise<Data> {
  return fetch(url)
    .then(r => r.json())
    .then(d => transform(d));
}
```

**Fix:** Use async/await.

```typescript
// ✅ Fixed
async function getData(): Promise<Data> {
  const response = await fetch(url);
  const data = await response.json();
  return transform(data);
}
```
