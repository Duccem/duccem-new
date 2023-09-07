import { FormatError } from '@ducen/shared/core';

export class MemberAlreadyExistError extends FormatError {
  constructor(name: string) {
    super(`User ${name} already exists`);
  }
}
