# react-input-files

> Reusable React input file component.

[![Travis][build-badge]][build]
[![Codecov Status][codecov-badge]][codecov]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads]][npm]

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devdependency-badge]][devdependency]
[![peerDependency Status][peerdependency-badge]][peerdependency]

[![prettier][prettier-badge]][prettier]
[![license][license-badge]][license]

## Installation

```sh
$ yarn add react-input-files
```

## Demo

- https://react-input-files.netlify.com/

## Usage

```js
import InputFiles from 'react-input-files';

<InputFiles onChange={files => console.log(files)}>
  <button>Upload</button>
</InputFiles>;
```

## API

```js
type Props = {
  children: React.Node,
  onChange: (files: Array<File>, e: SyntheticEvent<HTMLInputElement>) => void,
  accept?: string,
  style?: Object,
};
```

## Development

### Requirements

- node >= 11.4.0
- yarn >= 1.12.3

```sh
$ yarn install --pure-lockfile
$ yarn start
```

## Test

```sh
$ yarn run format
$ yarn run eslint
$ yarn run flow
$ yarn run test:watch
$ yarn run build
```

---

## CONTRIBUTING

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.
- Pull requests must be accompanied by passing automated tests.

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[build-badge]: https://img.shields.io/travis/evenchange4/react-input-files/master.svg?style=flat-square
[build]: https://travis-ci.org/evenchange4/react-input-files
[npm-badge]: https://img.shields.io/npm/v/react-input-files.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-input-files
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/react-input-files.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/react-input-files?branch=master
[npm-downloads]: https://img.shields.io/npm/dt/react-input-files.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/react-input-files.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[dependency-badge]: https://david-dm.org/evenchange4/react-input-files.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/react-input-files
[devdependency-badge]: https://david-dm.org/evenchange4/react-input-files/dev-status.svg?style=flat-square
[devdependency]: https://david-dm.org/evenchange4/react-input-files#info=devDependencies
[peerdependency-badge]: https://david-dm.org/evenchange4/react-input-files/peer-status.svg?style=flat-square
[peerdependency]: https://david-dm.org/evenchange4/react-input-files#info=peerDependencies
[prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier]: https://github.com/prettier/prettier
