# npm-package
Project for testing the building and installation of packages with NPM and TypeScript on POSIX systems.

### Building, installing, & running

Building & installing locally:
```console
$ npm run build

> npm-package@1.0.0 build
> tsc && chmod 755 dist/index.js 

$ npm pack .
npm notice
npm notice 📦  npm-package@1.0.0
npm notice === Tarball Contents ===
npm notice 408B   .eslintrc.json
npm notice 1.1kB  LICENSE
npm notice 118B   README.md
npm notice 137B   dist/index.js
npm notice 840B   package.json
npm notice 120B   src/index.ts
npm notice 11.1kB tsconfig.json
npm notice === Tarball Details ===
npm notice name:          npm-package
npm notice version:       1.0.0
npm notice filename:      npm-package-1.0.0.tgz
npm notice package size:  4.9 kB
npm notice unpacked size: 13.8 kB
npm notice shasum:        91a7b670b0498f086a3bb80f9f5e89aa17237c1f
npm notice integrity:     sha512-jwi7Y9CofzBqc[...]BfIQC3vo+0ECA==
npm notice total files:   7
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
````
