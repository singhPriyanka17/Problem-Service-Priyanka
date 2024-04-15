// Having a separate index file for v1 allows for:
// 1. Modularity: Grouping related v1 endpoints, middleware, and logic for better organization.
// 2. Versioning: Enables easy maintenance and updates of v1 without affecting other versions.
// 3. Isolation: Ensures v1 functionality is isolated, minimizing unintended interactions with other versions.
// 4. Testing: Facilitates precise testing of v1 functionality, ensuring correctness and reliability.

const express = require('express')
const v1Router = require('./v1')

const apiRouter = express.Router()
apiRouter.use('/v1', v1Router)
module.exports = apiRouter
