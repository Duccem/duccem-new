'use client';
import { useRouter } from 'next/navigation';
import { Button, Form, PasswordInput, TextInput, useForm } from 'ui';
import { useSharedStoreContext } from '../../../_shared/store/SharedContext';
import { Login } from '../forms/Login';
import { useAuthService } from '../store/AuthService';
;

export function LoginForm() {
  const router = useRouter()
  const { register, handleSubmit } = useForm({
    validateOn: 'all',
    fields: Login,
  });
  const { setLoading } = useSharedStoreContext();
  const { login } = useAuthService();
  async function dispatchLogin(event: any) {
    handleSubmit(event, async ({ identifier, password }: any) => {
      setLoading(true);
      await login(identifier, password);
      setLoading(false);
      router.push('/home')
    });
  }
  function enterHandler(event: any) {
    if (event.key === 'Enter') dispatchLogin(event);
  }
  return (
    <>
      <Form marginTop={'1.25rem'} onSubmit={dispatchLogin}>
        <TextInput placeholder="Username" id="username" {...register('identifier')} />
        <PasswordInput placeholder="Password" {...register('password')} onKeyDown={enterHandler} />
        <Button width={'percent.larger'} type="submit">
          Log In
        </Button>
      </Form>
    </>
  );
}
