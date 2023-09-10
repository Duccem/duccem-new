'use client'
import { useRouter } from 'next/navigation';
import { Button, CheckInput, DateInput, Form, SelectInput, TextInput, useForm } from 'ui';
import { useCountries } from '../../../_shared/hooks/useCountries';
import { GuildForm } from '../forms/GuildForm';
import { useAuthContext } from '../store/AuthContext';

export function RegisterGuildForm() {
  const location = useRouter();
  const { register, handleSubmit } = useForm({
    validateOn: 'all',
    fields: GuildForm,
  });
  const { countries } = useCountries();
  const { setGuild } = useAuthContext();
  function handleClickRegister(e) {
    handleSubmit(
      e,
      (data: any) => {
        setGuild(data);
        location.push('/auth/register-member');
      }
    );
  }
  return (
    <>
      <Form onSubmit={handleClickRegister} width={'75%'} marginBottom={'1.25rem'}>
        <TextInput placeholder="Name" {...register('name')} />
        <TextInput placeholder="Email" {...register('email')} />
        <SelectInput autocomplete placeholder="Country" options={countries} {...register('country')} />

        <DateInput placeholder="Foundation Date" {...register('foundationDate')} />

        <CheckInput placeholder="Ok with our terms of service" {...register('terms')} />
        <Button type="submit" className="mt-5" width={'percent.larger'}>
          Sign Up
        </Button>
      </Form>
    </>
  );
}
