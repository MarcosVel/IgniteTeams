import Button from "@components/Button";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { Container, Content, Icon } from "./styles";

export default function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  const handleNewGroup = () => {
    navigation.navigate("users", { group: group });
  };

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

          <Input placeholder="Nome da turma" onChangeText={setGroup} />

          <Button
            title="Criar"
            style={{ marginTop: 20 }}
            onPress={handleNewGroup}
          />
        </Content>
      </TouchableWithoutFeedback>
    </Container>
  );
}
