# Brash Code Challenge API
> This is my response to the Code Challenge issued by Ventera - Next Steps.

The choices made while building this project were made in an effort to highlight 
some techniques that would make this project easier to expand and maintain
if it were part of a larger, more complex product. Admittedly, the solution is 
decidedly more involved than necessry but since this is part of the interview process, 
I decided to err on the side of more is indeed more.

## Setup and Run

```sh
npm install (to install the artifacts)

add .env   (Contents below)
    # Set to production when deploying to production
    NODE_ENV=development

    # Node.js server configuration
    SERVER_PORT=3000

npm run dev
```

## Usage example

There is no security for this API. There are a few things one may want to do to make this product production ready like using PM2 (clustering)

When you run the node project, it will create a server listening on port 3000. The API entry point is: http://localhost:3000/api/v1/unit-convert . The only method exposed is HTTP POST.  The API expects JSON to be posted in this format.

_{
_  "sourceUnit": "(see challenge instructions for expected values)",
_  "sourceValue": 0,
_  "targetUnit": "(see challenge instructions for expected values)",
_  "targetValue": 0
_}

The API will return JSON 

_{
_  "response": "correct | incorrect | invalid",
_}


## Release History

* 0.1.0
    * The first proper release
* 0.0.1
    * Work in progress

