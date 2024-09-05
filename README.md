# Lasereyes Modal Connect

This library serves to simplify the process of connecting to any bitcoin wallet building on top of the `@omnisat/lasereyes` library.

## Installation

Install the library and `@omnisat/lasereyes` using your favourite package manager. If you use bun,

```bash
bun install lasereyes-modal-connect @omnisat/lasereyes
```

Additionally, depending on your tech stack, there's some extra workarounds you'll need because of the limitations of the libraries being depended upon.

### Webpack
If you use webpack (this is the case if you use Create React App), you might be seeing something similar to the error below
```
ERROR in ./node_modules/@omnisat/lasereyes/dist/index.mjs 406:0-61
Module not found: Error: Can't resolve 'bitcoinjs-lib/src/address' in '<project-folder>/node_modules/@omnisat/lasereyes/dist'
Did you mean 'address.js'?
BREAKING CHANGE: The request 'bitcoinjs-lib/src/address' failed to resolve only because it was resolved as fully specified
(probably because the origin is strict EcmaScript Module, e. g. a module with javascript mimetype, a '*.mjs' file, or a '*.js' file where the package.json contains '"type": "module"').
The extension in the request is mandatory for it to be fully specified.
Add the extension to the request.
```

Your first thought might be to edit that dependency and directly and do what the error message says, but that would raise maintainability problems as you now always have to remember to change that again everytime you need to change the version of the library that you're using. Instead, you can fix it by adding this to your webpack configuration 

```js
{
  // ...other webpack config
  module: {
    // ...
    rules: [
      // ...
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
   ],
  }
}
```

 ⁠
If you use Create React App, you might not see a ⁠ `webpack.config.js⁠`  file. To be able to modify your webpack config without ejecting, install ⁠ craco ⁠.

```⁠bash
npm install -D @craco/craco
```

 ⁠
Now change the scripts in your `package.json` like so,

```json
{
  "start": "craco start",
  "build": "craco build",
  "test": "craco test"
}
```

 ⁠
Then create a ⁠` craco.config.js` ⁠file in the root directory of your project and add the following to it.

```js
const webpack = require('webpack');
module.exports = {
  webpack: {
    configure: {
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    }
  },
};

```

### Buffer
The ⁠ `@omnisat/lasereyes`⁠ package depends on ⁠ `bitcoinjs` ⁠which uses node's `Buffer`. This results in an error stemming from the fact that `Buffer` isn't always available by default in browser environments. To fix this, a polyfill is required. There are different ways to do this depending on your setup but here are some recommendations for common setups.

**Vite**

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills({
    include: ["buffer"],
  }),],
})
 ⁠
```

**Create React App (@craco/craco)**

```js
const webpack = require('webpack');
module.exports = {
  webpack: {
    configure: {
      fallback: {
        buffer: require.resolve('buffer/'),
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ['buffer', 'Buffer'],
        }),
      ],
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    },
  },
};

```



## Usage

The recommended way to use the library is to simply import the `<LaserEyesModalProvider />` and wrap the parts of your app that depend on the wallets with it. Doing this implicitly wraps the app in a `<LaserEyesProvider />` also. You can then simply place the `<ConnectWalletButton>` component any where you want to have it and forget about every other thing. Once connected, you can use the `useLaserEyes` hook and interact with the library normally.

If you would rather customise the appearance of the button, instead of using `<ConnectWalletButton>`, you should use the `useLaserEyesModal` hook to trigger the connect flow and control. the modal as you prefer.

Alternatively, you can control the modal display by using the `<ConnectWalletModal>` component and pass the `onClose` and `open` parameters to it.

### Example Usage

```tsx
import logo from './logo.svg';
import './App.css';
import { ConnectWalletButton, LaserEyesModalProvider } from 'lasereyes-modal-connect';
import 'lasereyes-modal-connect/dist/style.css';

function App() {
  return (
    <LaserEyesModalProvider>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ConnectWalletButton />
      </header>
    </div>
    </LaserEyesModalProvider>
  );
}

export default App;

```

