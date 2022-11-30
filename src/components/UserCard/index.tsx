import ButtonIcon from "@components/ButtonIcon";
import React from "react";
import { Container, Icon, Name } from "./styles";
import { TouchableWithoutFeedback } from "react-native";

export default function UserCard({ name, onRemove }) {
  return (
    <TouchableWithoutFeedback>
      <Container>
        <Icon name="person" />
        <Name numberOfLines={1}>{name}</Name>
        <ButtonIcon icon="close" type="SECONDARY" />
      </Container>
    </TouchableWithoutFeedback>
  );
}
