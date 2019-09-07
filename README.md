# demo-node-pkg

A simple project demo written in node, to package source code into a executable file.

## Instructions

### Development

Use `npm run` to see all the available scripts:

### Start

```
npm start
```

### Lint

Using ESLint to search and fix for lint errors:

```
npm run lint
```

Default configurated to autofix lint errors.  
Also runned at every commit, with `pre-commit` git hook via `husky` configuration.  

Can be also used in watch mode:

```
npm run lint:watch
```

### Importing gpg keys

Must known passphrase!

```
gpg --import gpg/private.key
```

### Building executable package

Every build output will be at `./build` folder.

```
npm run build
```

For linux, can be executed as:

```
./build/demo-node-pkg-linux
```

### Overriding configurations

Configurations can be overridden with environment variables and/or command line args:

```
LOGGER_LEVEL=info ./build/demo-node-pkg-linux
```

Or:

```
./build/demo-node-pkg-linux --logger-level=info
```

Verifying signature for linux package:


``
gpg --verify build/demo-node-pkg-linux.sig build/demo-node-pkg-linux
``

---

romajs © 2019
