'use client'
import { useRouter } from "next/navigation";
import { Button, Form, TextInput, useForm } from "ui";
import { useSharedStoreContext } from "../../../_shared/store/SharedContext";
import { EmailForm } from "../forms/EmailForm";
import { useAuthService } from "../store/AuthService";

export function RecoveryPasswordEmail() {
  const navigate = useRouter();
  const { handleSubmit, register } = useForm({
    fields: EmailForm,
  });
  const { setLoading } = useSharedStoreContext();
  const { recoveryPassword } = useAuthService();
  const submitEmail = (event) => {
    handleSubmit(event, async ({ email }) => {
      setLoading(true);
      await recoveryPassword(email);
      setLoading(false);
      navigate.push('/auth/email-sended');
    });
  }
  return (
    <>
      <Form onSubmit={submitEmail} width={'75%'}>
        <TextInput placeholder="Your email" {...register('email')} />
        <Button type="submit">Identify</Button>
      </Form>
    </>
  );
}
