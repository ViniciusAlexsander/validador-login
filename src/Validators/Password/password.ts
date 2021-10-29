import IValidator  from "../IValidator";

class PasswordValidator implements IValidator {
  isValid(password: string): boolean {
    if (password.length < 8)
      return false;
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password))
      return false;
    else
      return true;
  }
}

export default new PasswordValidator();