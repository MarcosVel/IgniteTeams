import ButtonIcon from "@components/ButtonIcon";
import React from "react";
import { Container, Icon, Name } from "./styles";
import { TouchableWithoutFeedback } from "react-native";

type Props = {
  name: string;
  onRemove: () => void;
};

export default function UserCard({ name, onRemove }: Props) {
  return (
    <TouchableWithoutFeedback>
      <Container>
        <Icon name="person" />
        <Name numberOfLines={1}>{name}</Name>
        <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
