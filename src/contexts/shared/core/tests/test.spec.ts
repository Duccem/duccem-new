import { Email } from '../src/domain/ValueObjects/generics/Email';

describe('Email', () => {
  it('should create a valid email', () => {
    const email = new Email('ducen29@gmail.com');
    expect(email.value).toBe('ducen29@gmail.com');
  });
  it('should throw an error if email is invalid', () => {
    expect(() => new Email('ducen29gmail.com')).toThrowError('El email no tiene el formato correcto');
  });
});
