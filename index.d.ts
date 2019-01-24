/**
 * Validates an input value as a spanish National Identity Number (DNI)
 * @param value Input value to be interpreted as DNI
 */
import FieldValidationResult from 'lc-form-validation';
export declare const VALIDATION_TYPE : string;
export declare function validateDNI(value: any): FieldValidationResult;
