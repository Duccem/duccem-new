/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button, Form, PasswordInput, TextInput, useForm } from 'ui';
import { useSharedStoreContext } from '../../../_shared/store/SharedContext';
import { CredentialsForm } from '../forms/CredentialsForm';
import { useAuthContext } from '../store/AuthContext';
import { useAuthService } from '../store/AuthService';

export function CreateCredentialsForm() {
  const location = useRouter();
  const { authState, setCredentials } = useAuthContext();
  const { setLoading } = useSharedStoreContext();
  const { registerGuild, registerMember } = useAuthService()
  const { register, handleSubmit } = useForm({
    validateOn: 'all',
    fields: CredentialsForm,
  });
  useEffect(() => {
    async function registerGuildAdmin() {
      if(authState.admin.nickname && authState.admin.password){
        setLoading(true);
        if(authState.registerType === 'member') {
          await registerMember();
          setLoading(false)
          location.push('/auth/completed')
        } else {
          await registerGuild();
          setLoading(false)
          location.push('/auth/choose-plan')
        }
      }
    }
    registerGuildAdmin();
  }, [authState.admin.nickname, authState.admin.password])
  async function handleCredentialsSubmit(e) {
    handleSubmit(
      e,
      async ({ identifier, password }) => {
        setCredentials(identifier, password );
      },
      (values) => console.log(values)
    );
  }
  return (
    <>
      <Form onSubmit={handleCredentialsSubmit} width={'75%'} marginBottom={'1.25rem'}>
        <TextInput placeholder="Username" {...register('identifier')} />
        <PasswordInput placeholder="Password" {...register('password')} />
        <PasswordInput placeholder="Confirm Password" {...register('newPassword')} />
        <Button className="mt-5" width={'percent.larger'} type="submit">
          Finish
        </Button>
      </Form>
    </>
  );
}
