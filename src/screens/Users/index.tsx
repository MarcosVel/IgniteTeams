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
import { userRemoveByGroup } from "@storage/user/userRemoveByGroup";
import { usersGetByGroupAndTeam } from "@storage/user/usersGetByGroupAndTeam";
import { AppError } from "@utils/AppError";
import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  TextInput,
  TouchableWithoutFeedback,
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

  const inputUserNameRef = useRef<TextInput>(null);

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

      // remove focus
      inputUserNameRef.current?.blur();

      setNewUserName("");
      fetchUsersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo usuário", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo usuário", "Não foi possível adicionar.");
      }
    }
  }

  async function fetchUsersByTeam() {
    try {
      const usersByTeam = await usersGetByGroupAndTeam(group, team);
      setUsers(usersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert("Pessoas", "Não foi possível filtrar as pessoas do time.");
    }
  }

  async function handleUserRemove(userName: string) {
    try {
      await userRemoveByGroup(userName, group);
      fetchUsersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert("Remover pessoa", "Não foi possível remover.");
    }
  }

  useEffect(() => {
    fetchUsersByTeam();
  }, [team]);

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
            inputRef={inputUserNameRef}
            placeholder="Nome da pessoa"
            autoCorrect={false}
            onChangeText={setNewUserName}
            value={newUserName}
            onSubmitEditing={handleAddUser}
            returnKeyType="done"
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
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <UserCard
              name={item.name}
              onRemove={() => handleUserRemove(item.name)}
            />
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
