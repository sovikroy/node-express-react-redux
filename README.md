# React Redux Project with Node Express Backend

> Example on react-redux with a Node Express Backend

## Usage

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm install nodemon -g
```

Install server and client dependencies

```
yarn install
cd client
yarn install
```

To start the server and client at the same time

```
yarn dev
```

## How this works

The project is created with by using **proxy** entry in `client/package.json`

``` 
"proxy": "http://localhost:3001/"
```

Webpack server to proxy our API requests to Express server running on **localhost:3001**
