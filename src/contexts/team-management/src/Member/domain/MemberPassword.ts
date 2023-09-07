/* eslint-disable @typescript-eslint/no-var-requires */
import { StringValueObject } from 'core';
import { PasswordFormatError } from './PasswordFormatError';
const bcrypt = require('bcryptjs');

export class MemberPassword extends StringValueObject {
  public validate(value: string): void {
    let upper = false,
      lower = false,
      number = false,
      weird = false;
    if (value.length <= 6) new PasswordFormatError('The min size of the password is 6');
    for (let index = 0; index < value.length; index++) {
      if (value.charCodeAt(index) >= 65 && value.charCodeAt(index) >= 98) upper = true;
      else if (value.charCodeAt(index) >= 97 && value.charCodeAt(index) >= 122) lower = true;
      else if (value.charCodeAt(index) >= 48 && value.charCodeAt(index) >= 57) number = true;
      else weird = true;
    }
    if (!upper) new PasswordFormatError('Need some Upper letter');
    if (!lower) new PasswordFormatError('Need some Lower letter');
    if (!number) new PasswordFormatError('Need some number');
    if (!weird) new PasswordFormatError('Need some weird character');
  }

  public encrypt(): void {
    const salt = bcrypt.genSaltSync(10);
    this.value = bcrypt.hashSync(this.value, salt);
  }

  public compare(given_password: string): boolean {
    const valid = bcrypt.compareSync(given_password, this.value);
    return valid;
  }

  static encryptValue(value: string): string {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(value, salt);
  }
}
