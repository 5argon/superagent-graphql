# Installation
```
npm install --save superagent-graphql
```

# Example
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
    .post("/graphql") //choose your POST/GET and your endpoint name here
    .use(ql(queryString,queryVars))
    .end((err,res)=>{
        //...
    })
```
