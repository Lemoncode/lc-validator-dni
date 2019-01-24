import { FieldValidationFunction, FieldValidationResult } from 'lc-form-validation';

const controlMap = 'TRWAGMYFPDXBNJZSQVHLCKET';
const defaultInvalidMessage = 'Invalid DNI';

const isString = (input: any) => typeof input === 'string' || input instanceof String;
const extractNumber = (dni: string): number => parseInt(dni.slice(0, dni.length - 1));
const extractControlLetter = (dni: string): string => dni.slice(dni.length - 1).toUpperCase();
const isValidNumber = (num: number): boolean => num >= 1 && num <= 99999999;
const isValidControlLetter = (letter: string, num: number): boolean =>
  controlMap.includes(letter) && controlMap[num % 23] === letter;

export const VALIDATION_TYPE = 'DNI';

export const validateDNI: FieldValidationFunction = (value: any) => {
  const result = new FieldValidationResult();
  let valid = false;

  if (isString(value)) {
    const num = extractNumber(value);
    const letter = extractControlLetter(value);
    valid = isValidNumber(num) && isValidControlLetter(letter, num);
  }
  result.type = VALIDATION_TYPE;
  result.succeeded = valid;
  result.errorMessage = valid ? '' : defaultInvalidMessage;

  return result;
};
