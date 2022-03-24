# hello-asm

## Getting Started

Initialize a project with NPM or Yarn

```bash
yarn init

# npm
npm init -y
```

Install the AssemblyScript compiler.

```bash
yarn add --dev assemblyscript

# npm
npm install --save-dev assemblyscript
```

Once installed, setup a scaffold project with following command:

```bash
npx asinit .
```

The `asinit` command automatically creates the following files:

```bash
Version: 0.20.1

  ./assembly
  Directory holding the AssemblyScript sources being compiled to WebAssembly.

  ./assembly/tsconfig.json
  TypeScript configuration inheriting recommended AssemblyScript settings.

  ./assembly/index.ts
  Example entry file being compiled to WebAssembly to get you started.

  ./build
  Build artifact directory where compiled WebAssembly files are stored.

  ./build/.gitignore
  Git configuration that excludes compiled binaries from source control.

  ./asconfig.json
  Configuration file defining both a 'debug' and a 'release' target.

  ./package.json
  Package info containing the necessary commands to compile to WebAssembly.

  ./tests/index.js
  Stater test to check that the module is functioning.

  ./index.html
  Starter HTML file that loads the module in a browser.
```

Compile AssemblyScript to WebAssembly with following command:

```bash
yarn asbuild

# npm
npm run asbuild
```

Run test

```bash
yarn test
```

Start a local server:

```bash
yarn start
```

Done.