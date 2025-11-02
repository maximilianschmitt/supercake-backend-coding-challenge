# Supercake Backend Coding Challenge

By: `<Name>` from `<Company>`

## Instructions

[View Instructions](https://maxschmitt.notion.site/Supercake-Backend-Coding-Challenge-29f414f335b58117bab1c38eddda4446?source=copy_link)

## Getting Started

Start the dev/test databases using `docker compose`:

```
docker compose up -d
```

Install dependencies:

```
npm install
```

## Running Tests

```
npm test
```

## Scripts

The repo comes with a few npm scripts that are useful to know about:

- `npm run test`: Runs the tests (using Mocha)
- `npm run dev`: Starts the development server (using tsx)
- `npm run format`: Formats all files (using Prettier)
- `npm run format:check`: Checks that all files are formatted
- `npm run typecheck`: Checks that there are no TypeScript errors
- `npm run lint`: Checks that there are no lint errors
- `npm run checks`: Runs `lint`, `typecheck` and `format:check` together

## Databases

The following databases are setup using the `docker-compose.yml` file:

### Development Database

```
Host: localhost
Port: 5434
Database: supercake_dev
User: postgres
Password: postgres
```

### Testing Database

This database is used when running tests. It is cleared before each test run.

```
Host: localhost
Port: 5433
Database: supercake_test
User: postgres
Password: postgres
```
