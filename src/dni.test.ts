import { validateDNI } from './dni';

describe('validateDNI', () => {
  it('should invalidate undefined input', () => {
    // Arrage & Act & Assert
    expect(validateDNI(undefined).succeeded).toBeFalsy();
  });
});
