import React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { InputContainer } from "./styles";

export default function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return <InputContainer {...rest} placeholderTextColor={COLORS.GRAY_300} />;
}
