import Button from "@components/Button";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Container, Content, Icon } from "./styles";

export default function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Content>
          <Icon />

          <Highlight
            title="Nova turma"
            subtitle="Crie a turma para adicionar as pessoas"
          />

          <Input />

          <Button title="Criar" />
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
}
