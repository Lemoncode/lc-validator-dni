import { validateDNI, VALIDATION_TYPE } from './dni';
import { FieldValidationResult } from 'lc-form-validation';

describe('validateDNI', () => {
  it('should invalidate undefined input', () => {
    // Arrage
    const testDNI = undefined;

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should return result type DNI', () => {
    // Arrage
    const testDNI = undefined;

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.type).toEqual(VALIDATION_TYPE);
    expect(result.succeeded).toBeFalsy();
  });


  it('should invalidate null input', () => {
    // Arrage
    const testDNI = null;

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate non-string input', () => {
    // Arrage
    const testDNI = 12345678;

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate empty input', () => {
    // Arrage
    const testDNI = '';

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate malformed input string', () => {
    // Arrage
    const testDNI = '123zz';

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should validate a valid DNI', () => {
    // Arrage
    const testDNI = '12345678Z';

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeTruthy();
  });

  it('should validate a valid DNI with lowercase letter', () => {
    // Arrage
    const testDNI = '12345678z';

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeTruthy();
  });

  it('should invalidate an invalid DNI', () => {
    // Arrage
    const testDNI = '12345678A';

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should invalidate an invalid DNI in lowercase letter', () => {
    // Arrage
    const testDNI = '12345678a';

    // Act
    const result = validateDNI(testDNI, null, null) as FieldValidationResult;

    // Assert
    expect(result.succeeded).toBeFalsy();
  });

  it('should validate min and max DNI in range', () => {
    // Arrage
    const testDNImin = '00000001R';
    const testDNImax = '99999999R';

    // Act
    const resultMin = validateDNI(testDNImin, null, null) as FieldValidationResult;
    const resultMax = validateDNI(testDNImax, null, null) as FieldValidationResult;

    // Assert
    expect(resultMin.succeeded).toBeTruthy();
    expect(resultMax.succeeded).toBeTruthy();
  });

  it('should invalidate DNIs outside range', () => {
    // Arrage
    const testDNI1 = '00000000T';
    const testDNI2 = '100000000W';

    // Act
    const result1 = validateDNI(testDNI1, null, null) as FieldValidationResult;
    const result2 = validateDNI(testDNI2, null, null) as FieldValidationResult;

    // Assert
    expect(result1.succeeded).toBeFalsy();
    expect(result2.succeeded).toBeFalsy();
  });
});
