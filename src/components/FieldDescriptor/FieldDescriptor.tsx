import React from "react";
import * as FD from "./FieldDescriptor.styles";

export interface FieldDescriptorProps {
  title: string;
  description: React.ReactNode;
}

export default function FieldDescriptor(props: FieldDescriptorProps) {
  return (
    <FD.Wrapper>
      <FD.Field>{props.title}:</FD.Field>
      <FD.Value>{props.description}</FD.Value>
    </FD.Wrapper>
  );
}
