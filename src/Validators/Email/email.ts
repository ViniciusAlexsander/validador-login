import IValidator from "../IValidator";

class EmailValidator implements IValidator {
  isValid(email: string): boolean {
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }
}

export default new EmailValidator();
