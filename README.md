# Clippings Service
## 1.0.0
### Service that allows you to parse Amazon Kindle clippings.

Simple start:

```javascript
  const app = require('clippings-service');
  app.start();
```

Will host an application on port 3000.
API
#### POST .../api/upload
Takes clippings.txt and respond with parsed data.
