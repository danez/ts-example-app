# Example App

1. install deps with running `yarn install` in the root
2. Now you can run tests: `yarn test`
3. or run the production build `yarn build`
4. or run the dev watch build `yarn dev`


we have two ts configs one for production build `tsconfig.build.json` and one for dev, tests and eslint : `tsconfig.json`. The app is separated into an API app (fastify) and a web/frontend app (cra). This is why we share some parts of the tsconfigs in the repo root.

`tsconfig.json` in `web/api` does not really define `outDir` because non of the tools that use it (`jest, eslint, ts-node, vscode`) actually outputs files.
