---
name: reviewing-pull-requests
description: Reviews pull requests for Azure SDK for JavaScript. Use when asked to review a PR, check code changes, or verify Azure SDK guidelines compliance. Triggers on mentions of PR review, code review, or checking changes against SDK standards.
---

# PR Review for Azure SDK for JavaScript

Review PRs for TypeScript best practices and Azure SDK compliance.

## Review Process

1. Read PR description and identify affected packages
2. Check implementation against rules below
3. Verify tests and documentation
4. Provide structured feedback with severity labels
5. Add review summary in relevant pr


## Required Checks

**TypeScript:**
- No `any` types (unless justified)
- Named exports only (no default exports)
- Async/await patterns (no `.then()` chains)
- Interfaces for complex parameters

**Azure SDK API:**
- Client classes end with "Client" suffix
- Options extend `OperationOptions`
- Cancellation via `AbortSignal`
- Standard verbs: create, upsert, get, delete, list
- Subclients via `get<Name>Client()` methods

**LRO/Paging:**
- LROs use `@azure/core-lro` primitives (never hand-written)
- LRO methods return non-void (except DELETE)
- Paging uses `PagedAsyncIterableIterator`

**Package Requirements:**
- Tests included for changes
- CHANGELOG.md updated for user-facing changes
- No `eslint-plugin-azure-sdk` rules disabled
- Semver: minor bump for features, patch for fixes

## Output Format

```markdown
## Code Review Summary

**PR:** [Title]
**Packages:** [List]
**Assessment:** Approve / Request Changes / Comment

### 🔴 Blocking
- [Issue with file reference and fix]

### 🟡 Suggestions
- [Improvement with reasoning]

### 🟢 Nitpicks
- [Minor items]

### ✅ Good
- [Positive observations]
```

## Common Issues

- Missing `AbortSignal` support in async operations
- Hand-written LRO instead of `@azure/core-lro`
- List operations not returning `PagedAsyncIterableIterator`
- Breaking changes without major version bump
- Disabled linting rules

## References

For detailed guidelines: See [guidelines/](guidelines/) directory
- [typescript.md](guidelines/typescript.md) - TypeScript patterns
- [api-design.md](guidelines/api-design.md) - Azure SDK API design
- [common-issues.md](guidelines/common-issues.md) - Detailed issue patterns
