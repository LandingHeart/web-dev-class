# Class 03 Note

# Table of contents

- [Class 03 Note](#class-03-note)
- [Table of contents](#table-of-contents)
- [HTTP Request](#http-request)
- [fetch API](#fetch-api)
  - [json placeholder api](#json-placeholder-api)

# HTTP Request

- HTTP Request
  - GET
  - POST
  - PUT
  - POST
  - PATCH
  - <p>HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.</p>

# fetch API

```javascript
// get request
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data));

// post request
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST", // or 'PUT'
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

## json placeholder api

<p>Comsuming API with plain JS HTML CSS, API documentation
<a> https://jsonplaceholder.typicode.com/</a> </p>
