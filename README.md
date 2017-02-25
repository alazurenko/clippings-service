# clippings-service
### Service that allows you to parse Amazon Kindle clippings.

### API
#### POST `/upload`
Default route is `/upload` takes myClippings.txt and respond with parsed data in `json`.

### How to use
```javascript
  const app = require('clippings-service');
  app.start();
```
Will host an application on port 3000.
