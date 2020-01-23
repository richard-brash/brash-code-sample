import { Request, Response } from "express";
import { checkConvertedValue } from "./unitConvertController";
import { body, validationResult } from "express-validator";

export default [
  {
    path: "/api/v1/unit-convert",
    method: "post",
    handler: [
      body("sourceValue", "Source value  is required and must be numberic").isNumeric().exists(),
      body("targetValue", "Target value is required and must be numberic").isNumeric().exists(),
      body("targetUnit", "Target Unit is required and must be Alphanumeric").isString().exists(),
      body("sourceUnit", "Source Unit is required and must be Alphanumeric").isString().exists(),
      (req: Request, res: Response) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.status(422).json({ errors: errors.array() });
        }

        const result = checkConvertedValue(req.body);
        res.status(200).send(result);

        // res.status(200).send(packet);
      }
    ]
  }
];
