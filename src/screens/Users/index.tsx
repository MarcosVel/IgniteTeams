import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Container, Form } from "./styles";

export default function Users() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header showBackButton />

        <Highlight
          title="Nome da turma"
          subtitle="Adicione a galera e separe os times"
        />

        <Form>
          <Input placeholder="Nome da pessoa" autoCorrect={false} />
          <ButtonIcon icon="add" />
        </Form>

        <Filter title="Time A" />
      </Container>
    </TouchableWithoutFeedback>
  );
}
