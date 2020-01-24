
/*

The middleware folder contains the code that gets executed during the 
Node Express call stack on every call. 

Some highlights in this folder include:

common.ts (this file has things like adding CORS and parsing requests for use inside the app)
errorHandler.ts (this will has error handlers to catch and deal with global errors)

More can go into this folder (logging, security, caching, etc.) and the existing 
code could be enhanced to fit the production environment in which the code will run.


*/

import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
  } from "./common";
  
  import { handleAPIDocs } from "./apiDocs";
  export default [handleCors, handleBodyRequestParsing, handleCompression, handleAPIDocs];