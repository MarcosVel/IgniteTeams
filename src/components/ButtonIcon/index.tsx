import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {};

export default function ButtonIcon({}: Props) {
  return (
    <Container>
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
}
