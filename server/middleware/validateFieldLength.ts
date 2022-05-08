import { Request, Response, NextFunction } from "express";

//TODO: split the code(types, interfaces & logic)

interface validateField {
  [key: string]: number;
}

type middleware = (req: Request, res: Response, next: NextFunction) => void;

function validateFieldLength(fields: validateField): middleware;
function validateFieldLength(field: string, length: number): middleware;
function validateFieldLength(
  field: string | validateField,
  length?: number
): middleware {
  // TODO! make it more beautiful
  function multipleValidate(req: Request, res: Response, next: NextFunction) {
    for (const key in field as validateField) {
      if (Object.prototype.hasOwnProperty.call(field, key)) {
        const element = (field as validateField)[key];

        if (req.body[key].length < element) return res.status(500).json({});
      }
    }
    next();
  }

  function singleValidate(req: Request, res: Response, next: NextFunction) {
    if (req.body[field as string].length < (length as number))
      return res.status(500).json({});
    console.log(1);

    next();
  }

  if (!length) {
    return multipleValidate;
  }
  return singleValidate;
}

export default validateFieldLength;
