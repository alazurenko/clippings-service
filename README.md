# clippings-service
> Service that allows you to parse Amazon Kindle clippings.

<!-- #### POST `/upload`
Default route is `/upload` takes myClippings.txt and respond with parsed data in `json`. -->
## Install
`npm i clippings-service`
## How to use
By default is going to host the service on port `3000` with `/upload` url.

POST your `myClippings.txt` to the service and get the parsed data in `.json`.

```javascript
  const app = require('clippings-service');
  app.start();
```

## Configuration
```javascript
  const app = require('clippings-service');
  const config = {
    port: 7777,
    api: {
      upload: 'custom-url'
    }
  };
  app.start(config);
```

## License
MIT