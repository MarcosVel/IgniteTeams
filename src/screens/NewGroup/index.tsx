import Button from "@components/Button";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { AppError } from "@utils/AppError";
import React, { useState } from "react";
import { Keyboard, TouchableWithoutFeedback, Alert } from "react-native";
import { Container, Content, Icon } from "./styles";

export default function NewGroup() {
  const navigation = useNavigation();
  const [group, setGroup] = useState("");

  const handleNewGroup = async () => {
    try {
      // trim() remove espaços vazios
      if (group.trim().length === 0) {
        return Alert.alert("Novo grupo", "Informe um novo para o grupo.");
      }

      await groupCreate(group);
      navigation.navigate("users", { group: group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo grupo", error.message);
      } else {
        Alert.alert("Novo grupo", "Não foi possível criar um novo grupo.");
        console.log(error);
      }
    }
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
