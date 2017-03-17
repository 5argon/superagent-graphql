#Superagent Suffix Middleware
Middleware to add a suffix to superagent request url

##Installation
```
npm install --save superagent-graphql
```

##Example
```Javascript
var request = require('superagent');
var ql = require('superagent-graphql');

    const queryString = `
        query Authenticate($id: String!, $password : String!)
        {
            authenticate(id: $id, password: $password)
        }
    `

    const queryVars = {
        id: "123",
        password: "456" 
    }


request
    .post("/graphql")
    .use(ql(queryString,queryVars))
    .end((err,res)=>{
        //...
    })
```
