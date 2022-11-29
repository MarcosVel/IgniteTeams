import ButtonIcon from "@components/ButtonIcon";
import React from "react";
import { Container, Icon, Name } from "./styles";

export default function UserCard({ name }) {
  return (
    <Container>
      <Icon name="person" />
      <Name numberOfLines={1}>{name}</Name>
      <ButtonIcon icon="close" type="SECONDARY" />
    </Container>
  );
}
