import { password, required } from 'ui';

export const NewPasswordForm = {
  oldPassword: {
    value: '',
    validators: {
      required: (v: string) => required(v),
      password: (v: string) => password(v),
    },
  },
  password: {
    value: '',
    validators: {
      required: (v: string) => required(v),
      password: (v: string) => password(v),
    },
  },
  newPassword: {
    value: '',
    validators: {
      required: (v: string) => required(v),
    },
  },
};
