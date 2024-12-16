### Running locally

#### 1. Start the microfrontend apps

This serves the microfrontends on ports `3081` and `3082`.

This makes their isolated development playgrounds available at

- `http://localhost:3081/`
- `http://localhost:3082/`

and their JS bundles (available for consumption by parent app) at

- `http://localhost:3081/remoteEntry.js`
- `http://localhost:3082/remoteEntry.js`

````sh
# First microfrontend
cd mfe-todo-app
npm install
npm start

# Second microfrontend
cd mfe-subrouting
npm install
npm start

#### 2. Start parent app

This serves the parent app at `http://localhost:3080/`.

The parent app is configured to lazy-load the microfrontends (asyncronously, over the network from their `remoteEntry.js` resources) at run-time.

```sh
cd parent
npm install
npm start
````
# RAG_MFE
