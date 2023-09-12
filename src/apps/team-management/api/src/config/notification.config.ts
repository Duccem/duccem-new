import { registerAs } from '@nestjs/config';
import * as serviceAccount from '../environments/ducen-google-services.json';

export default registerAs('notification', () => {
  return serviceAccount;
});
