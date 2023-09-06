import { Button, Header } from "ui";
import { Test } from 'team-management'

export default function Page(): JSX.Element {
  return (
    <>
      <Header text={new Test().test()} />
      <Button />
    </>
  );
}
