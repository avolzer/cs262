# CS 262 Monopoly Webservice

This is the data service application for [CS 262 Homework 3](https://cs.calvin.edu/courses/cs/262/kvlinden/09is/homework.html) based on the [sample monopoly project](https://github.com/calvin-cs262-organization/monopoly-project)
and it is deployed here:
          
<https://monopoly-service-2.herokuapp.com//>

It is based on the standard Heroku with Node.js tutorial.

<https://devcenter.heroku.com/articles/getting-started-with-nodejs>  

The database is relational with the schema specified in the `sql/` sub-directory,
 and is hosted on [ElephantSQL](https://www.elephantsql.com/). The database user
and password are stored as Heroku configuration variables rather than in this (public) repo.

## Questions:

1. What are the (active) URLs for your data service?

* https://monopoly-service-2.herokuapp.com/
* https://monopoly-service-2.herokuapp.com/players
* https://monopoly-service-2.herokuapp.com/players/:id
* https://monopoly-service-2.herokuapp.com/players/:id/scores
* https://monopoly-service-2.herokuapp.com/players/:id

**2. Which of these endpoints implement actions that are idempotent? nullipotent?**

They are all nullipotent because they're read-only. Delete would be idempotent.

**3. Is the service RESTful? If not, why not? If so, what key features make it RESTful.**

It is RESTful. Requests are made to a URI that returns JSON objects. The request messages are stateless. The database is separated from the interface.
          
**4. Is there any evidence in your implementation of an impedance mismatch?**
Yes, the format of the data has to be changed. The id is first obtained with one fetch, then it is concatenated with the beginning and end of a url string in order to fetch the games and scores.
