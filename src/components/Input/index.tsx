import React from "react";
import { TextInputProps } from "react-native";
import { InputContainer } from "./styles";

export default function Input({ ...rest }: TextInputProps) {
  return <InputContainer {...rest} />;
}
