# Clippings Service
### Service that allows you to parse Amazon Kindle clippings.

### API
#### POST '/api/upload'
Default route is `'/api/upload'` takes myClippings.txt and respond with parsed data.

### How to use
```javascript
  const app = require('clippings-service');
  app.start();
```
Will host an application on port 3000.
