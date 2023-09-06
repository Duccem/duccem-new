import * as React from "react";

interface Props {
  children?: React.ReactNode;
}

export const TextInput = ({ children }: Props) => {
  return (
    <div>
      <h1>textInput</h1>
      {children}
    </div>
  );
};
