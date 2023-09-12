'use client'
import { Button, Form, PasswordInput, useForm } from 'ui';
import { useSharedStoreContext } from '../../../_shared/store/SharedContext';
import { NewPasswordForm } from '../forms/NewPassword';
import { useAuthService } from '../store/AuthService';

export function NewPassword({ memberId }) {
  const { changePassword } = useAuthService();
  const { setLoading } = useSharedStoreContext()
  
  const { register, handleSubmit, setError } = useForm({
    validateOn: 'all',
    fields: NewPasswordForm,
  });
  async function handleCredentialsSubmit(e) {
    handleSubmit(
      e,
      async ({oldPassword, password, newPassword }) => {
        if(password !== newPassword) {
          setError('newPassword', 'Passwords do not match');
          return;
        }
        setLoading(true)
        await changePassword(memberId, password, oldPassword);
        setLoading(false)
      },
      (values) => console.log(values),
    );
  }
  return (
    <>
      <Form onSubmit={handleCredentialsSubmit} width={'75%'} marginBottom={'1.25rem'}>
      <PasswordInput placeholder="Old Password" {...register('oldPassword')} />
        <PasswordInput placeholder="New Password" {...register('password')} />
        <PasswordInput placeholder="Repeat Password" {...register('newPassword')} />
        <Button className="mt-5" width={'percent.larger'} type="submit">
          Change password
        </Button>
      </Form>
    </>
  );
}
