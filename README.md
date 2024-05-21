# Problem-Service-Priyanka

# how routing is working in the project

-/api/v1/problems/ping
  -because the route starts with /api
  /api     ->  /v1      -> /problems    ->  /ping
  apiRouter -> v1Router -> problemRouter -> problemController -> service layer
       // All of these are like middleware, but the special thing about a controller is that it sends requests to the service layer, collects the responses from the service layer, and sends them back to the corresponding chain.