import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => {
  return {
    autKey: process.env.AUTH_KEY || '123456',
  };
});
