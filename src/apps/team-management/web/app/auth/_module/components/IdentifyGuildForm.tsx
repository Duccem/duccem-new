'use client'
import { useRouter } from 'next/navigation';
import { Button, Form, TextInput, useForm } from 'ui';
import { useSharedStoreContext } from '../../../_shared/store/SharedContext';
import { GuildIdentify } from '../forms/GuildIdentify';
import { useAuthService } from '../store/AuthService';

export function IdentifyGuildForm() {
  const navigate = useRouter();
  const { handleSubmit, register } = useForm({
    fields: GuildIdentify,
  });
  const { identifyGuild } = useAuthService();
  const { setLoading } = useSharedStoreContext();
  const validateId = (event: any) => {
    handleSubmit(event, async (data) => {
      setLoading(true);
      const identified = await identifyGuild(data.id);
      setLoading(false);
      if (identified) {
        navigate.push('/auth/register-member');
        return;
      }
    });
  };
  return (
    <>
      <Form onSubmit={validateId} width={'75%'}>
        <TextInput placeholder="Guild identification" {...register('id')} />
        <Button type="submit">Identify</Button>
      </Form>
    </>
  );
}
