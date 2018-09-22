import { FieldValidationFunction, FieldValidationResult } from 'lc-form-validation';

const letterMap = 'TRWAGMYFPDXBNJZSQVHLCKET';
const defaultInvalidMessage = 'Invalid DNI';

const isString = (input: any) => typeof input === 'string' || input instanceof String;
const extractNumber = (dni: string): number => parseInt(dni.slice(0, dni.length - 1));
const extractLetter = (dni: string): string => dni.slice(dni.length - 1).toUpperCase();
const mapNumberToLetter = (dniNumber: number): string => {
  const mod = dniNumber % 23;
  return letterMap.slice(mod, mod + 1);
};

export const validateDNI: FieldValidationFunction = (input: any) => {
  const result = new FieldValidationResult();
  result.succeeded = isString(input)
    ? Boolean(mapNumberToLetter(extractNumber(input)) === extractLetter(input))
    : false;
  result.errorMessage = result.succeeded ? '' : defaultInvalidMessage;

  return result;
};
