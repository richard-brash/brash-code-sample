
/*

This defines the route(s) or endoint for this sub-section of the app.
There is some minor error checking here to make sure the JSON object
POSTed is complete and meets certain expectations.

*/

import { Request, Response } from "express";
import { checkConvertedValue } from "./unitConvertController";
import { body, validationResult } from "express-validator";

export default [
  {
    path: "/api/v1/unit-convert",
    method: "post",
    handler: [

      //  Check the POSTed to make sure we have a complete object to work with
      body("sourceValue", "Source value  is required and must be numberic").isNumeric().exists(),
      body("targetValue", "Target value is required and must be numberic").isNumeric().exists(),
      body("targetUnit", "Target Unit is required and must be Alphanumeric").isString().exists(),
      body("sourceUnit", "Source Unit is required and must be Alphanumeric").isString().exists(),
      (req: Request, res: Response) => {
        // Finds the validation errors in this request and wraps them in an 
        // object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.status(422).json({ errors: errors.array() });
        }

        const result = checkConvertedValue(req.body);
        res.status(200).send(result);

      }
    ]
  }
];
