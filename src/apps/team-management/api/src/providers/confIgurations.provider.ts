import { Provider } from '@nestjs/common';
import * as serviceAccount from '../environments/ducen-google-services.json';

export const configurations: Provider[] = [
  {
    provide: 'SERVER_CONFIGURATION',
    useValue: {
      port: process.env.PORT || 3000,
      host: process.env.HOST || ' http://localhost',
      globalPrefix: process.env.GLOBAL_PREFIX || 'api',
    },
  },
  {
    provide: 'DATABASE_CONFIGURATION',
    useValue: {
      uri: process.env.DATABASE_URI || 'mongodb://127.0.0.1:27017',
      name: process.env.DATABASE_NAME || 'ducen2',
    },
  },
  {
    provide: 'QUEUE_CONFIGURATION',
    useValue: {
      hostname: process.env.MESSAGE_Q_HOST,
      protocol: process.env.MESSAGE_Q_PROTOCOL,
      port: process.env.MESSAGE_Q_PORT,
      username: process.env.MESSAGE_Q_USER,
      password: process.env.MESSAGE_Q_PASSWORD,
      vhost: process.env.MESSAGE_Q_VHOST,
    },
  },
  {
    provide: 'CACHE_CONFIGURATION',
    useValue: {
      url: process.env.CACHE_URL,
    },
  },
  {
    provide: 'AUTH_CONFIGURATION',
    useValue: {
      authKey: process.env.AUTH_KEY,
    },
  },
  {
    provide: 'OAUTH2_CONFIGURATION',
    useValue: {
      facebookClientID: process.env.FACEBOOK_CLIENT_ID || '',
      facebookClientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
      googleClientID: process.env.GOOGLE_CLIENT_ID || '',
      googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      twitterClientID: process.env.TWITTER_KEY || '',
      twitterClientSecret: process.env.TWITTER_SECRET || '',
      linkedinClientID: process.env.LINKEDIN_CLIENT_ID || '',
      linkedinClientSecret: process.env.LINKEDIN_CLIENT_SECRET || '',
      githubClientID: process.env.GITHUB_CLIENT_ID || '',
      githubClientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    },
  },
  {
    provide: 'IMAGE_CONFIGURATION',
    useValue: {
      cloudName: process.env.CLOUDINARY_NAME,
      apiKey: process.env.CLOUDINARY_KEY,
      apiSecret: process.env.CLOUDINARY_SECRET,
    },
  },
  {
    provide: 'EMAIL_CONFIGURATION',
    useValue: {
      username: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASS,
      fromEmail: process.env.EMAIL_FROM,
      templatePath: process.env.EMAIL_TEMPLATE_PATH,
    },
  },
  {
    provide: 'PAYMENT_CONFIGURATION',
    useValue: {
      secretKey: process.env.STRIPE_SECRET_KEY,
    },
  },
  {
    provide: 'NOTIFICATION_CONFIGURATION',
    useValue: serviceAccount,
  },
];
