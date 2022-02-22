# basic-express-server

building a basic express server

### heroku deplyed app link:

please follow this [link](https://jalal-basic-express-server.herokuapp.com/), to get to the deployed app.

---

### Endpoints:

1. The Home route:
   The home rout should return a response with the status of (200) and a text that is sent to the client with the text of "home route". This route has its own test case in the server.test.js file.

2. The person route
   The person route is accessed over the path "/person",
   It expects a query with the property of name in the following formate "persone?name=providedName".
   If the query "name" was not found, it will return and error with a status of (500) asking for the user to enter a valid query with the property of name.

All tests have been passed locally, and the CICD deployment has been implemented.
A node.js workflow has been added on git hub whenever there is a pull request to the main and dev branches, but eventually only the main branch was deployed on heroku.

Feel free to add a comment for any required adjustments to this lab solutions (Hoping that there aren't any 😅)
