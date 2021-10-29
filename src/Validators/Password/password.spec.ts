import PasswordValidator from './password';

describe('Password validator', () => {
  it('Should return true when password is valid', () => {
    const password = '123456cB!';
    const result = PasswordValidator.isValid(password);
    expect(result).toBe(true);
  });

  it('Should return false when password is invalid', () => {
    const password = '123456';  
    const result = PasswordValidator.isValid(password);
    expect(result).toBe(false);
  });
})