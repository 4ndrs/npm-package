# npm-package
Project for testing the building and installation of packages with NPM and TypeScript on POSIX systems.

### Building, installing, & running

Building & installing locally:
```console
$ npm run build

> npm-package@1.0.0 build
> tsc

$ npm pack .
npm notice
npm notice 📦  npm-package@1.0.0
npm notice === Tarball Contents ===
npm notice 408B   .eslintrc.json
npm notice 1.1kB  LICENSE
npm notice 1.2kB  README.md
npm notice 77B    bin/npm-package-test
npm notice 553B   dist/index.js
npm notice 900B   package.json
npm notice 250B   src/index.ts
npm notice 11.1kB tsconfig.json
npm notice === Tarball Details ===
npm notice name:          npm-package
npm notice version:       1.0.0
npm notice filename:      npm-package-1.0.0.tgz
npm notice package size:  5.7 kB
npm notice unpacked size: 15.6 kB
npm notice shasum:        28771b7c7560e3900aba1e9adc3b7841b81bc1af
npm notice integrity:     sha512-fW3hpaO1jMp6I[...]NAuTle6xUzkPg==
npm notice total files:   8
npm notice
npm-package-1.0.0.tgz
$ npm install ./npm-package-1.0.0.tgz

added 1 package, and audited 135 packages in 511ms

34 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

Running:
```console
$ npx npm-package-test
Hello, World!
$ npx npm-package-test --name Suiseiseki
Hello, Suiseiseki!
````
