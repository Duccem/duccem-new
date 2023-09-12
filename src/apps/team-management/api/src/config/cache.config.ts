import { registerAs } from '@nestjs/config';

export default registerAs('cache', () => {
  return {
    url: process.env.CACHE_URL,
  };
});
