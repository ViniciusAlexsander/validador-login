import emailValidator from './email';

describe('Email validator', () => {
  test('should return true if email is valid', () => {
    const validEmail = emailValidator.isValid("test@example.com");

    expect(validEmail).toBe(true);
  });

  test('should return false if email is invalid', () => {
    const invalidEmail = emailValidator.isValid("test@example");

    expect(invalidEmail).toBe(false);
  });
});