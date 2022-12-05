import Button from "@components/Button";
import ButtonIcon from "@components/ButtonIcon";
import EmptyList from "@components/EmptyList";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import UserCard from "@components/UserCard";
import { useRoute } from "@react-navigation/native";
import { userAddByGroup } from "@storage/user/userAddByGroup";
import { usersGetByGroup } from "@storage/user/usersGetByGroup";
import { AppError } from "@utils/AppError";
import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  FlatList,
  Keyboard,
  Alert,
} from "react-native";
import { Container, Form, Gradient, HeaderList, TeamsQuantity } from "./styles";

type RouteParams = {
  group: string;
};

export default function Users() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState("Turma React Native");
  const [newUserName, setNewUserName] = useState("");

  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddUser() {
    if (newUserName.trim().length === 0) {
      return Alert.alert(
        "Novo usuário",
        "Informe um nome de usuário para adicionar."
      );
    }

    const newUser = {
      name: newUserName,
      team,
    };

    try {
      await userAddByGroup(newUser, group);

      const logUsers = await usersGetByGroup(group);
      console.log(logUsers);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo usuário", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo usuário", "Não foi possível adicionar.");
      }
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header showBackButton />

        <Highlight
          title={group}
          subtitle="Adicione a galera e separe os times"
        />

        <Form>
          <Input
            placeholder="Nome da pessoa"
            autoCorrect={false}
            onChangeText={setNewUserName}
          />
          <ButtonIcon icon="add" onPress={handleAddUser} />
        </Form>

        <HeaderList>
          <FlatList
            data={[
              "Turma React Native",
              "Turma React",
              "Time Angular",
              "Time D",
              "Time E",
            ]}
            keyExtractor={item => item}
            renderItem={({ item }) => (
              <Filter
                title={item}
                isActive={item === team}
                onPress={() => setTeam(item)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 32 }}
          />
          <Gradient
            colors={["transparent", "#202024"]}
            start={[0, 1]}
            end={[0.6, 1]}
          >
            <TeamsQuantity>{team.length}</TeamsQuantity>
          </Gradient>
        </HeaderList>

        <FlatList
          data={users}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <UserCard name={item} onRemove={() => {}} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyList message="Não há pessoas nesse time." />
          )}
          contentContainerStyle={[
            { paddingBottom: 32 },
            users.length === 0 && { flex: 1 },
          ]}
        />

        <Button title="Remover Turma" type="SECONDARY" />
      </Container>
    </TouchableWithoutFeedback>
  );
}
